import ft from 'funtags';
import { sideBarCollapsibleMenu } from './components/SideBarCollapsibleMenu';

const { div, a, span, main } = ft.html;

function createTemplate() {
    const mainStyle = {
        "height": "100vh",
        "max-height": "100vh",
        "overflow-x": "auto",
        "overflow-y": "hidden"
    };
    const sideBarDivAttrs = {
        "class": "flex-shrink-0 p-3 bg-light",
        "style": {
            "width": "230px",
            "height": "100vh"
        }
    };
    const titleAttrs = {
        "href": "/",
        "class": "d-flex align-items-center link-dark text-decoration-none"
    };
    const contentAttrs = {
        "class": "flex-fill",
        "style": {
            "overflow-y":"auto"
        }
    };

    let menuContainer = div();
    let titleContainer = span({"class":"fs-5 fw-semibold"})
    let contentContainer = div(contentAttrs);
    let menuElement = null;
    let mt = main({"class":"d-flex flex-nowrap",style:mainStyle},
        div(sideBarDivAttrs,
            a(titleAttrs,titleContainer),
            menuContainer
        ),
        contentContainer
    );

    function title(newTitle) {
        titleContainer.textContent = newTitle;
        document.title = newTitle;
        return this;
    }

    function menu(menuData) {
        menuElement = sideBarCollapsibleMenu(menuData);
        menuContainer.replaceChildren(menuElement)
        return this;
    }

    function content(element, hashMenu) {
        contentContainer.replaceChildren(element);
        if(menuElement) {
            menuElement.selectItem(hashMenu||"#");
        }
        return this;
    }

    function activate() {
        document.body.replaceChildren(mt);
        return this;
    }

    return { title, menu, content, activate }
}

let mainTemplateSigleton = null;

function mainTemplate() {
    return mainTemplateSigleton || (mainTemplateSigleton = createTemplate());
}

export { mainTemplate };
  