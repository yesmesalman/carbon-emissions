import styles from "./Header.module.css"
import { FaStar } from "react-icons/fa"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.header_inner}`}>
                <div className={styles.logo_container}>
                    <span className={styles.logo}>CE</span>
                </div>
                <div className={styles.header_right}>
                    <FaStar />
                </div>
            </div>
        </header>
    )
}

export default Header;