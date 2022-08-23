// TODO: This may be a good candidate for kitchen sink - utilities
import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';

const Context = createContext();

const LIST_SEPARATOR = '.';
export function stateToURLHash(state) {
  const newState = {};
  for (const key in state) {
    if (Array.isArray(state[key])) {
      newState[key] = state[key].join(LIST_SEPARATOR);
    } else {
      newState[key] = state[key];
    }
  }

  return new URLSearchParams(newState).toString();
}

export function urlHashToState(hash) {
  const newObject = {};
  const searchParams = new URLSearchParams(hash.slice(1)); // slice off the "#"
  for (const parameterName of searchParams.keys()) {
    const parameter = searchParams.get(parameterName);

    const parsedNumber = parseInt(parameter);

    if (isNaN(parsedNumber)) {
      if (parameter.includes(LIST_SEPARATOR)) {
        newObject[parameterName] = parameter.split(LIST_SEPARATOR);
      } else {
        newObject[parameterName] = parameter;
      }
    } else {
      newObject[parameterName] = parsedNumber;
    }
  }

  return newObject;
}

export const ACTION_TYPE = 'update-url-state';
export function reducer(draft, action) {
  if (action.type !== ACTION_TYPE) {
    throw new Error(`unknown action type: ${action.type}`);
  }

  // TODO: handle arrays
  if (typeof action.payload === 'object') {
    for (const key in action.payload) {
      draft[key] = action.payload[key];
    }
  } else {
    draft[action.meta] = action.payload;
  }
}

export default function URLState({ children }) {
  const [state, dispatch] = useImmerReducer(reducer, urlHashToState(new URL(document.location.href).hash));

  // update current url when the state is changed
  useEffect(() => {
    if (Object.keys(state).length === 0) return;

    const url = new URL(document.location.href);
    url.hash = stateToURLHash(state);

    document.location.replace(url);
  }, [state]);

  return <Context.Provider value={useMemo(() => [state, dispatch], [dispatch, state])}>{children}</Context.Provider>;
}

URLState.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useURLState() {
  const contextValue = useContext(Context);

  if (!contextValue) {
    throw new Error('useURLState must be used within the URLState component!');
  }

  return contextValue;
}
