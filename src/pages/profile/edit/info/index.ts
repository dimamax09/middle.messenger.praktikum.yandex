//language=hbs
import './../../style.scss';

export const ProfileEditInfoPage = `
    <div class="btn-back" page="profileView"></div>
    <form class="profile-container">
        {{> Avatar }}
        <div class="profile-data">
            {{> ProfileEditItem inputType="text" inputName="email" title="Почта" value="pochta@yandex.ru"}}
            {{> ProfileEditItem inputType="text" inputName="login" title="Логин" value="ivanivanov"}}
            {{> ProfileEditItem inputType="text" inputName="first_name" title="Имя" value="Иван"}}
            {{> ProfileEditItem inputType="text" inputName="second_name" title="Фамилия" value="Иванов"}}
            {{> ProfileEditItem inputType="text" inputName="display_name" title="Имя в чате" value="Иван"}}
            {{> ProfileEditItem inputType="text" inputName="phone" title="Телефон" value="+7 (909) 967 30 30"}}
        </div>
        <div class="profile-actions buttons">
            {{> Button btnText="Сохранить" linkToPage="profileView"}}
        </div>

    </form>
`
