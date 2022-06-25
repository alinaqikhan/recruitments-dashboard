import { BellIcon, DropdownIcon, LanguageIcon } from "../icons";
import styles from './header.module.css';

const Header = props => {
    return (
        <header className={styles.header}>
            <h2>{props.title}</h2>
            <div className={styles.user}>
                <div><LanguageIcon /></div>
                <div><BellIcon /></div>
                <div className={styles.avatar}>
                    <img src="https://hearthaustralia.com.au/wp-content/uploads/2021/06/default_avatar.jpg" alt="User's Avatar" width={30} height={30} />
                    <p>John Doe</p>
                </div>
                <div>
                    <DropdownIcon />
                </div>
            </div>
        </header>
    );
};

export default Header;
