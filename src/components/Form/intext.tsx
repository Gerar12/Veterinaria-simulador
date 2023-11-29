import { MdPets } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { AppChildren } from "../../Logic/types";
import { MdEmail } from "react-icons/md";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Logic/AppContext";

const Form: React.FC<AppChildren> = ({ children }) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useContext(AppContext) returned undefined!");
  }

  const { handleForm, register, handleSubmit, errors } = context;

  return (
    <>
      <main className="flex flex-col sm:flex-row justify-evenly m-10 ">
        <section className="  ">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center ">
            Seguimiento Pacientes
          </h2>
          <p className="mt-5 font-semibold text-center">
            Agrega Pacientes y{" "}
            <span className="text-indigo-600">Administrarlos</span>
          </p>
          <form
            action=""
            className="mt-5 bg-white p-5 rounded-md  "
            onSubmit={handleSubmit((data) => {
              handleForm(data);
            })}
          >
            {/* Separacion */}
            <div className="mt-2">
              <label htmlFor="name" className="font-bold">
                Nombre Mascota
              </label>
              <div className="flex border items-center mt-2  ">
                <input
                  id="name"
                  type="text"
                  placeholder="Nombre de la mascota"
                  className="p-2 w-full focus:outline-none "
                  {...register("name", {
                    required: true,
                  })}
                />

                <MdPets className="w-5 h-5 mr-2 text-gray-500" />
              </div>
              {errors.name && (
                <span className="text-red-500 text-xs ">
                  Nombre es requerido
                </span>
              )}
            </div>
            {/* Separacion */}
            <div className="mt-2">
              <label htmlFor="propetario" className="font-bold">
                Nombre del Propetario
              </label>
              <div className="flex border items-center mt-2 ">
                <input
                  id="propetario"
                  type="text"
                  placeholder="Nombre del propetario"
                  className="p-2 w-full focus:outline-none"
                  {...register("propetario", {
                    required: true,
                  })}
                />
                <PiUserListFill className="w-5 h-5 mr-2 text-gray-500" />
              </div>
              {errors.propetario && (
                <span className="text-red-500 text-xs">
                  El Propetario es obligatorio
                </span>
              )}
            </div>
            {/* Separacion */}
            <div className="mt-2">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <div className="flex border items-center mt-2 ">
                <input
                  id="email"
                  type="text"
                  placeholder="Correo electronico"
                  className="p-2 w-full focus:outline-none"
                  {...register("email", {
                    required: true,
                  })}
                />
                <MdEmail className="w-5 h-5 mr-2 text-gray-500" />
              </div>
              {errors.email && (
                <span className="text-red-500">El email es obligatorio</span>
              )}
            </div>
            {/* Separacion */}
            <div className="mt-2">
              <label htmlFor="alta" className="font-bold">
                Alta
              </label>

              <input
                id="alta"
                type="date"
                placeholder="dd/mm/aaa"
                className="p-2 mt-2 w-full focus:outline-none bg-white border"
                {...register("alta", {
                  required: true,
                })}
              />
            </div>
            {errors.alta && (
              <span className="text-red-500">Fecha de alta requerida</span>
            )}
            {/* Separacion */}
            <div className="mt-2">
              <label htmlFor="sintomas" className="font-bold">
                Sintomas
              </label>
              <div className="flex border items-center mt-2 ">
                <textarea
                  id="sintomas"
                  placeholder="Describe toodos los sintomas"
                  className="p-2 w-full focus:outline-none"
                  {...register("sintomas", {
                    required: true,
                  })}
                />
              </div>
              {errors.sintomas && (
                <span className="text-red-500">
                  La descripcion es obligatoria
                </span>
              )}
            </div>
            <button
              type="submit"
              className="transition duration-300 bg-indigo-600 w-full mt-5 p-2 text-gray-200 font-semibold rounded-md hover:text-white hover:bg-indigo-800 "
            >
              Agregar Paciente
            </button>
          </form>
        </section>

        <section>{children}</section>
      </main>
    </>
  );
};

export default Form;
