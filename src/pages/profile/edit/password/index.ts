//language=hbs
import './../../style.scss';

export const ProfileEditPasswordPage = `
    <div class="btn-back" page="profileView"></div>
    <form class="profile-container">
        {{> Avatar }}
        <div class="profile-data">
            {{> ProfileEditItem inputType="password" inputName="oldPassword" title="Старый пароль" value="Иван"}}
            {{> ProfileEditItem inputType="password" inputName="newPassword" title="Новый пароль" value="Иван"}}
            {{> ProfileEditItem inputType="password" inputName="repeatNewPassword" title="Повторите новый пароль" value="Иван"}}
        </div>
        <div class="profile-actions buttons">
            {{> Button btnText="Сохранить" linkToPage="profileView"}}
        </div>
    </form>
`
