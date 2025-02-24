import {
  Button,
  FormControl,
  FormHelperText,
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
    console.log(data);
  });

  return (
    <form className="mt-4 w-[600px]" onSubmit={onSubmit}>
      <h3 className="text-xl mb-3">Agregar Item</h3>
      <div className="flex flex-col gap-3">
        <TextField
          size="small"
          name="nombre"
          label="Nombre"
          variant="outlined"
          {...register("nombre", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            }
          })}
          error={!!errors.nombre}
          helperText={errors.nombre?.message}
          
        />

        <FormControl 
          size="small" 
          fullWidth
          error={errors.material}
        >
          <InputLabel id="material-label">Material</InputLabel>
          <Select
            labelId="material-label"
            label="Material"
            value={watch("material")}
            {...register("material", {
              required: {
                value: true,
                message: "Selecciona un material",
              },
            })}
          >
            {materials.map((material) => (
              <MenuItem key={material.id} value={material.id}>
                {material.nombre}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.material?.message}</FormHelperText>
        </FormControl>

        <TextField
          size="small"
          name="medidas"
          label="Medidas"
          variant="outlined"
          {...register("medidas", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            pattern: {
              value: /^\d{1,3}[xX]\d{1,3}$/,
              message: "El formato debe ser 999x999 (ancho x alto)",
            }
            
          })}
          error={errors.medidas}
          helperText={errors.medidas?.message}
        />

        <TextField
          size="small"
          type="number"
          name="cantidad"
          label="Cantidad"
          variant="outlined"
          {...register("cantidad", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            min: {
              value: 1,
              message: "La cantidad mínima es 1",
            },
            max: {
              value: 100,
              message: "La cantidad máxima es 100",
            }
          })}
          error={errors.cantidad}
          helperText={errors.cantidad?.message}
        />

        <TextField
          multiline
          rows={4}
          size="small"
          name="observaciones"
          label="Observaciones"
          variant="outlined"
          {...register("observaciones", {
            required: false,
            maxLength: {
              value: 200,
              message: "Las observaciones deben tener menos de 200 caracteres",
            }
          })}
          error={errors.observaciones}
          helperText={errors.observaciones?.message}
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
