import ft from 'funtags';
import { radioGrid } from '../lib/components/radioGrid';

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

let name = "sus";
let data = {};

function uxSus() {

    const { div } = ft.html;

    function oninput() {
        console.log(data);
    }

    return div(
        {class:"container",oninput},
        radioGrid("sus",data,questions,answers)
    )
}

export { uxSus };

