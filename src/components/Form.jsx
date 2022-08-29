import { useState } from "react";

function Form() {


    const [user, setUser] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("")

   /*  const handleSubmit = (e) => {
      e.preventDefault();
    } */


  return (
    <>
    <div className="md:w-full h-full lg:w-1/2 mx-5 relative">
      {/* Inicia el Formulario */}
      <form
        /* onSubmit={handleSubmit} */
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
      <div className="bg-red-600 font-bold uppercase text-center text-white p-3 mb-2 rounded-md">
        <p>Todos los campos son obligatorios</p>
        </div>
    </div>
  </>


  );
}

export default Form;
