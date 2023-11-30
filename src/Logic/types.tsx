import { ReactNode } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

// Define el tipo para los props que aceptan children en tus componentes
export type AppChildren = {
  children: ReactNode;
};

// Define la interfaz Pet que modela la estructura de datos para una mascota
export interface Pet {
  name: string;
  propetario: string;
  email: string;
  alta: string;
  sintomas: string;
  id: `${string}-${string}-${string}-${string}-${string}`;
}

// Actualiza el AppContextType para incluir una lista de Pet y una función para actualizar esa lista
export type AppContextType = {
  pets: Pet[];
  handleForm: (data: FieldValues) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
  handleDelete: (data: Pet) => void;
  handleUpdate: (data: Pet) => void;
  update: boolean;
};
