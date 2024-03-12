import Handlebars from 'handlebars';
import {components} from "./store/components.ts";
import {navigate} from "./navigation.ts";

Object.entries(components).forEach(([name, component]) => {
    Handlebars.registerPartial(name, component);
});

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
    // @ts-ignore
    const page = e.target.getAttribute('page');
    if (page) {
        navigate(page);
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});
