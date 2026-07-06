import css from "./Profile.module.css"

export default function Profile({ user: { username, tag, location, avatar, stats: { followers, views, likes } }, }) {
    
    return (
        <div className={css.profile}>
            <div className={css.avatar}>
                <img
                    className={css.imgprofile}
                    src={avatar}
                    alt={username}
                />
            </div>
                <p className={css.userName}>{username}</p>
                <p className={css.userdiscribe}>@{ tag}</p>
                <p className={css.userdiscribe}>{ location}</p>
            

            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.label}>Followers</span>
                    <span className={css.value}>{ followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Views</span>
                    <span className={css.value}>{ views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Likes</span>
                    <span className={css.value}>{ likes}</span>
                </li>
            </ul>
        </div>
    )

}