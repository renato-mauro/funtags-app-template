import ft from "funtags";

function horizontalFlexBox(...args) {
    const { div } = ft.html;
    return div({"class":"d-flex vh-100"},args);
}

function verticalFlexBox(...args) {
    const { div } = ft.html;
    return div({"class":"d-flex vh-100 flex-column"},args);
}

export { horizontalFlexBox, verticalFlexBox }
