import {AppContext} from "@obrie/sdk";

export const useContext = (): AppContext => {
    return window.context;
}
