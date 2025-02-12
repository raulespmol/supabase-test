import React, { createContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '../config/constants';

export const AppContext = createContext();

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const { data, error } = await supabase
      .from('productos')
      .select('*');

    if (error) {
      console.error('Error fetching items:', error.message);
      return;
    }

    setItems(data)
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