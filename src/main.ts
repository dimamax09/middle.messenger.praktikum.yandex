import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages: { [key: string]: any } = {
    'chats': [Pages.ChatsPage],
    'login': [Pages.LoginPage],
    'registration': [Pages.RegistrationPage],
    'error': [Pages.ErrorPage],
    'profileView': [Pages.ProfileViewPage],
    'profileEditInfo': [Pages.ProfileEditInfoPage],
    'profileEditPassword': [Pages.ProfileEditPasswordPage],
};

Object.entries(Components).forEach(([name, component]) => {
    Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
    const [source, args] = pages[page];
    const template = Handlebars.compile(source);
    document.body.innerHTML = template(args);
}

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
