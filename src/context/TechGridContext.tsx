import { createContext, useReducer, Dispatch, ReactNode } from 'react';

/**
 * TechGridContext – provides the active skill‑cluster state for the Tech Grid UI.
 * Allowed clusters correspond to the three skill categories defined in the constitution.
 */
export type TechCluster = 'All' | 'ai-agents' | 'fullstack-hr' | 'retail-ops';

export interface TechGridState {
  activeCluster: TechCluster;
}

export type TechGridAction = { type: 'SET_CLUSTER'; payload: TechCluster };

const initialState: TechGridState = { activeCluster: 'All' };

const TechGridContext = createContext<{ state: TechGridState; dispatch: Dispatch<TechGridAction> }>(
  { state: initialState, dispatch: () => null }
);

function techGridReducer(state: TechGridState, action: TechGridAction): TechGridState {
  switch (action.type) {
    case 'SET_CLUSTER':
      return { ...state, activeCluster: action.payload };
    default:
      return state;
  }
}

export const TechGridProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(techGridReducer, initialState);
  return <TechGridContext.Provider value={{ state, dispatch }}>{children}</TechGridContext.Provider>;
};

export default TechGridContext;
