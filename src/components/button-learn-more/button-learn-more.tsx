import style from "./button-learn-more.module.css";
import { Link } from "react-router-dom";

type Props = {
  width: number;
  text: string;
  characterName: string;
};
export default function ButtonLearnMore({ width, text, characterName }: Props) {
  return (
    <Link to={`/character/${characterName}`} className={style.button}>
      <p className={style.paragraph} style={{ width: `${width}px` }}>
        {text}
      </p>
    </Link>
  );
}
