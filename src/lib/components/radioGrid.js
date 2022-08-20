import ft from 'funtags';

function radioGrid(name, data, questions, answers) {

    const { table, thead, tbody, th, tr, td, input } = ft.html;

    const hstyle = { class: `col-${12-answers.length}` };
    const qstyle = { class: "col-1 text-center" };

    function oninput(ev,i,value) {
        if(!(data[name] instanceof Array)) {
            data[name] = [];
        }
        data[name][i] = value;
    }

    return table({class:"table table-striped"},
        thead(
            tr(
                th(),
                answers.map(([_,label])=>th({class:"text-center"},label))
            )
        ),
        tbody(
            questions.map((q,i)=>
                tr(
                    td(hstyle,q),
                    answers.map(([value,_])=>
                        td(qstyle,input({class:"form-check-input",type:"radio",name:`${name}_${i}`,oninput:(ev)=>oninput(ev,i,value)}))
                    )
                )
            )
        )
    )
}

export { radioGrid };

