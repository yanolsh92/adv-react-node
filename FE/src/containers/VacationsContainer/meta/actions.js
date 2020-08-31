import * as constants from "./constants";


export const getVacations = () => ({
    type: constants.GET_VACATIONS,
});

export const getVacationsSuccess = payload => ({
    type: constants.GET_VACATIONS_SUCCESS,
    payload,
});

export const getVacationsError = payload => ({
    type: constants.GET_VACATIONS_ERROR,
    payload,
});

export const updateShowDiscounts = () => ({
    type: constants.UPDATE_SHOW_DISCOUNTS,
});

export const updateSelectedVacation = vacationId => ({
    type: constants.UPDATE_SELECTED_VACATION,
    vacationId,
});
