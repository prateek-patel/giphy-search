import { debounce, put } from 'redux-saga/effects';
import { setSearchResults } from "../action";
import types from '../types';
import axios from 'axios';

export function* setSearch({ value }) {
    try {
        const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=k6uLdocOoClDvsV46TGXxvAFvGGCNjlO&q=${value}&limit=25`;
        const data = yield axios.get(baseUrl);
        // put allows dispatch another action to reducer
        return yield put(setSearchResults(data.data.data));
    } catch (e) {
        console.log(e);
    }
}

export default function* watchSearch() {
    yield debounce(1000, types.watchGetSearchResults, setSearch);
}
