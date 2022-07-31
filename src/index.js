import { mainTemplate } from './templates/MainTemplate';
import { loremIpsum } from './templates/LoremIpsum';
import { loremIpsum2 } from './templates/LoremIpsum2';

const appTitle = "Título da Aplicação";

const menuData = [{
    text: "Home",
    open: true,
    divideBefore: true,
    children: [
        { text: "Overview", href: "#" },
        { text: "Updates", href: "#" },
        { text: "Reports", href: "#" },
    ]
},{
    text: "Dashbord",
    open: false,
    divideBefore: false,
    children: [
        { text: "Overview", href: "#" },
        { text: "Weekly", href: "#" },
        { text: "Monthly", href: "#" },
        { text: "Annually", href: "#" },
    ]
},{
    text: "Orders",
    open: false,
    divideBefore: false,
    children: [
        { text: "New", href: "#" },
        { text: "Processed", href: "#" },
        { text: "Shipped", href: "#" },
        { text: "Returned", href: "#" },
    ]
},{
    text: "Account",
    divideBefore: true,
    open: false,
    children: [
        { text: "New...", href: "#" },
        { text: "Profile", href: "#" },
        { text: "Settings", href: "#" },
        { text: "Sign out", href: "#" },
    ]
}];

let template = mainTemplate()
    .title(appTitle)
    .menu(menuData)
    .content(loremIpsum())
    .activate()
;

setTimeout(()=>{
    template.content(loremIpsum2())
},2000);
