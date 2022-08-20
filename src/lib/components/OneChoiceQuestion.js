import ft from 'funtags';

const { div, label, input } = ft.html;

function oneChoiceQuestion(question, itens, otherLabel) {

    let radioName = ("rd"+Math.random()).replace(".","");
    let radioAttributes = {
        class:"form-check-input",
        type:"radio",
        name:radioName,
        oninput(ev) {
            console.log(ev)
        }
    }

    return div(
        div(question),
        div(
            itens.map((d,i)=>
                div({class:"input-group m-2"},
                    div({class:"input-group-text"},
                        input({id:`${radioName}-${i}`, ...radioAttributes}),
                    ),
                    label({class:"form-control", for:`${radioName}-${i}`},d)
                )                
            ),
            (otherLabel?[otherLabel]:[]).map(d=>
                div({class:"input-group m-2"},
                    div({class:"input-group-text"},
                        input({id:`${radioName}-other`,class:"form-check-input",type:"radio",name:radioName}),
                    ),
                    input({class:"form-control",type:"text",name:"tx",placeholder:d})
                )                
            )
        )
    )
}

export { oneChoiceQuestion }