import ft from "funtags";
import { verticalFlexBox, horizontalFlexBox } from "../lib/components/verticalSplitBox"
import { loremIpsum } from "./LoremIpsum";

function testeVerticalBox()
{
    const { div } = ft.html;
    return horizontalFlexBox(
        verticalFlexBox(
            div({style:{"overflow-y":"auto"}},
                loremIpsum()
            ),
            div({style:{"overflow-y":"auto"}},
                loremIpsum()
            ),
        ),
        verticalFlexBox(
            div({style:{"overflow-y":"auto"}},
                loremIpsum()
            ),
            div({class:"p-2", style:{"overflow-y":"auto"}},
                loremIpsum()
            ),
            div({style:{"overflow-y":"auto"}},
                loremIpsum()
            ),
        )
    );
}

export { testeVerticalBox }