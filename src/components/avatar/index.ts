//language=hbs
import './style.scss';
import imageDefaultAvatar from './img.png'

export const Avatar = `
    <div class="avatar-container">
        <img alt="аватар пользователя" src="{{#if avatarLink}}avatarLink{{else}}${imageDefaultAvatar}{{/if}}" width="40" height="40">
    </div>
`
