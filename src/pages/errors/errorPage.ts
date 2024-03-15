//language=hbs
import './style.scss';

export const ErrorPage = `
<div class="error-page">
    <div class="error-page__code">{{code}}</div>
    <div class="error-page__text">{{text}}</div>
    {{> Link text="Назад к чатам" linkToPage="login"}}
</div>
`
