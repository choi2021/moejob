import { createContext, useContext } from 'react';
import React from 'react';
import { DBService } from '../types/Dbtypes';

interface DBProviderProps {
  children: React.ReactNode;
  dbService: DBService;
}

const DBContext = createContext<DBService | null>(null);
export const DBProvider = ({ children, dbService }: DBProviderProps) => {
  return <DBContext.Provider value={dbService}>{children}</DBContext.Provider>;
};

export const useDBService = () => {
  const context = useContext(DBContext);
  if (!context) {
    throw new Error('Not under DBProvider');
  }
  return context;
};
