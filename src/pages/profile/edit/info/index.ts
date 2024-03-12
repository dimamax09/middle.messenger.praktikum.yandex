//language=hbs
import './../../style.scss';

export const ProfileEditInfoPage = `
    <div class="btn-back" page="profileView"></div>
    <div class="profile-container">
        {{> Avatar }}
        <div class="profile-data">
            {{> ProfileEditItem inputType="text" title="Почта" value="pochta@yandex.ru"}}
            {{> ProfileEditItem inputType="text" title="Логин" value="ivanivanov"}}
            {{> ProfileEditItem inputType="text" title="Имя" value="Иван"}}
            {{> ProfileEditItem inputType="text" title="Фамилия" value="Иванов"}}
            {{> ProfileEditItem inputType="text" title="Имя в чате" value="Иван"}}
            {{> ProfileEditItem inputType="text" title="Телефон" value="+7 (909) 967 30 30"}}
        </div>
        <div class="profile-actions buttons">
            {{> Button btnText="Сохранить" linkToPage="profileView"}}
        </div>

    </div>
`
