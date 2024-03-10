import Handlebars from 'handlebars';
import {InputField} from "./components/input";
import {Button} from "./components/button";
import {LoginPage} from "./pages/autorization/login";


Handlebars.registerPartial('InputField', InputField);
Handlebars.registerPartial('Button', Button);

const template = Handlebars.compile(LoginPage);
document.body.innerHTML = template({});
