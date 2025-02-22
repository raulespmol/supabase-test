import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";
import { campos } from "../data/constants";

const nuevoItemInicial = {
  nombre: "",
  material: "",
  medidas: "",
  cantidad: "",
  observaciones: "",
}

const Formulario = () => {
  const { createItem, materials } = useContext(AppContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: nuevoItemInicial
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="mt-4" onSubmit={onSubmit}>
      <h3>Agregar Item</h3>
      <div className="flex flex-col gap-3">
        <TextField
          name="nombre"
          label="Nombre"
          variant="outlined"
          {...register("nombre")}
        />

        <FormControl fullWidth>
          <InputLabel id="material-label">Material</InputLabel>
          <Select
            labelId="material-label"
            label="Material"
            value={watch("material")}
            {...register("material")}
          >
            {materials.map((material) => (
              <MenuItem key={material.id} value={material.id}>
                {material.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          name="medidas"
          label="Medidas"
          variant="outlined"
          {...register("medidas")}
        />

        <TextField
          name="cantidad"
          label="Cantidad"
          variant="outlined"
          {...register("cantidad")}
        />

        <TextField
          name="observaciones"
          label="Observaciones"
          variant="outlined"
          {...register("observaciones")}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          loading={isSubmitting}
        >
          Agregar
        </Button>
      </div>
    </form>
  );
};

export default Formulario;
