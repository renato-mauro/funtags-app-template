import { mainTemplate } from './templates/MainTemplate.js';
import { loremIpsum } from './templates/LoremIpsum.js';

let currentPage = loremIpsum();
mainTemplate(currentPage);

