import { page404 } from "../pages/404";
import ft from "funtags";

function decodeHash() {
    let hashName, args;
    let hash = /^(#[^(]*)(\(([^\)]*)\))?$/.exec(window.location.hash);
    if(hash) {
        hashName = hash[1];
        args = (hash[3] && hash[3].split(",").map(decodeURI)) || [];
    } else {
        hashName = "";
        args = [];
    }
    return { hashName, args }
}

function router(homePage, routes) {
    const { div } = ft.html;
    let placeholder = div({class:"router"});
    function updateHash() {
        let { hashName, args } = decodeHash();
        if(hashName == "") {
            window.open(homePage,"_self");
        } else {
            placeholder.replaceChildren((routes[hashName] || page404)(args));
            placeholder.dispatchEvent(new CustomEvent("pagechange",{bubbles:true,detail:{hashName,args}}));
        }
    }
    window.addEventListener("hashchange",updateHash);
    setTimeout(updateHash,1);
    return placeholder;
}

export { router, decodeHash };