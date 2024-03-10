//language=hbs
export const LoginPage = `
<form class="login-page">
    <div class="login-page__content">
        {{> InputField placeholder="Логин" name="login" type="text" }}
        {{> InputField placeholder="Пароль" name="password" type="password" }}
    </div>
    <div class="login-page__footer">
        {{> Button btnText="Авторизоваться" }}
    </div>
</form>
`
