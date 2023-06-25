import React, { createContext } from 'react'
import { Location } from 'react-router-dom';
export interface AppContextType {
    location: Location | null | string;
}

export const AppContext = createContext<AppContextType>({
    location: null
});