
const path = require('path');
const fs = require('fs');
const htmlParser = require("node-html-parser");
const https = require("https");
const {masterIndex} = require("../data/masterIndex");

const brokenLinkMap = {};
const activeLinkMap = {};

/**
 *
 * @param {HTMLElement} contentEl
 * @returns {*}
 */
function cleanBrokenLinks(contentEl) {
    // Bing chat magic... also this website explains it a bit https://regexr.com/
    const brokenLinksPattern = /(\w+)\s*=\s*"([^"]+)"\s*title\s*=\s*"([^"]+)"*>|(\s*http:[^"]+)"\s*title\s*=\s*"([^"]+)"*>/g;
    //
    // const brokenLinkMap = {
    //     'openings="http://thehandyforce.com/windows/" title ="Window installer in Toronto">': 110,
    //     'flooring="http://thehandyforce.com/flooring/" title ="Handyman flooring install Toronto">': 26,
    //     'http://thehandyforce.com/insulation/" title ="Toronto home insulation">': 77,
    //     'wireref ="http://thehandyforce.com/electrical/" title ="Electricians in East York">': 27,
    //     'doorway ="http://thehandyforce.com/doors/" title ="Toronto Door installer">': 72,
    //     'outdoorref ="http://thehandyforce.com/doors/" title ="Toronto Door installer">': 27,
    //     'venting ="http://thehandyforce.com/interior/bathroom-renovations/" title ="Toronto Bathroom renovation inspiration">': 17,
    //     'lighting="http://thehandyforce.com/electrical/" title ="East York Electrician">': 38,
    //     'exitdoorway ="http://thehandyforce.com/doors/" title ="Toronto Door installer">': 1,
    //     'preventing ="http://thehandyforce.com/interior/bathroom-renovations/" title ="Toronto Bathroom renovation inspiration">': 1,
    //     'subflooring="http://thehandyforce.com/flooring/" title ="Handyman flooring install Toronto">': 13,
    //     'Subflooring="http://thehandyforce.com/flooring/" title ="Handyman flooring install Toronto">': 4
    // /(\w+)\s*=\s*"([^"]+)"\s*title\s*=\s*"([^"]+)"*>/g
    // for -> venting ="http://thehandyforce.com/interior/bathroom-renovations/" title ="Toronto Bathroom renovation inspiration">
    // /(\s*http:[^"]+)"\s*title\s*=\s*"([^"]+)"*>/g;
    // for -> http://thehandyforce.com/interior/bathroom-renovations/" title ="Toronto Bathroom renovation inspiration">
    // }

    const brokenLinkFound = brokenLinksPattern.test(contentEl.textContent);

    const brokenLinks = contentEl.textContent.matchAll(brokenLinksPattern);

    [...brokenLinks].forEach(link => {
        if(!brokenLinkMap[link[0]]) {
            brokenLinkMap[link[0]] = 1;
        }
        else {
            brokenLinkMap[link[0]] += 1;
        }
    });

    if(!brokenLinkFound) return contentEl;

    contentEl.innerHTML = contentEl.innerHTML.replaceAll(brokenLinksPattern, "");
    // Replace matches with an empty string

    return contentEl;
}

/**
 *
 * @param {HTMLElement} contentEl
 * @returns {*}
 */
function cleanActiveLinks(contentEl) {
    // Define the regex pattern
    const links = contentEl.querySelectorAll("a");

    links.forEach(link => {
        const linkHTML = link.outerHTML;
        const textContent = link.textContent;
        const linkURL = link.getAttribute("href");

        const linkRemovable =
            linkURL?.length === 0 ||
            linkURL?.includes("http://") ||
            linkURL?.includes("https://")

        if(!linkRemovable) return;

        if(!activeLinkMap[linkHTML]) {
            activeLinkMap[linkHTML] = 1;
        }
        else {
            activeLinkMap[linkHTML] += 1;
        }

        contentEl.innerHTML = contentEl.innerHTML.replaceAll(linkHTML, textContent);
    });

    return contentEl;
}

/**
 * cleans broken links like
 * openings="http://thehandyforce.com/windows/" title="Window installer in Toronto">
 * venting="http://thehandyforce.com/interior/bathroom-renovations/" title="Toronto Bathroom renovation inspiration">
 */
exports.cleanAllContent = (req, res) => {
    console.log("CLEANUP");
    let allowCleanup = false;
    if(!allowCleanup) return;
    const pageCount = 2267;
    for (let i = 1; i <= pageCount; i++) {
        //if(i !== 1020) continue;
        const filePath = `views/content/${i}.html`;

        fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
            if (err) {
                // console.error(err);
                return;
            }

            const contentEl = htmlParser.parse(data);

            try {
                const contentNoLinks = cleanActiveLinks(contentEl, filePath);
                const contentNoBrokenLinks = cleanBrokenLinks(contentNoLinks, filePath);

                fs.writeFileSync(filePath, contentNoBrokenLinks.innerHTML);
            }
            catch (e) {
                console.error(e);
                res.send(e);
            }


            if(i === pageCount) {
                const cleanupReport = {brokenLinkMap, activeLinkMap};
                console.log("CLEANUP REPORT\n", cleanupReport);
                res.send(JSON.stringify(cleanupReport));
            }
        });
    }
}

