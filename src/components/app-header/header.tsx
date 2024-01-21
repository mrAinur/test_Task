import { Link } from "react-router-dom";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <Link to="/" className={style.src}>
        <p className={style.paragraph}>Star Wars</p>
      </Link>
    </header>
  );
}
