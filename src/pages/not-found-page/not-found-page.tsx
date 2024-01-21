import { Link } from "react-router-dom";
import style from "./not-found-page.module.css";

type Props = {
  text: string;
  searchPage?: boolean;
};

export default function NotFoundPage({ text, searchPage }: Props) {
  return (
    <section className={style.mainBox}>
      <h2 className={style.title}>Ошибка 404</h2>
      <p className={style.paragraph}>{text}</p>
      {!searchPage && (
        <Link to={"/"} className={style.link}>
          &rarr; Нажав сюда вы попадёте на главную страницу &larr;
        </Link>
      )}
    </section>
  );
}
