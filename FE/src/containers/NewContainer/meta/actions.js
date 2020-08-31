import * as constants from "./constants";


export const getNew = () => ({
    type: constants.GET_NEW,
});

export const getNewSuccess = payload => ({
    type: constants.GET_NEW_SUCCESS,
    payload,
});

export const getNewError = payload => ({
    type: constants.GET_NEW_ERROR,
    payload,
});
