import { MdPets } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Form = () => {
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
          <form action="" className="mt-5 bg-white p-5 rounded-md  ">
            {/* Separacion */}
            <div className="mt-2">
              <label htmlFor="name" className="font-bold">
                Nombre Mascota
              </label>
              <div className="flex border items-center mt-2 ">
                <input
                  id="name"
                  type="text"
                  placeholder="Nombre de la mascota"
                  className="p-2 w-full focus:outline-none"
                />
                <MdPets className="w-5 h-5 mr-2 text-gray-500" />
              </div>
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
                />
                <PiUserListFill className="w-5 h-5 mr-2 text-gray-500" />
              </div>
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
                />
                <MdEmail className="w-5 h-5 mr-2 text-gray-500" />
              </div>
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
              />
            </div>
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
                />
              </div>
            </div>
            <button
              type="submit"
              className="transition duration-300 bg-indigo-600 w-full mt-5 p-2 text-gray-200 font-semibold rounded-md hover:text-white hover:bg-indigo-800 "
            >
              Agregar Paciente
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-center text-2xl md:text-3xl mt-5 md:mt-0 font-extrabold">
            No hay pacientes
          </h2>
          <p className="mt-5 font-semibold px-10 text-center">
            Comienza agregando Pacientes{" "}
            <span className="text-indigo-600">y apareceran en este lugar</span>{" "}
          </p>
        </section>
      </main>
    </>
  );
};

export default Form;
