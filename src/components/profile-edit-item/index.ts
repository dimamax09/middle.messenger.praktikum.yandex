//language=hbs
import './style.scss';

export const ProfileEditItem = `
<div class="profile-edit-item">
    <div class="profile-edit-item__title">
        {{title}}
    </div>
    <div class="profile-edit-item__value">
        {{> InputField value=value name=inputName type=inputType}}
    </div>
</div>
`
