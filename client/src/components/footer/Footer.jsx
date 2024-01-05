import { Link } from "react-router-dom";
import { useCallback } from "react";

import s from "./Footer.module.scss";

const Footer = () => {
  const getCurrentYear = useCallback(() => new Date().getFullYear(), []);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.column}>
          <img className={s.logo} src="/logo.png" alt="MOVIES" />
          <span className={s.company_email}>Email: &nbsp; movie@gmail.com</span>
          <span className={s.company_phone}>Phone: +38067888 23 34</span>
        </div>

        <div className={s.column__row}>
          <div className={s.column}>
            <Link to="/" className="link">
              <span>Homepage</span>
            </Link>
            <Link to="/series" className="link">
              <span className="navbarmainLinks">Series</span>
            </Link>
            <Link to="/movies" className="link">
              <span className="navbarmainLinks">Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
          </div>

          <div className={s.column}>
            <span>Documentation</span>
            <span>Privacy Police</span>
            <span>News</span>
          </div>
        </div>
      </div>

      <div className={s.bottom_line}>
        <div style={{ opacity: "0.5" }}>
          MOVIES
          <span>©&nbsp;{getCurrentYear()}</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
