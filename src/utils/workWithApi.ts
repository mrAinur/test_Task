import { AppDispatch } from "..";
import {
  CharactersNotFound,
  ServerMistake,
  getCharacterInfo
} from "../pages/search-page/service/actions/searchPageActions";
import { getCharactersInfo } from "./getAPI";
import { ServerMessage } from "./types";

export const getCharacters = (param: string) => {
  return (dispatch: AppDispatch) => {
    return getCharactersInfo<ServerMessage>(param)
      .then(res => {
        if (res.count === 0) {
          dispatch(CharactersNotFound());
        } else {
          dispatch(getCharacterInfo(res));
        }
      })
      .catch(rej => {
        dispatch(ServerMistake());
      });
  };
};
