import {LoginPage} from "./../pages/autorization/login";
import {RegistrationPage} from "./../pages/autorization/registration";
import {ErrorPage} from "./../pages/errors/errorPage.ts";
import {ProfileViewPage} from "./../pages/profile/view";
import {ProfileEditInfoPage} from "./../pages/profile/edit/info";
import {ProfileEditPasswordPage} from "./../pages/profile/edit/password";
import {ChatsPage} from "./../pages/chats";

export const pages: { [key: string]: any } = {
    'chats': [ChatsPage],
    'login': [LoginPage],
    'registration': [RegistrationPage],
    'error': [ErrorPage],
    'profileView': [ProfileViewPage],
    'profileEditInfo': [ProfileEditInfoPage],
    'profileEditPassword': [ProfileEditPasswordPage],
};
