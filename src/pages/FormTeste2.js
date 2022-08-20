import { bsRadioGroup } from "../lib/components/BootstrapForms";
import ft from 'funtags';

function formTeste2()
{
    const { fieldset, label, div } = ft.html;

    let frutas = ["Laranja", "Banana", "Maçã", "Abacaxi", "Kiwi", "Melancia", "Melão", "Abacate", "Uva", "Fruta do Conde", "Cereja" ];
    let target = {};
    const radio = bsRadioGroup("fruta", target);

    return div(
            {class:"container",oninput},
            fieldset(
                {class:"p-2 m-3"},
                label({class:"form-label"},"Escolha uma fruta"),
                div(
                    {class:"d-flex flex-column flex-wrap",style:{maxHeight:"150px"}},
                    frutas.map((d,i)=>radio.item(i+1,d)),
                    radio.other(99,"Other")
                )
            )
        );
}

export { formTeste2 }