exports.scrape = (req, res) => {
    console.log("SCRAPING")
    const allowOverride = false;
    let allowScrape = true;
    if (!allowScrape) return;
    for (let i = 0; i < 2269; i++) {
        const fileName = `${i}.html`;
        const url = "https://www.buildingcode.online/" + fileName;
        const filePath = `views/content/${fileName}`;

        if (fs.existsSync(filePath) && !allowOverride) {
            continue;
        }
        else {
            console.log(filePath);
        }

        https.get(url, res => {
            let data = [];
            const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
            console.log(headerDate)

            res.on('data', chunk => {
                data.push(chunk);
            });

            res.on('end', () => {
                // const contentEl = htmlParser
                //     .parse(Buffer.concat(data).toString())
                //     .querySelector(".content");
                //
                // const contentNoLinks = cleanActiveLinks(contentEl);
                // const contentNoBrokenLinks = cleanBrokenLinks(contentNoLinks);
                // const contentWithInternalLinks = addInternalLinks(contentNoBrokenLinks);
                // fs.writeFileSync(filePath, contentNoBrokenLinks.outerHTML);

                //console.log('Response ended.', filePath);
            });
        }).on('error', err => {
            console.log('Error: ', err.message);
        });
    }


    res.type("html").send("<div>SCRAPING BRO</div>");
}

/**
 *
 * @param {HTMLElement} contentEl
 * @param fileId
 * @param faultyPages
 * @returns {*}
 */
const addInternalLinks = (contentEl, fileId, faultyPages) => {
    let newContent;

    //const contentEl = htmlParser.parse(data);

    // This must be called AFTER cleaning all the active links.
    if(contentEl.querySelectorAll("a").length > 0) return;

    const contentBeforeUpdate = contentEl.innerText.trim();

    newContent = data;

    masterIndex.forEach(contentInfo => {
        if (!contentInfo.id || contentInfo.id === fileId) return;
        if(contentInfo.code.split(".").length !== 5) return;

        const internalLink = `<a href="/content/${contentInfo.id}" title="${contentInfo.title}">${contentInfo.code}</a>`

        newContent = newContent.replaceAll(contentInfo.code, internalLink);
    });

    const contentAfterUpdate = htmlParser.parse(newContent).innerText.trim();

    if(contentAfterUpdate !== contentBeforeUpdate) {
        if(faultyPages.length === 6) {
            console.log({contentAfterUpdate, contentBeforeUpdate})
        }
        faultyPages.push(fileId);
    }

    return newContent;
}


const addInternalLinksToAllPages = () => {
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

            fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const contentEl = htmlParser.parse(data);
                let newContent = addInternalLinks(contentEl, id, faultyPages);

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

// addInternalLinksToAllPages();