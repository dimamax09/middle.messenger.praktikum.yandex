import {components} from "../store/components.ts";
import Handlebars from "handlebars";

export const initComponents = () => {
    Object.entries(components).forEach(([name, component]) => {
        Handlebars.registerPartial(name, component);
    });
}
