import React, { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AppContextType, AppChildren, Pet } from "./types";

const AppContext = React.createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<AppChildren> = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [pets, setPets] = useState<Pet[]>([]);
  const [update, SetUpdate] = useState<boolean>(false);
  const [petUpdate, setPetUpdate] = useState<Pet | undefined>(undefined);

  const handleForm = (data: FieldValues) => {
    //Modiicnado un pet
    if (update && petUpdate) {
      console.log(data);
      setPetUpdate(undefined);
      const updatedPets = pets.map((pet) =>
        pet.id === petUpdate.id ? { ...pet, ...data } : pet
      );
      setPets(updatedPets);
      SetUpdate(false);
      reset();
      return;
    }

    //Agregando un pet
    const newData = {
      ...data,
      id: crypto.randomUUID(),
    };
    setPets([...pets, newData as Pet]);
    reset();
  };

  const handleDelete = (petDelete: Pet) => {
    const newData: Pet[] = pets.filter((pet) => pet.id !== petDelete.id);
    setPets(newData);
  };

  const handleUpdate = (petUp: Pet) => {
    SetUpdate(true);
    setPetUpdate(petUp);
  };

  useEffect(() => {
    if (petUpdate) {
      setValue("name", petUpdate.name);
      setValue("propetario", petUpdate.propetario);
      setValue("email", petUpdate.email);
      setValue("alta", petUpdate.alta);
      setValue("sintomas", petUpdate.sintomas);
      return;
    }
    reset();
  }, [petUpdate, setValue, reset]);

  return (
    <AppContext.Provider
      value={{
        pets,
        handleForm,
        register,
        handleSubmit,
        errors,
        handleDelete,
        handleUpdate,
        update,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
