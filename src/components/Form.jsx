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
            😎 Nombres
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
            🥳 Cumpleaños
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
          <b>😎 Nombres:</b> {user}
        </div>
        <div className="mb-5">
          <b>📱 Celular:</b> {phone}
        </div>
        <div className="mb-5">
          <b>📧 Correo:</b> {email}
        </div>
        <div className="mb-5">
          <b>🥳 Cumpleaños:</b> {date}
        </div>
        
        <div className="bg-red-600 font-bold uppercase text-center text-white p-3 mb-2 rounded-md">
        <p>Todos los campos son obligatorios</p>
        </div>
      </div>
    </div>
  </>

    /* <>
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <form className="flex flex-col">
        <label htmlFor="" className="my-2">
          😉 Nombre
        </label>
        <input
          type="text"
          className="border-solid border-2 border-gray-200 rounded-sm py-1 px-2"
          name="name"
          id="name"
          placeholder="Nombre"
        />
        <label htmlFor="" className="my-2">
          📱 Celular
        </label>
        <input
          type="number"
          className="border-solid border-2 border-gray-200 rounded-sm py-1 px-2"
          name="phone"
          id="phone"
          placeholder="Celular"
        />
        <label htmlFor="" className="my-2">
          📧 Correo
        </label>
        <input
          type="email"
          className="border-solid border-2 border-gray-200 rounded-sm py-1 px-2"
          name="email"
          id="email"
          placeholder="Correo"
        />
        <label htmlFor="" className="my-2">
          🎂 Cumpleaños
        </label>
        <input
          type="date"
          className="border-solid border-2 border-gray-200 rounded-sm py-1 px-2"
          name="birthday"
          id="birthday"
        />
        <button className="container mx-auto py-1 bg-blue-600 text-white rounded-lg mt-3">
          Enviar
        </button>
      </form>

      <div className="md:w-1/2 lg:w-2/5 mx-5">
      <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 uppercase">
        <div className="mb-5">
          <b>😉 Nombre:</b>
        </div>
      </div>
      </div>
    </div>

    </> */

  );
}

export default Form;
