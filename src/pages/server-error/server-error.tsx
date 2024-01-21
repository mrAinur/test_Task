import { Link } from "react-router-dom";
import style from "./server-error.module.css";

export default function ServerError() {
  return (
    <section>
      <section className={style.mainBox}>
        <h2 className={style.title}>Ошибка 500</h2>
        <p className={style.paragraph}>
          На сервере произошла непредвиденная ошибка, вы можете перейти на
          главную страницу
        </p>
        <Link to={"/"} className={style.link}>
          &rarr; нажав сюда &larr;
        </Link>
      </section>
    </section>
  );
}
