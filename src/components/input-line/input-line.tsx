import { useForm } from "../../hooks/useForm";
import style from "./input-line.module.css";
import ButtonSearch from "../button-search/button-search";
import { searchTextButton, searchWidthButton } from "../../utils/constants";

export default function InputLine() {
  const { values, handleChange } = useForm({ search: "" });

  return (
    <div className={style.searchBox}>
      <input
        className={style.input}
        type="text"
        placeholder="Введите имя персонажа на ангийском языке"
        value={values.search}
        onChange={e => handleChange(e)}
        name="search"
      />
      <ButtonSearch
        width={searchWidthButton}
        text={searchTextButton}
        inputText={values.search}
      />
    </div>
  );
}
