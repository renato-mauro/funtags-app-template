import { bsRadioButton, bsRadioButtonOther } from "../lib/components/BootstrapForms";

function radioGroup(name,options,otherLabel) {
    let resp = [];
    if(options instanceof Map) {
        options.forEach((v,k)=>{resp.push(bsRadioButton(name,k,v))});
    } else {
        options.forEach(v=>{resp.push(bsRadioButton(name,v))});
    }
    if(otherLabel) {
        resp.push(bsRadioButtonOther(name,otherLabel))
    }
    return resp;
}

export { radioGroup }
