import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-2xl">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-2xl">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes y {""}
            <span className="text-indigo-600 font-bold">
              aparecerán en este lugar.
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
