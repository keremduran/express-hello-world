const {searchResultDialog} = require ("./views/partials/SearchResultDialog");

const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const FlexSearch = require("flexsearch");
const bodyParser = require("body-parser");

const {cleanAllContent, scrape} = require("./util/contentManagement")
const {flexSearchIndexAll} = require ("./util/flexSearch");
const {masterIndex} = require("./data/masterIndex");

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
 *  include history when new link is added
 *  Add link to CAN/ULC
 *      regex search for CAN/ULC + standardscode
 *      opens external link in new tab
 *      https://www.scc.ca/en/search/standardsdb/CAN%252Fulc-S705.2
 *  CSS Update
 *      make the style yours
 */

flexSearchIndexAll(index);

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
            <a style="display: inline-block;" href="/content/${resultId}" title="${resultContent.title}">
                ${resultContent.code} - ${resultContent.title}
            </a>`;
    });

    resultsHtml = searchResultDialog(resultsHtml);
    res.send(resultsHtml);
});

app.get("/scrape", scrape);
app.get("/cleanup", cleanAllContent);

app.get("/:type/:id", (req, res) => {
    let filePath;

    const isHXRequest = req.header("HX-Request");

    if (isHXRequest) {
        const {id, type} = req.params;
        filePath = path.join(__dirname, `views/${type}/${id}.html`);
    }
    else {
        filePath = path.join(__dirname, `public/index.html`);
    }


    res.sendFile(filePath, function (err) {
        if (!err) return;

        console.error("Page not found", err);
        const filePath = path.join(__dirname, `views/error/not-found.html`);
        res.sendFile(filePath);
    });
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 30 * 1000; // 30 seconds
server.headersTimeout = 35 * 1000; // 35 seconds
