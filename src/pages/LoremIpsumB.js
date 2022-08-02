import ft from 'funtags';
import { loremIpsum } from './LoremIpsum';

export function loremIpsum2(args,pageHash) {
    const { div } = ft.html;
    return div(
        loremIpsum(`Lorem Ipsum 2 - ${pageHash} - ${args.join(",")}`)
    );
}
