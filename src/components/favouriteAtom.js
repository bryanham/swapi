import { atom } from 'recoil';


export const favouriteState = atom({
    key: 'favouriteState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });