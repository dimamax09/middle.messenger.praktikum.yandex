import Handlebars from 'handlebars';
import { components } from '../store/components.ts';

export const initAllComponents = () => {
  Object.entries(components).forEach(([name, component]) => {
    Handlebars.registerPartial(name, component);
  });
};
