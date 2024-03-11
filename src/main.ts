import Handlebars from 'handlebars';
import {InputField} from "./components/input";
import {Button} from "./components/button";
import {Link} from "./components/links";
import {Title} from "./components/title";
//import {LoginPage} from "./pages/autorization/login";
//import {RegistrationPage} from "./pages/autorization/registration";
//import {ErrorPage} from "./pages/errors/errorPage.ts";
import {ProfileViewPage} from "./pages/profile/view";
//import {ProfileEditPage} from "./pages/profile/edit";
import {Avatar} from "./components/avatar";
import {ProfileInfoItem} from "./components/profile-info-item";
import {ProfileEditItem} from "./components/profile-edit-item";

Handlebars.registerPartial('InputField', InputField);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Title', Title);
Handlebars.registerPartial('Avatar', Avatar);
Handlebars.registerPartial('ProfileInfoItem', ProfileInfoItem);
Handlebars.registerPartial('ProfileEditItem', ProfileEditItem);

const template = Handlebars.compile(ProfileViewPage);
document.body.innerHTML = template({code: 500, text: 'Мы уже фиксим'});
