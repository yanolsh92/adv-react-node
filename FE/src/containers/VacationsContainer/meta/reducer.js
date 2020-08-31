import produce from 'immer';
import * as constants from "./constants";

export const initialState = {
    vacations: [],
    discounts: [],
    showDiscounts: false,
};

/* eslint-disable no-param-reassign */
const Vacations = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case constants.GET_VACATIONS_SUCCESS:
                draft.vacations = action.payload.vacations;
                draft.discounts = action.payload.discounts;
                break;
            case constants.UPDATE_SHOW_DISCOUNTS:
                draft.showDiscounts = !state.showDiscounts;
                break;
            case constants.GET_VACATIONS_ERROR:
                break;
            case constants.UPDATE_SELECTED_VACATION:
                draft.selectedVacation = action.vacationId;
                break;
            default:
                break;
        }
    });

export default Vacations;
