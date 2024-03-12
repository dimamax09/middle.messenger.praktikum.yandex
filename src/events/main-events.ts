import {navigate} from "../navigation.ts";

export const initMainHandlers = () => {
    //Отображение страницы авторизации при открытии сайта
    document.addEventListener('DOMContentLoaded', () => navigate('login'));

    //Временная навигация по страницам
    document.addEventListener('click', e => {
        // @ts-ignore
        const page = e?.target?.getAttribute('page');
        if (page) {
            navigate(page);
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    });
}
