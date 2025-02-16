import React, { createContext, useEffect, useState } from 'react';
import { fetchItems } from '../services/supabaseServices';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const items = await fetchItems();
      setItems(items);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <AppContext.Provider value={{ items }}>
      {children}
    </AppContext.Provider>
  );
};