import { navigate } from '../navigation.ts';

// eslint-disable-next-line import/prefer-default-export
export const initMainHandlers = () => {
  // Отображение страницы авторизации при открытии сайта
  // eslint-disable-next-line no-undef
  document.addEventListener('DOMContentLoaded', () => navigate('login'));

  // Временная навигация по страницам
  // eslint-disable-next-line no-undef
  document.addEventListener('click', (e) => {
    // @ts-ignore
    const page = e?.target?.getAttribute('page');
    if (page) {
      navigate(page);
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
};
