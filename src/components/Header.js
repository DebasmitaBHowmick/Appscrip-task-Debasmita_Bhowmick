import { Heart, Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import styles from "@/styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.logoLeft}>✿</div>

        <div className={styles.logoCenter}>LOGO
    
         <nav className={styles.mainNav}>
            <ul className={styles.navList}>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </nav>
        </div>

        <div className={styles.headerIcons}>
          <Search size={18} strokeWidth={1.5} />
          <Heart size={18} strokeWidth={1.5} />
          <ShoppingBag size={18} strokeWidth={1.5} />
          <User size={18} strokeWidth={1.5} />
          <span className={styles.lang}>
            ENG <ChevronDown size={14} />
          </span>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
