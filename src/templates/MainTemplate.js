import ft from 'funtags';
import { appTitle, menuData } from '../config/menuData';

const { div, ul, li, a, button, span, main, style } = ft.html;

function sideBarMenuCSS() {
    let s = style();
    s.textContent = `
        @import url('css/bootstrap.min.css');

        .btn-toggle {
            padding: .25rem .5rem;
            font-weight: 600;
            color: rgba(0, 0, 0, .65);
        }
      
        .btn-toggle::before {
            width: 1.25em;
            line-height: 0;
            content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
            transition: transform .35s ease;
            transform-origin: .5em 50%;
        }
      
        .btn-toggle.show {
            color: rgba(0, 0, 0, .85);
        }
      
        .btn-toggle.show::before {
            transform: rotate(90deg);
        }
      
        .btn-toggle-nav a {
            padding: .1875rem .5rem;
            margin-top: .125rem;
            margin-left: 1.25rem;
        }

        .btn-toggle-nav a:hover {
            background-color: #ddd;
        }
      
        .btn-toggle-nav a.selected {
            background-color: #999;
        }      
    `;
    return s;
}

function sideBarMenu() {

    let root;

    function adjustSelected() {
        root.querySelectorAll("a").forEach(element=>{
            element.classList.remove("selected");
        });
        this.classList.add("selected");
    }

    function subMenuItems(d) {

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

        return div({"class":"collapse"},
            ul(ulAttrs,...d.map(itemElement))
        );
    }

    function menuItem(d) {
        let bt, bsCollapsible, subMI;

        const btAttr = {
            "class":"btn btn-toggle d-inline-flex align-items-center rounded border-0",
            "onclick": () => {
                if(subMI.classList.contains("show")) {
                    bt.classList.remove("show");
                    bsCollapsible.hide();
                } else {
                    bt.classList.add("show");
                    bsCollapsible.show();
                }
            }
        };
        bt = button(btAttr,d.text);
        if(d.open) {
            bt.classList.add("show");
        }
        subMI = subMenuItems(d.children);
        bsCollapsible = bootstrap.Collapse.getOrCreateInstance(subMI,{toggle:d.open});

        if(d.divideBefore) {
            return [ li({"class": "border-top my-3"}), li({"class":"mb-1"},bt,subMI) ]
        } else {
            return li({"class":"mb-1"},bt,subMI);
        }
    }

    root = ul({"class":"list-unstyled ps-0"},
        ...menuData.map(menuItem)
    );

    let result = div();
    let shadow = result.attachShadow({mode:'open'});
    shadow.appendChild(sideBarMenuCSS());
    shadow.appendChild(root);
    return result;
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

function mainTemplate(homePage) {
    const style = {
        "height": "100vh",
        "max-height": "100vh",
        "overflow-x": "auto",
        "overflow-y": "hidden"
    };
    let mt = main({"class":"d-flex flex-nowrap",style},
        sideBar(),
        div({"class":"flex-shrink-1 p-4","style":{"overflow-y":"auto"}},homePage)
    );
    document.body.replaceChildren(mt);
}

export { mainTemplate };
  