import ft from "funtags";

function horizontalFlexBox(...args) {
    const { div } = ft.html;
    return div({"class":"d-flex vh-100"},
        args.map(e=>div({style:{"overflow-y":"auto"}},e))
    );
}

function verticalFlexBox(...args) {
    const { div } = ft.html;
    args.forEach(e=>e.style["overflow-y"]="auto");
    return div({"class":"d-flex vh-100 flex-column"},
        args.map(e=>div({style:{"overflow-y":"auto"}},e))
    );
}

export { horizontalFlexBox, verticalFlexBox }
