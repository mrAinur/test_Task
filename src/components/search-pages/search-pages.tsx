import { MouseEvent, MouseEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../..";
import { baseUrl } from "../../utils/constants";
import style from "./search-pages.module.css";
import { loadStatusOn } from "../../pages/search-page/service/actions/searchPageActions";
import { getCharacters } from "../../utils/workWithApi";

export default function SearchPages() {
  const { load, count, previous, next } = useAppSelector(state => ({
    load: state.searchPageReducer.load,
    count: state.searchPageReducer.searchInfo.count,
    previous: state.searchPageReducer.searchInfo.previous,
    next: state.searchPageReducer.searchInfo.next
  }));

  const [state, setState] = useState(1);

  const dispatch = useAppDispatch();

  const getAnotherPage = async (
    query: string,
    direction: "forward" | "back"
  ) => {
    dispatch(loadStatusOn());
    dispatch(getCharacters(query.replace(`${baseUrl}`, "")));
    direction === "forward" ? setState(state + 1) : setState(state - 1);
  };

  return (
    <div className={style.mainBox}>
      {!previous && <div className={style.spaceBox}></div>}
      {previous && !load && (
        <button
          className={style.button}
          type="button"
          onClick={() => getAnotherPage(previous, "back")}
        >
          &larr;
        </button>
      )}
      {!load && (
        <p className={style.paragraph}>
          Стр. {state} из {Math.ceil(count / 10)}
        </p>
      )}
      {!next && <div className={style.spaceBox}></div>}
      {next && !load && (
        <button
          className={style.button}
          type="button"
          onClick={() => getAnotherPage(next, "forward")}
        >
          &rarr;
        </button>
      )}
    </div>
  );
}
