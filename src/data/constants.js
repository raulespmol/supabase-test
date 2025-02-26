import DB from "../services/supabaseServices"

const campos = [
  "Nombre",
  "Medidas",
  "Material",
  "Observaciones",
  "Cantidad"
] // Campos de la tabla, pendiente traerlos desde Supabase

const formattedData = async () => {
  const data = await DB.fetchItems()
  const formatted = data.map(({ materiales, ...rest }) => ({
    ...rest,
    material: materiales.nombre
  }))

  return formatted
}

export {
  campos,
  formattedData
}

