import ft from "funtags";
import { verticalSplitBox } from "../lib/components/verticalSplitBox"
import { loremIpsum } from "./LoremIpsum";

function testeVerticalBox()
{
    const { div } = ft.html;
    return verticalSplitBox(
        div({class:"h-100 p-4", style:{"overflow-y":"auto"}},
            loremIpsum()
        ),
        div({class:"h-100 p-4", style:{"overflow-y":"auto"}},
            loremIpsum()
        ),
    );
}

export { testeVerticalBox }