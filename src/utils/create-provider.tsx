import { useState } from "react";

export type DefaultContextValue<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export const createProvider =
  <T,>(Context: React.Context<DefaultContextValue<T>>, initialState: T) =>
  ({ children }: React.PropsWithChildren) => {
    const state = useState<T>(initialState);

    return <Context.Provider value={state}>{children}</Context.Provider>;
  };
