import { Link } from "react-router-dom";

import { BriefcaseIcon } from "../icons";
import styles from "./sidebar.module.css";

const SideBar = () => {
    return (
        <aside id="sidebar" className={styles.sidebar}>
            <section>
                <div className={styles.logo}>
                    <img src="/images/logo.png" alt="Company's logo" />
                </div>
                <ul className={styles.menu}>
                    <Link to={"/"}>
                        <li>
                            <span>
                                <BriefcaseIcon />
                            </span>
                            <span> My Recruitment </span>
                        </li>
                    </Link>
                </ul>
            </section>
            <section className={styles.footer}>
                <div>
                    <img src="/images/footer-art.png" alt="Footer Art" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
        </aside>
    );
};

export default SideBar;
