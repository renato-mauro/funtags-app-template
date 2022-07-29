import ft from 'funtags';

function teste()
{
    let { div, h1, h2 } = ft.html;
    return div(
        h1("Hello"),
        h2("World")
    )
}

document.body.append(teste());
