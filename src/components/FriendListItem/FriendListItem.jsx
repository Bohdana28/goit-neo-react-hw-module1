import css from './FriendListItem.module.css'

export default function FriendListItem({
    user: { avatar, name, isOnline },
}) {
    return (
            <div className={css.card}>
                <img src={avatar} alt={avatar} width={'78'} />
                <p className={css.name}>{name}</p>
                <p className={isOnline ? css.online : css.offline}>
                    {isOnline ? "online" : "offline"}
                </p>
            </div>
    );
}