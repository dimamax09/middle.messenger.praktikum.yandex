//language=hbs
import './../style.scss';

export const RegistrationPage = `
    <div class="auth-block">
        <form class="auth-form">
            <div class="auth-form__title">
                {{> Title title="Регистрация"}}
            </div>
            
            <div class="auth-form__content">
                {{> InputField placeholder="Почта" name="email" type="email" }}
                {{> InputField placeholder="Логин" name="login" type="text" }}
                {{> InputField placeholder="Имя" name="first_name" type="text" }}
                {{> InputField placeholder="Фамилия" name="second_name" type="text" }}
                {{> InputField placeholder="Телефон" name="text" type="phone" }}
                {{> InputField placeholder="Пароль" name="password" type="password" }}
                {{> InputField placeholder="Пароль (еще раз)" name="password-repeat" type="text" }}
            </div>
            <div class="auth-form__footer">
                {{> Button btnText="Зарегистрироваться" }}
                {{> Link text="Войти" }}
            </div>
        </form>
    </div>
`
