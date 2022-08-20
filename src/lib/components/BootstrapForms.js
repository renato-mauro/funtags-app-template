import ft from 'funtags';

function bsRadioGroup(name, targetObject) {

    let otherList = [];
    const SYMB_TEXT = Symbol();

    function oninput(ev) {
        let otherText = null;
        let otherRadio = null;
        for(let [rd,tx] of otherList) {
            if(rd.checked) {
                otherRadio = rd;
                otherText = tx;
                if(tx != ev.target) {
                    tx.removeAttribute("disabled");
                    tx.focus();
                    tx.setSelectionRange(0,tx.value.length);
                }
            } else {
                tx.setAttribute("disabled","disabled");
            }
        }
        if(otherText) {
            targetObject[name] = { value: otherRadio.value, text: otherText.value };
        } else {
            targetObject[name] = { value: ev.target.value, text: ev.target[SYMB_TEXT] };
        }
    }

    function item(value, text) {
        const { div, input, label } = ft.html;
        text ||= value;
        const rd = input({class:"form-check-input", type:"radio", oninput, name, value});
        rd[SYMB_TEXT] = text;
        return div (
            {class:"form-check"},
            label(
                {class:"form-check-label py-1"},
                rd,
                text
            )
        );
    }
    
    function other(value,placeholder) {
        const { div, input, label } = ft.html;
        let rd, tx;

        rd = input({class:"form-check-input my-2", type:"radio", value, oninput, name});
        tx = input({class:"form-control form-control-sm",placeholder,disabled:"disabled",oninput,type:"text",style:{maxWidth:"250px"}});
        otherList.push([rd,tx]);

        return div (
            {class:"form-check form-check-inline"},
            label({class:"form-check-label",onclick:()=>rd.click()},rd,tx)
        );
    }

    return { item, other };
}

export { bsRadioGroup };

