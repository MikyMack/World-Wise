import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* outlet is using instead of children props beacuase of react router  */}
      <Outlet /> 
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy: Copyright {new Date().getFullYear()} by WorldWise .inc
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;