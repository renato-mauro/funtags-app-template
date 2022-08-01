import { page404 } from "../pages/404";

function router(template, homePage, routes) {
    function updateHash() {
        let hashName, args;
        let hash = /^(#[^(]*)(\(([^\)]*)\))?$/.exec(window.location.hash);
        if(hash) {
            hashName = hash[1];
            args = (hash[3] && hash[3].split(",").map(decodeURI)) || [];
        } else {
            hashName = homePage;
            args = [];
        }
        template.content((routes[hashName] || page404)(args,hashName), hashName);
    }
    window.addEventListener("hashchange",updateHash);
    updateHash();
}

export { router };