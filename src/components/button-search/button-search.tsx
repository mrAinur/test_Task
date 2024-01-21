import { MouseEventHandler } from "react";
import style from "./button-search.module.css";
import { useAppDispatch } from "../..";
import {
  clearCharatcersState,
  loadStatusOn
} from "../../pages/search-page/service/actions/searchPageActions";
import { getCharacters } from "../../utils/workWithApi";

type Props = {
  width: number;
  text: string;
  inputText: string;
};
export default function ButtonSearch({ width, text, inputText }: Props) {
  const dispatch = useAppDispatch();

  const getCharacterInfo: MouseEventHandler<HTMLButtonElement> = e => {
    dispatch(loadStatusOn());
    dispatch(clearCharatcersState());
    dispatch(getCharacters(inputText));
  };

  return (
    <button
      type="button"
      className={style.button}
      style={{ width: `${width}px` }}
      onClick={e => getCharacterInfo(e)}
    >
      {text}
    </button>
  );
}
