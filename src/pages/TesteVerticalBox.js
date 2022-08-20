import ft from "funtags";
import { verticalFlexBox, horizontalFlexBox } from "../lib/components/SplitBox"
import { loremIpsum } from "./LoremIpsum";

function testeVerticalBox() 
{
    return horizontalFlexBox(
        loremIpsum(),
        verticalFlexBox(
            loremIpsum(),
            loremIpsum(),
            loremIpsum(),
        )
    );
}

export { testeVerticalBox }
