import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AppContextType, AppChildren, Pet } from "./types";

const AppContext = React.createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<AppChildren> = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [pets, setPets] = useState<Pet[]>([]);

  const handleForm = (data: FieldValues) => {
    const newData = {
      ...data,
      id: crypto.randomUUID(),
    };
    setPets([...pets, newData as Pet]);
    console.log(pets);
  };

  return (
    <AppContext.Provider
      value={{ pets, handleForm, register, handleSubmit, errors }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
