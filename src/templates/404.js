import ft from 'funtags';

function page404()
{
    const { h1 } = ft.html;
    return h1("404 - Page not found");
}

export { page404 };