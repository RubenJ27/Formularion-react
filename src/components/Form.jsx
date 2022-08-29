import { useState } from "react";
import AlertError from "./AlertError";

const Form = () => {

    const [user, setUser] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();

      if ([user, phone, email, date].includes("")) {
        setError(true);
        return;
      }

      setError(false);

      /* Limpiar formulario */
      setUser("");
      setPhone("");
      setEmail("");
      setDate("");

      /* Ejercicio finalizado */
      okModal();
    } 

    const okModal = () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    };


  return (
    <>
    <div className="md:w-full h-full lg:w-1/2 mx-5 relative">
      {/* Inicia el Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-7 px-5 mb-1 h-full relative"
      >
        <div className="mb-5">
          <label
            htmlFor="user"
            className="block text-gray-700 uppercase font-bold"
          >
            😉 Nombres
          </label>
          <input
            id="user"
            type="text"
            placeholder="Nombres"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-gray-700 uppercase font-bold"
          >
            📱Celular
          </label>
          <input
            id="phone"
            type="number"
            placeholder="Celular"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            📧 Correo
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            🎂 Cumpleaños
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-blue-600 w-full p-2 text-white uppercase font-bold rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
          value="Enviar"
        />
      </form>
    </div>

    <div className="md:w-full h-full lg:w-1/2 mx-5">
     {/*  {error && (
        <AlertError>
          <p>Todos los campos son obligatorios</p>
        </AlertError>
      )} */}
      <div className="bg-white shadow-md rounded-lg py-8 px-5 mb-10 uppercase">
        <div className="mb-5">
          <b>😉 Nombres:</b> {user}
        </div>
        <div className="mb-5">
          <b>📱 Celular:</b> {phone}
        </div>
        <div className="mb-5">
          <b>📧 Correo:</b> {email}
        </div>
        <div className="mb-5">
          <b>🎂 Cumpleaños:</b> {date}
        </div>
        
      </div>
      {error && (
        <AlertError>
          <p>Todos los campos son obligatorios</p>
        </AlertError>
      )}
    </div>
  </>


  );
}

export default Form;
