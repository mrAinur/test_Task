import style from "./button-learn-more.module.css";
import { Link } from "react-router-dom";

type Props = {
  characterName: string;
};
export default function ButtonLearnMore({ characterName }: Props) {
  return (
    <Link to={`/character/${characterName}`} className={style.button}>
      <p className={style.paragraph}>Подробнее</p>
    </Link>
  );
}
