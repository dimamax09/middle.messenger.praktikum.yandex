//language=hbs
import './../style.scss';

export const ProfileViewPage = `
    <div class="btn-back"></div>
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
            {{> Link text="Изменить данные"}}
            {{> Link text="Изменить пароль"}}
            {{> Link text="Выйти" color="red"}}
        </div>
    </div>
`
