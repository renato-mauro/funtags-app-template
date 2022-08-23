import ft from 'funtags';
import { generateName } from './utils';

const SYMBOL_INDEX = Symbol();

function radioGrid(name, questions, answers) {

    const radioNames = questions.map(_=>generateName());
    const { table, thead, tbody, th, tr, td, input } = ft.html;
    const hstyle = { class: `col-${12-answers.length}` };
    const qstyle = { class: "col-1 text-center" };

    function radio(i, value) {
        let resp = input({class:"form-check-input",type:"radio",name:radioNames[i],value});
        resp[SYMBOL_INDEX] = i;
        return resp;
    }

    let resp = table({class:"table table-striped"},
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
                        td(qstyle,radio(i,value))
                    )
                )
            )
        )
    );

    Object.defineProperty(resp,"value",{
        get() {
            let a = [];
            resp.querySelectorAll("input:checked").forEach(rd => {
                a[rd[SYMBOL_INDEX]] = rd.value; 
            });
            return a;
        },
        set(newValue) {
            resp.querySelectorAll("input").forEach(rd => {
                if(newValue[rd[SYMBOL_INDEX]] == rd.value) {
                    rd.setAttribute("checked","checked");
                } else {
                    rd.removeAttribute("checked");
                }
            });
        }
    });

    Object.defineProperty(resp,"name",{
        get() {
            return name;
        }
    });

    return resp;
}

export { radioGrid };
