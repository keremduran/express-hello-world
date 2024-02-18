const {searchResultDialog} = require ("./views/partials/SearchResultDialog");

const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3001;
const htmlParser = require("node-html-parser");
const FlexSearch = require("flexsearch");
const bodyParser = require("body-parser");

const {cleanAllContent, scrape} = require("./util/contentManagement")
const {flexSearchIndexAll} = require ("./util/flexSearch");
const {masterIndex} = require("./data/masterIndex");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

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

app.get("/*", (req, res) => {
        const filePath = path.join(__dirname, `public/index.html`);
        res.sendFile(filePath);
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

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 30 * 1000; // 30 seconds
server.headersTimeout = 35 * 1000; // 35 seconds
