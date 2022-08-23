function generateName() {
    let tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
    let resp = ["_"];
    for(let i=0; i<30; i++) {
        resp.push(tab[Math.floor(Math.random()*tab.length)]);
    }
    return resp.join("");
}

function visitor(element, obj, callback) {
    if(("name" in element) && ("value" in element)) {
        callback(element, obj);
    } else {
        for(let i=0; i<element.children.length; i++) {
            visitor(element.children[i],obj,callback);
        }
    }
}

function elementData(attrs, rootElement) {
    let data = attrs.data || {};
    let oninput = attrs.oninput || (()=>{});

    rootElement.addEventListener("input",ev=>{
        visitor(rootElement, data,(element,obj) => {
            obj[element.name] = element.value;
        });
        oninput(ev);
        visitor(rootElement,data,(element,obj)=>{
            element.value = obj[element.name];
        });
    });

    visitor(rootElement,data,(element,obj)=>{
        element.value = obj[element.name];
    });
    return rootElement;
}

export { generateName, elementData };
