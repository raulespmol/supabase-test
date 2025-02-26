import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config/credentials';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const fetchItems = async () => {
  const { data, error } = await supabase
    .from('productos')
    .select(`
    id,
    nombre,
    cantidad,
    medidas,
    observaciones,
    materiales(nombre)
    `);

  if (error) {
    console.error('Error fetching items:', error.message);
    return;
  }
  
  return data
}

const fetchMaterials = async () => {
  const { data, error } = await supabase
    .from('materiales') 
    .select(`
      id,
      nombre
    `);

  if (error) {
    console.error('Error fetching materials:', error.message);
    return;
  }

  return data
}

const postItem = async (item) => {
  const { data, error } = await supabase
    .from('productos')
    .insert(item);

  if (error) {
    console.error('Error creating item:', error.message);
    return;
  }

  return data
}

const deleteItem = async (id) => {
  const {data, error} = await supabase
    .from('productos')
    .delete()
    .eq('id', id)
    .select();
  if (error) {
    console.error('Error deleting item:', error.message);
    return;
  }
  return data
}

export default {
  fetchItems,
  fetchMaterials,
  postItem,
  deleteItem
}

