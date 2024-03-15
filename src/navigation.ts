import {pages} from "./store/page.ts";
import Handlebars from "handlebars";

export const navigate = (page: string) => {
    const mainBlock = document.getElementById('app');
    const [source] = pages[page];
    const template = Handlebars.compile(source);
    const templateData: object = {};

    if (page == 'error') {
        // @ts-ignore
        templateData.code = 404;
        // @ts-ignore
        templateData.text = 'Не туда попали';
    }

    // @ts-ignore
    mainBlock.innerHTML = template(templateData);
}
