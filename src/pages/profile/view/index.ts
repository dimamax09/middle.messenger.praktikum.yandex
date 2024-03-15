//language=hbs
import './../style.scss';

export const ProfileViewPage = `
    <div class="btn-back" page="chats"></div>
    <div class="profile-container">
        {{> Avatar }}
        {{> Title title="Дмитрий"}}
        <div class="profile-data">
            {{> ProfileInfoItem title="Почта" value="pochta@yandex.ru"}}
            {{> ProfileInfoItem title="Логин" value="ivanivanov"}}
            {{> ProfileInfoItem title="Имя" value="Иван"}}
            {{> ProfileInfoItem title="Фамилия" value="Иванов"}}
            {{> ProfileInfoItem title="Имя в чате" value="Иван"}}
            {{> ProfileInfoItem title="Телефон" value="+7 (909) 967 30 30"}}
        </div>
        <div class="profile-actions links">
            {{> Link text="Изменить данные" linkToPage="profileEditInfo"}}
            {{> Link text="Изменить пароль" linkToPage="profileEditPassword"}}
            {{> Link text="Выйти" color="red" linkToPage="login"}}
        </div>
    </div>
`
