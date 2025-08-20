import { useState } from "react";

export type DefaultContextValue<T> = [T | null, React.Dispatch<React.SetStateAction<T | null>>]

export const createProvider =
  <T,>(Context: React.Context<DefaultContextValue<T>>, initialState?: T) =>
  ({ children }: React.PropsWithChildren) => {
    const state = useState<T | null>(initialState ?? null);

    return <Context.Provider value={state}>{children}</Context.Provider>;
  };
