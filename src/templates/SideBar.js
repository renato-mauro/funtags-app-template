import ft from 'funtags';
import { appTitle, menuData } from '../config/menuData';

const { div, ul, li, a, button, span } = ft.html;

function sideBarMenu() {

    let root;

    function adjustSelected() {
        root.querySelectorAll("a").forEach(element=>{
            element.classList.remove("selected");
        });
        this.classList.add("selected");
    }

    function subMenuItems(id, d, open) {

        function itemElement(item) {
            const aAttrs = { 
                "class": "link-dark d-inline-flex text-decoration-none rounded",
                onclick: adjustSelected
            };
            return li(a({href:item.href,...aAttrs},item.text));
        }

        const ulAttrs = { 
            "class": "btn-toggle-nav list-unstyled fw-normal pb-1 small" 
        };

        return div({class:`collapse${open?" show":""}`, id},
            ul(ulAttrs, ...d.map(itemElement))
        );
    }

    function menuItem(d) {
        const id = `menuItem${(""+Math.random()).split(".")[1]}`;
        const btAttr = {
            "class":"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed",
            "data-bs-toggle": "collapse",
            "data-bs-target": `#${id}`,
            "aria-expanded": "true"
        };
        const item = li({"class":"mb-1"},
            button(btAttr,d.text),
            subMenuItems(id,d.children,d.open)
        );
        if(d.divideBefore) {
            return [ li({"class": "border-top my-3"}), item ]
        } else {
            return item;
        }
    }

    root = ul({"class":"list-unstyled ps-0"},
        ...menuData.map(menuItem)
    );

    return root;
}

function sideBar() {
    const divAttrs = {"class":"flex-shrink-0 p-3 bg-light","style":{"width":"230px","height":"100vh"}};
    const titleAttrs = {"href":"/","class":"d-flex align-items-center link-dark text-decoration-none"};
    document.title = appTitle;
    return div(divAttrs,
        a(titleAttrs,span({"class":"fs-5 fw-semibold"},appTitle)),
        div(sideBarMenu())
    );
}

export { sideBar };
