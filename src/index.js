import { mainTemplate } from './templates/MainTemplate';
import { loremIpsum } from './templates/LoremIpsum';
import { loremIpsum2 } from './templates/LoremIpsum2';
import { page404 } from './templates/404';

const appTitle = "Título da Aplicação";

const menuData = [{
    text: "Home",
    open: true,
    divideBefore: true,
    children: [
        { text: "Overview", href: "#home-overview" },
        { text: "Updates", href: "#home-updates" },
        { text: "Reports", href: "#home-reports" },
    ]
},{
    text: "Dashbord",
    open: false,
    divideBefore: false,
    children: [
        { text: "Overview", href: "#dashbord-overview" },
        { text: "Weekly", href: "#dashboard-weekly" },
        { text: "Monthly", href: "#dashboard-monthly" },
        { text: "Annually", href: "#dashboard-annually" },
    ]
},{
    text: "Orders",
    open: false,
    divideBefore: false,
    children: [
        { text: "New", href: "#orders-new" },
        { text: "Processed", href: "#orders-processed" },
        { text: "Shipped", href: "#orders-shipped" },
        { text: "Returned", href: "#orders-returned" },
    ]
},{
    text: "Account",
    divideBefore: true,
    open: false,
    children: [
        { text: "New...", href: "#account-new" },
        { text: "Profile", href: "#account-profile" },
        { text: "Settings", href: "#account-settings" },
        { text: "Sign out", href: "#account-signout" },
    ]
}];

let template = mainTemplate()
    .title(appTitle)
    .menu(menuData)
    .activate()
;

function updateHash() {
    let hash = window.location.hash;
    if(hash === "#" || hash.length === 0) {
        hash = "#home-overview";
    }
//    template.select(hash);
    if(hash == "#home-overview") {
        template.content(loremIpsum());
    } else if(hash == "#home-updates") {
        template.content(loremIpsum2());
    } else {
        template.content(page404());
    }
}

updateHash();

window.addEventListener("hashchange",updateHash);