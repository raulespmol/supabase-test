import React, { createContext, useEffect, useState } from 'react';
import { fetchItems, fetchMaterials, postItem } from '../services/supabaseServices';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [materials, setMaterials] = useState([]);

  const getItems = async () => {
    try {
      const items = await fetchItems();
      setItems(items);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  }

  const getMaterials = async () => {
    try {
      const materials = await fetchMaterials();
      setMaterials(materials);
    } catch (error) {
      console.error("Error al obtener materiales:", error);
    }
  }

  const createItem = async (item) => {
    try {
      await postItem(item);
      await getItems();
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
    
    await fetchItems()
  }

  useEffect(() => {
    getItems();
    // getMaterials()
  }, []);

  return (
    <AppContext.Provider value={{ items, materials, createItem }}>
      {children}
    </AppContext.Provider>
  );
};