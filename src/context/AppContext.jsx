import React, { createContext, useEffect, useState } from 'react';
import DB from '../services/supabaseServices';
import { formattedData } from '../data/constants';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [materials, setMaterials] = useState([]);

  const getItems = async () => {
    try {
      const items = await formattedData();
      setItems(items);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  }

  const getMaterials = async () => {
    try {
      const materials = await DB.fetchMaterials();
      setMaterials(materials);
    } catch (error) {
      console.error("Error al obtener materiales:", error);
    }
  }

  const createItem = async (item) => {
    try {
      await DB.postItem(item);
      await getItems();
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
    
    await DB.fetchItems()
  }

  const deleteItem = async (id) => {
    try {
      await DB.deleteItem(id);
      await getItems();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  }

  useEffect(() => {
    getItems();
    getMaterials()
  }, []);

  return (
    <AppContext.Provider 
      value={{
        items, 
        materials, 
        createItem,
        deleteItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};