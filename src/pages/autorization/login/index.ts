//language=hbs
import './../style.scss';

export const LoginPage = `
    <nav>
        <ul>
            <li>{{> Link text="страница регистрации" linkToPage="registration"}}</li>
            <li>{{> Link text="страница чатов" linkToPage="chats"}}</li>
            <li>{{> Link text="страница профиля" linkToPage="profileView"}}</li>
            <li>{{> Link text="страница редактирования данных профиля" linkToPage="profileEditInfo"}}</li>
            <li>{{> Link text="страница редактирования пароля" linkToPage="profileEditPassword"}}</li>
            <li>{{> Link text="страница ошибки" linkToPage="error"}}</li>
        </ul>
    </nav>
    
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
