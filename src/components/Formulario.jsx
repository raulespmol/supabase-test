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
};

const Formulario = () => {
  const { createItem, materials } = useContext(AppContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: nuevoItemInicial,
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(errors);
  });

  return (
    <form className="mt-4" onSubmit={onSubmit}>
      <h3>Agregar Item</h3>
      <div className="flex flex-col gap-3">
        <TextField
          name="nombre"
          label="Nombre"
          variant="outlined"
          {...register("nombre", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          })}
          error={errors.nombre}
          helperText={errors.nombre?.message}
          
        />

        <FormControl fullWidth>
          <InputLabel id="material-label">Material</InputLabel>
          <Select
            labelId="material-label"
            label="Material"
            value={watch("material")}
            {...register("nombre", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
            error={errors.material}
            helperText={errors.material?.message}
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
          {...register("medidas", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          })}
          error={errors.medidas}
          helperText={errors.medidas?.message}
        />

        <TextField
          name="cantidad"
          label="Cantidad"
          variant="outlined"
          {...register("cantidad", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          })}
          error={errors.cantidad}
          helperText={errors.cantidad?.message}
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
