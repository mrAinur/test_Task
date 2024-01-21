import { createAction } from "@reduxjs/toolkit";
import { ServerMessage } from "../../../../utils/types";

export const loadStatusOn = createAction("LOAD_STATUS_ON");
export const getCharacterInfo = createAction(
  "GET_CHARACTER_INFO",
  (item: ServerMessage) => {
    return { payload: item };
  }
);
export const CharactersNotFound = createAction("CHARACTERS_NOT_FOUND");
export const ServerMistake = createAction("SERVER_MISTAKE");
export const clearCharatcersState = createAction("CLEAR_CHARACTERS_STATE");
