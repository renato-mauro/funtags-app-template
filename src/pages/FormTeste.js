import { oneChoiceQuestion } from "../lib/components/OneChoiceQuestion";
import ft from 'funtags';

function formTeste()
{
    const { div } = ft.html;

    return div({class:"container"},
        oneChoiceQuestion("Escolha um Fruta",["banana", "maçã", "laranja"],"outra")
    );
}

export { formTeste }