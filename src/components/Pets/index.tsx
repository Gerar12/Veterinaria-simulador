import { useContext } from "react";
import { AppContext } from "../../Logic/AppContext";

const Pets = () => {
  const context = useContext(AppContext);
  if (!context) {
    // Manejo de error: el contexto no debería ser undefined aquí
    throw new Error("useContext(AppContext) returned undefined!");
  }

  const { pets } = context;

  return (
    <>
      {pets.length > 0 ? (
        <>
          <h2 className="text-3xl font-extrabold text-center mb-5">
            Pacientes
          </h2>
          <div className="rounded-md overflow-y-scroll md:w-96 max-h-[550px]">
            {pets.map((pet) => (
              <div
                key={pet.id}
                className="bg-white shadow-lg rounded-lg mt-5 p-6 border border-gray-200"
              >
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="text-xl text-gray-900 mb-4">{pet.name}</p>

                <p className="text-sm text-gray-500">Propietario</p>
                <p className="text-xl text-gray-900 mb-4">{pet.propetario}</p>

                <p className="text-sm text-gray-500">Email</p>
                <p className="text-xl text-gray-900 mb-4">{pet.email}</p>

                <p className="text-sm text-gray-500">Fecha de Alta</p>
                <p className="text-xl text-gray-900 mb-4">{pet.alta}</p>

                <p className="text-sm text-gray-500">Síntomas</p>
                <p className="text-xl text-gray-900 mb-4">{pet.sintomas}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center text-2xl md:text-3xl mt-5 md:mt-0 font-extrabold">
            No hay pacientes
          </h2>
          <p className="mt-5 font-semibold px-10 text-center">
            Comienza agregando Pacientes{" "}
            <span className="text-indigo-600">y apareceran en este lugar</span>{" "}
          </p>
        </>
      )}
    </>
  );
};

export default Pets;
