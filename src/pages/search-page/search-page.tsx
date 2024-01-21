import style from "./search-page.module.css";
import InputLine from "../../components/input-line/input-line";
import { useAppDispatch, useAppSelector } from "../..";
import SmallRectangle from "../../components/small-rectangle/small-rectangle";
import { Character } from "../../utils/types";
import SearchPages from "../../components/search-pages/search-pages";
import { useEffect } from "react";
import { clearCharatcersState } from "./service/actions/searchPageActions";
import ServerError from "../server-error/server-error";
import NotFoundPage from "../not-found-page/not-found-page";
import { notFoundPersonText } from "../../utils/constants";
import { SpinnerInfinity } from "spinners-react";

export default function SearchPage() {
  const { load, serverError, notFoundStatus, searchInfo, characters } =
    useAppSelector(state => ({
      load: state.searchPageReducer.load,
      serverError: state.searchPageReducer.serverError,
      notFoundStatus: state.searchPageReducer.notFoundCharacters,
      searchInfo: state.searchPageReducer.searchInfo,
      characters: state.searchPageReducer.searchInfo.results
    }));

  const dispatch = useAppDispatch();

  const getCharacters = (characters: Character[]) => {
    return characters.map((item, index) => {
      return <SmallRectangle data={item} key={index} />;
    });
  };

  useEffect(() => {
    dispatch(clearCharatcersState());
  }, []);

  const getGridStyle = () => {
    switch (searchInfo.count) {
      case 1:
        return (
          <ul
            className={style.listItems}
            style={{ gridTemplateColumns: `repeat(1, fit-content(250px))` }}
          >
            {!load && characters.length !== 0 && getCharacters(characters)}
          </ul>
        );
      case 2:
        return (
          <ul
            className={style.listItems}
            style={{ gridTemplateColumns: `repeat(2, fit-content(250px))` }}
          >
            {!load && characters.length !== 0 && getCharacters(characters)}
          </ul>
        );
      default:
        return (
          <ul
            className={style.listItems}
            style={{ gridTemplateColumns: `repeat(3, fit-content(250px))` }}
          >
            {!load && characters.length !== 0 && getCharacters(characters)}
          </ul>
        );
    }
  };

  return (
    <>
      <article className={style.mainBox}>
        <InputLine />
        {load && (
          <SpinnerInfinity
            color="#4c4cff"
            size={"100"}
            secondaryColor={"#1c1c21"}
            style={{
              margin: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />
        )}
        {!load && characters.length !== 0 && getGridStyle()}
        {characters.length !== 0 && <SearchPages />}
        {notFoundStatus && (
          <NotFoundPage text={notFoundPersonText} searchPage={true} />
        )}
      </article>
      {serverError && <ServerError />}
    </>
  );
}
