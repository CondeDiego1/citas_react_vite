import Swal from "sweetalert2";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    Swal.fire({
      title: "¿Deseas eliminar este paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, ¡eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id);
        Swal.fire(
          "Eliminado!",
          "El registro se eliminó correctamente.",
          "success"
        );
      }
    });
  };
  
  return (
    <div className="mx-5 my-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Nombre: {""} <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Propietario: {""}{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Email: {""} <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Fecha Alta: {""}{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Sintomas: {""}{" "}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex gap-3 flex-wrap justify-center	mt-5">
        <button
          className="w-40	py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="w-40	py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
