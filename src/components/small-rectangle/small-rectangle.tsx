import { Character } from "../../utils/types";
import style from "./small-rectangle.module.css";
import avatarMock from "../../images/avatar.jpg";
import ButtonLearnMore from "../button-learn-more/button-learn-more";
import { learnMoreWidthButton, learnTextButton } from "../../utils/constants";

type Props = {
  data: Character;
};

export default function SmallRectangle({ data }: Props) {
  return (
    <li className={style.itemBox}>
      <div className={style.paragraphBox}>
        <p className={style.paragraph}>Name: {data.name}</p>
        <p className={style.paragraph}>Height: {data.height} cm</p>
        <p className={style.paragraph}>Mass: {data.mass} kg</p>
        <p className={style.paragraph}>Eye color: {data.eye_color}</p>
      </div>
      <img src={avatarMock} alt="Картинка персонажа" className={style.img} />
      <ButtonLearnMore
        width={learnMoreWidthButton}
        text={learnTextButton}
        characterName={data.name}
      />
    </li>
  );
}
