const Item = ({nombre, material, medidas, observaciones, cantidad}) => {
  return (
    <div>
      <ul>
        <li>Cantidad: {cantidad}</li>
        <li>Nombre: {nombre}</li>
        <li>Medidas: {medidas}</li>
        <li>Material: {material}</li>
        <li>Observaciones: {observaciones}</li>
      </ul>
    </div>
  )
}

export default Item