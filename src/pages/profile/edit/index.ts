//language=hbs
import './../style.scss';

export const ProfileEditPage = `
    <div class="btn-back"></div>
    <div class="profile-container">
        {{> Avatar }}
        {{> Title title="Дмитрий"}}
        <div class="profile-data">
            {{> ProfileEditItem title="Почта" value="pochta@yandex.ru"}}
            {{> ProfileEditItem title="Логин" value="ivanivanov"}}
            {{> ProfileEditItem title="Имя" value="Иван"}}
            {{> ProfileEditItem title="Фамилия" value="Иванов"}}
            {{> ProfileEditItem title="Имя в чате" value="Иван"}}
            {{> ProfileEditItem title="Телефон" value="+7 (909) 967 30 30"}}
        </div>
        <div class="profile-actions buttons">
            {{> Button btnText="Сохранить"}}
        </div>
    </div>
`
