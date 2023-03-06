import { createContext, useContext, useReducer, useMemo } from "react";
// import { GlobalContextAction, GlobalContextState, Provider } from "./type";

export enum GlobalContextActionsType {
  MINI_SIDENAV = "MINI_SIDENAV",
  // TRANSPARENT_SIDENAV = "TRANSPARENT_SIDENAV",
  // WHITE_SIDENAV = "WHITE_SIDENAV",
  // SIDENAV_COLOR = "SIDENAV_COLOR",
  // TRANSPARENT_NAVBAR = "TRANSPARENT_NAVBAR",
  // FIXED_NAVBAR = "FIXED_NAVBAR",
  // DIRECTION = "DIRECTION",
  // LAYOUT = "LAYOUT",
  // DARKMODE = "DARKMODE",
}

export interface GlobalContextState {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  whiteSidenav: boolean;
  sidenavColor: string;
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  openConfigurator: boolean;
  direction: string;
  layout: string;
  darkMode: boolean;
}

export interface Provider {
  children?: React.ReactNode;
}

export interface GlobalContextAction {
  type: GlobalContextActionsType;
  payload?: any;
}

const initialState = {
  miniSidenav: false,
};

const Context = createContext<Partial<GlobalContextState>>(
  {} as Partial<GlobalContextState>
);

// * Setting custom name for the context which is visible on react dev tools
Context.displayName = "globalContext";

function reducer(
  state: Partial<GlobalContextState>,
  action: GlobalContextAction
) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const ContextProvider: React.FC<Provider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // TODO: Find type of value
  const value: any = useMemo(() => [state, dispatch], [state, dispatch]);
  console.log("value", value);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useGlobalContext = () => {
  const setContext = useContext(Context);
  console.log("Context", Context);
  if (!setContext) {
    throw new Error(
      "ContextController should be used inside the MaterialUIControllerProvider."
    );
  }
  return setContext;
};

// Context module functions
// TODO: Find type of blow arg.
const setMiniSidenav = (dispatch: any, payload: boolean) =>
  dispatch({ type: "MINI_SIDENAV", payload });

export { ContextProvider, useGlobalContext, setMiniSidenav };
