//language=hbs
import './../../style.scss';

export const ProfileEditPasswordPage = `
    <div class="btn-back" page="profileView"></div>
    <div class="profile-container">
        {{> Avatar }}
        <div class="profile-data">
            {{> ProfileEditItem inputType="password" title="Старый пароль" value="Иван"}}
            {{> ProfileEditItem inputType="password" title="Новый пароль" value="Иван"}}
            {{> ProfileEditItem inputType="password" title="Повторите новый пароль" value="Иван"}}
        </div>
        <div class="profile-actions buttons">
            {{> Button btnText="Сохранить" linkToPage="profileView"}}
        </div>
    </div>
`
