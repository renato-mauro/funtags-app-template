import ft from 'funtags';
import { sideBar } from './templates/SideBar.js';
import { loremIpsum } from './templates/LoremIpsum.js';


document.querySelector("#sideBarPlaceholder").replaceChildren(sideBar())
document.querySelector("#contentPlaceholder").replaceChildren(loremIpsum())
