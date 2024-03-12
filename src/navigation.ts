import {pages} from "./store/page.ts";
import Handlebars from "handlebars";

export const navigate = (page: string) => {
    const [source] = pages[page];
    const template = Handlebars.compile(source);
    if (page == 'error') {
        document.body.innerHTML = template({code: 404, text: "Не туда попали"});
    } else {
        document.body.innerHTML = template({});
    }
}
