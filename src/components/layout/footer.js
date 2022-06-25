import { FacebookIcon, InstagramIcon, LinkedInIcon, SendIcon, TwitterIcon } from "../icons";
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.container}>
                <div className={styles.icons}>
                    <div className={styles.icon}><TwitterIcon /></div>
                    <div className={styles.icon}><FacebookIcon /></div>
                    <div className={styles.icon}><InstagramIcon /></div>
                    <div className={styles.icon}><LinkedInIcon /></div>
                </div>
            </section>
            <section className={styles.links}>
                <ul>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>Terms of Services</li>
                    <li>Terms of Sales</li>
                    <li>Privacy policy &amp; Cookies</li>
                </ul>
                <ul>
                    <li>For subject-matter experts</li>
                    <li>Help center</li>
                    <li>Information for candidates</li>
                </ul>
                <div>Subscribe our Newsletters to keep updated yourself with Current Revolution in Fitness Sector.</div>
            </section>
            <div className={styles.reg}>
                <input type="email" placeholder="Enter your email" />
                <SendIcon />
            </div>
            <p>
                &copy; CertiJob 2021. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
