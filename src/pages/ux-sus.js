import ft from 'funtags';
import { radioGrid } from '../lib/components/radioGrid';
import { elementData } from '../lib/components/utils';

let questions = [
    "Eu acho que gostaria de usar esse sistema com frequência.",
    "Eu acho o sistema desnecessariamente complexo.",
    "Eu achei o sistema fácil de usar.",
    "Eu acho que precisaria de ajuda de uma pessoa com conhecimentos técnicos para usar o sistema.",
    "Eu acho que as várias funções do sistema estão muito bem integradas.",
    "Eu acho que o sistema apresenta muita inconsistência.",
    "Eu imagino que as pessoas aprenderão como usar esse sistema rapidamente.",
    "Eu achei o sistema atrapalhado de usar.",
    "Eu me senti confiante ao usar o sistema.",
    "Eu precisei aprender várias coisas novas antes de conseguir usar o sistema."
];

let answers = [
    [ 1, "Discordo Totalmente 1" ],
    [ 2, "2" ],
    [ 3, "3" ],
    [ 4, "4" ],
    [ 5, "Concordo Totalmente 5" ],
];


function uxSus() {

    let data = { sus: [1,2,3,3,2,3,4,5,1,2], obs: "RENATO" };

    const { div, textarea } = ft.html;
    
    function oninput() {
        console.log(data);
    }

    return elementData({data,oninput},
        div(
            {class:"container"},
            radioGrid("sus", questions, answers),
            textarea({name:"obs",rows:6,cols:80}),
        )
    );
}

export { uxSus };

