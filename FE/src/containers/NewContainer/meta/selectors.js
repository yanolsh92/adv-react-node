import { initialState } from './reducer';
/**
 * Get New
 * @param state
 * @returns {Object}
 */
export const get = state => state.New || initialState;
