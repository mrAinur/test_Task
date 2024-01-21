import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../..";
import style from "./personal-page.module.css";
import avatarMock from "../../images/avatar.jpg";
import { loadStatusOn } from "../search-page/service/actions/searchPageActions";
import { getCharacters } from "../../utils/workWithApi";
import { useEffect } from "react";
import NotFoundPage from "../not-found-page/not-found-page";
import { notFoundPersonText } from "../../utils/constants";
import ServerError from "../server-error/server-error";
import { SpinnerInfinity } from "spinners-react";

export default function PersonalPage() {
  const location = useLocation();
  const { name } = useParams();

  const { load, value, notFoundPerson, serverError } = useAppSelector(
    state => ({
      value: state.searchPageReducer.searchInfo.results,
      load: state.searchPageReducer.load,
      notFoundPerson: state.searchPageReducer.notFoundCharacters,
      serverError: state.searchPageReducer.serverError
    })
  );

  const dispatch = useAppDispatch();

  const getCherecterInfo = () => {
    dispatch(loadStatusOn());
    dispatch(getCharacters(location.pathname.replace("/character/", "")));
  };

  const characterInfo = value.find(item => item.name === name);

  useEffect(() => {
    getCherecterInfo();
  }, []);

  return (
    <>
      {!notFoundPerson && (
        <section className={style.mainBox}>
          {!load && characterInfo && (
            <>
              <h2 className={style.title}>
                Информация о {characterInfo.name}:
              </h2>
              <div className={style.infoBox}>
                <p className={style.paragraph}>Name: {characterInfo.name}</p>
                <p className={style.paragraph}>
                  Height: {characterInfo.height} cm
                </p>
                <p className={style.paragraph}>
                  Hair color: {characterInfo.hair_color}
                </p>
                <p className={style.paragraph}>
                  Skin color: {characterInfo.skin_color}
                </p>
                <p className={style.paragraph}>
                  Eye color: {characterInfo.eye_color}
                </p>
                <p className={style.paragraph}>
                  Birth year: {characterInfo.birth_year}
                </p>
                <p className={style.paragraph}>
                  Gender: {characterInfo.gender}
                </p>
              </div>
              <img
                src={avatarMock}
                alt="Изображение персонажа"
                className={style.img}
              />
            </>
          )}
        </section>
      )}
      {load && (
        <SpinnerInfinity
          color="#4c4cff"
          size={"100"}
          secondaryColor={"#1c1c21"}
          style={{
            position: "absolute",
            marginTop: "37.4vh",
            marginLeft: "auto",
            marginRight: "auto",
            left: "0",
            right: "0",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        />
      )}
      {notFoundPerson && <NotFoundPage text={notFoundPersonText} />}
      {serverError && <ServerError />}
    </>
  );
}
