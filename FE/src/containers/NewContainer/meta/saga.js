import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetNew(action) {
    try {
        yield put(actions.getNewSuccess())
    } catch(error) {
        yield put(actions.getNewError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_NEW, handleGetNew),
    ]);
}
