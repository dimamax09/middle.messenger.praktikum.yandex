//language=hbs
import './../style.scss';

export const LoginPage = `
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
