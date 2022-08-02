import ft from "funtags";

function verticalSplitBox(...args) {
    const { div } = ft.html;
    return div({"class":"d-flex h-100"},
        ...args.map(e => div({"class":"mh-100 flex-fill"},e))
    )
}

export { verticalSplitBox }
