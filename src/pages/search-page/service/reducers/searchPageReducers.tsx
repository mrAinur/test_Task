import { createReducer } from "@reduxjs/toolkit";
import { Character } from "../../../../utils/types";
import {
  loadStatusOn,
  getCharacterInfo,
  CharactersNotFound,
  ServerMistake,
  clearCharatcersState
} from "../actions/searchPageActions";

type State = {
  load: boolean;
  searchInfo: {
    count: number;
    next: null | string;
    previous: null | string;
    results: Character[];
  };
  serverError: boolean;
  notFoundCharacters: boolean;
};

const initialState: State = {
  load: false,
  searchInfo: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
  serverError: false,
  notFoundCharacters: false
};

export const searchPageReducer = createReducer(initialState, builder => {
  builder
    .addCase(loadStatusOn, state => {
      state.load = true;
    })
    .addCase(getCharacterInfo, (state, action) => {
      state.load = false;
      state.serverError = false;
      state.notFoundCharacters = false;
      state.searchInfo = action.payload;
    })
    .addCase(CharactersNotFound, state => {
      state.notFoundCharacters = true;
      state.searchInfo.count = 0;
      state.searchInfo.next = null;
      state.searchInfo.previous = null;
      state.searchInfo.results = [];
      state.load = false;
    })
    .addCase(ServerMistake, state => {
      state.serverError = true;
    })
    .addCase(clearCharatcersState, state => {
      state.load = false;
      state.searchInfo.count = 0;
      state.searchInfo.next = null;
      state.searchInfo.previous = null;
      state.searchInfo.results = [];
      state.serverError = false;
      state.notFoundCharacters = false;
    });
});
