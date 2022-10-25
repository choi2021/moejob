import { createContext, useState } from 'react';

export const HttpContext = createContext();
export function HttpContextProvider({ children }) {
  return <HttpContext.Provider>{children}</HttpContext.Provider>;
}
