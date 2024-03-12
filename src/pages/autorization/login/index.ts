//language=hbs
import './../style.scss';

export const LoginPage = `
    <div>{{> Link text="страница регистрации" linkToPage="registration"}}</div>
    <div>{{> Link text="страница чатов" linkToPage="chats"}}</div>
    <div>{{> Link text="страница профиля" linkToPage="profileView"}}</div>
    <div>{{> Link text="страница редактирования данных профиля" linkToPage="profileEditInfo"}}</div>
    <div>{{> Link text="страница редактирования пароля" linkToPage="profileEditPassword"}}</div>
    <div>{{> Link text="страница ошибки" linkToPage="error"}}</div>

    <div class="auth-block">
        <form class="auth-form">
            <div class="auth-form__title">
                {{> Title title="Вход"}}
            </div>

            <div class="auth-form__content">
                {{> InputField placeholder="Логин" name="login" type="text" }}
                {{> InputField placeholder="Пароль" name="password" type="password" }}
            </div>
            <div class="auth-form__footer">
                {{> Button btnText="Авторизоваться" linkToPage="chats"}}
                {{> Link text="Нет аккаунта?" linkToPage="registration"}}
            </div>
        </form>
    </div>
`
