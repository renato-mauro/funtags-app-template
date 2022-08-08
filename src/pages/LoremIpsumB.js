import ft from 'funtags';
import { loremIpsum } from './LoremIpsum';

export function loremIpsum2(args) {
    const { div } = ft.html;
    return div(
        loremIpsum(`Lorem Ipsum 2 - ${args.join(",")}`)
    );
}
