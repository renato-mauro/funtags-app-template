import { mainTemplate } from './lib/MainTemplate';
import { loremIpsum } from './pages/LoremIpsum';
import { loremIpsum2 } from './pages/LoremIpsumB';
import { router } from './lib/Router';
import { testeVerticalBox } from './pages/TesteVerticalBox';

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

mainTemplate(

    "Título da Aplicação",

    menuData,

    router("#home-overview", {
        "#home-overview": loremIpsum,
        "#home-updates": loremIpsum2,
        "#home-reports": loremIpsum,
        "#dashbord-overview": testeVerticalBox
    })

);
