import { SET_LOGGED_IN_USER } from "../actions/auth";
import initialState from "./initialState";
export const SET_BRANDS = 'SET_BRANDS'
export const SELECTED_BRAND = 'SELECTED_BRAND'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_ITEMS = 'SET_ITEMS'
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY'
export const SET_NEWS_ITEMS = 'SET_NEWS_ITEMS'
export const SET_USER = "SET_USER"
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER: {
      return {
        ...state,
        loggedInUser: action.payload
      }
    } case SET_BRANDS: {
      return {
        ...state,
        brands: action.payload
      }
    } case SELECTED_BRAND: {
      return {
        ...state,
        selectedBrand: action.payload
      }
    } case SELECTED_CATEGORY: {
      return {
        ...state,
        selectedCategory: action.payload
      }
    } case SET_CATEGORY: {
      return {
        ...state,
        categories: action.payload
      }
    } case SET_ITEMS: {
      return {
        ...state,
        items: action.payload
      }
    } case SET_NEWS_ITEMS: {
      return {
        ...state,
        news: action.payload
      }
    } case SET_USER: {
      return {
        ...state,
        user: action.payload
      }

    }
    // case SET_USER_ID: {
    //   return {
    //     ...state,
    //     userId: action.payload
    //   }
    // }
    default:
      return state;
  }
};

export default reducer;
