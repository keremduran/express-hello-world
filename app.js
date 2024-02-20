const {searchResultDialog} = require ("./views/partials/SearchResultDialog");

const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3001;
const FlexSearch = require("flexsearch");
const bodyParser = require("body-parser");

const {cleanAllContent, scrape} = require("./util/contentManagement")
const {flexSearchIndexAll} = require ("./util/flexSearch");
const {masterIndex} = require("./data/masterIndex");
const htmlParser = require("node-html-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const index = new FlexSearch.Index({
    preset: "match",
    tokenize: "full",
    resolution: 9
});

/**
 * Todo:
 *  Add links to content titles (hx-post)
 *      check if the page exists then add it
 *      check if it's the current page don't add it
 *  Add link to CAN/ULC
 *      regex search for CAN/ULC + standardscode
 *      opens external link in new tab
 *      https://www.scc.ca/en/search/standardsdb/CAN%252Fulc-S705.2
 *  CSS Update
 *      make the style yours
 */

flexSearchIndexAll(index);

const sendPartialHTML = (req, res, filePath) => {

    if(!filePath) {
        console.error("FILEPATH IS REQUIRED");
        return;
    }

    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.error(err);
            // const filePath = path.join(__dirname, `views/error/not-found.html`);
            // sendHtml(req, res, filePath);
            res.type("html").send("<div>Not found.</div>");
        } else {
            res.type("html").send(data);
        }
    });
}

app.post("/search", (req, res) => {
    const query = req.body.search;

    if (typeof query !== "string") {
        res.send("No results");
        return;
    }

    const results = index.search(query, ['content']);

    if (results.length === 0) {
        const noResultsHtml = searchResultDialog("No results");
        res.send(noResultsHtml);
        return;
    }

    let resultsHtml = "";

    results.forEach((resultId, index) => {
        const resultContent = masterIndex.find(content => content.id === resultId);

        resultsHtml += `
            <a style="display: inline-block;" hx-post="/content/${resultId}">
                ${resultContent.code} - ${resultContent.title}
            </a>`;
    });

    resultsHtml = searchResultDialog(resultsHtml);
    res.send(resultsHtml);
});


app.get("/scrape", scrape);
app.get("/cleanup", cleanAllContent);

app.get("/:type/:id", (req, res) => {
        if (req.rawHeaders.indexOf('HX-Request') === -1) {
            const filePath = path.join(__dirname, `public/index.html`);
            res.sendFile(filePath);
        }
        else {
            const {id, type} = req.params;
            const filePath = path.join(__dirname, `views/${type}/${id}.html`);
            sendPartialHTML(req, res, filePath);
        }
    }
);

app.post("/sections/:id", (req, res) => {
        const id = req.params.id;
        const filePath = path.join(__dirname, `views/sections/${id}.html`);
        sendPartialHTML(req, res, filePath);
    }
);

app.post("/content/:id",
    (req, res) => {
        const id = req.params.id;
        const filePath = path.join(__dirname, `views/content/${id}.html`);
        sendPartialHTML(req, res, filePath);
    }
);


const addInternalLinks = () => {
    const faultyPages = [];
    let updatedFileCount = 0;

    fs.readdir("views/content", (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        files.forEach((file, index) => {
            const id = file.replace(".html", ""); // remove the .html extension
            const filePath = `views/content/${file}`;
            let newContent;
            fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const contentBeforeUpdate = htmlParser.parse(data).innerText.trim();

                newContent = data;

                masterIndex.forEach(contentInfo => {
                    if (!contentInfo.id || contentInfo.id === id) return;
                    if(contentInfo.code.split(".").length !== 5) return;

                    const internalLink = `<a hx-post="/content/${contentInfo.id}">${contentInfo.code}</a>`

                    newContent = newContent.replaceAll(contentInfo.code, internalLink);
                });

                const contentAfterUpdate = htmlParser.parse(newContent).innerText.trim();

                if(contentAfterUpdate !== contentBeforeUpdate) {
                    if(faultyPages.length === 6) {
                        console.log({contentAfterUpdate, contentBeforeUpdate})
                    }
                    faultyPages.push(id);
                }

                fs.writeFile(filePath, newContent, (err) => {
                    if (err) {
                        // handle the error
                        console.error(err);
                    } else {
                        // handle the success
                        updatedFileCount++;
                    }
                });

                if(index === files.length - 1) {
                    console.log({faultyPages, updatedFileCount});
                }
            });

        });
    });
}

//addInternalLinks();



const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 30 * 1000; // 30 seconds
server.headersTimeout = 35 * 1000; // 35 seconds
