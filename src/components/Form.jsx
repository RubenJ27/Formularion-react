function Form() {

  return (
      <form className="flex flex-col">
      <label htmlFor="" className="my-2">😉 Nombre</label>
      <input type="text" className="border-solid border-2 border-gray-200 rounded-sm py-1 px-2" name="name" id="name" placeholder="Nombre" />
      <label htmlFor="" className="my-2">📱 Celular</label>
      <input type="number" className="border-solid border-2 border-gray-200 rounded-sm py-1 px-2" name="phone" id="phone" placeholder="Celular" />
      <label htmlFor="" className="my-2">📧 Correo</label>
      <input type="email" className="border-solid border-2 border-gray-200 rounded-sm py-1 px-2" name="email" id="email" placeholder="Correo" />
      <label htmlFor="" className="my-2">🎂 Cumpleaños</label>
      <input type="date" className="border-solid border-2 border-gray-200 rounded-sm py-1 px-2" name="birthday" id="birthday" />
      <button className="container mx-auto py-1 bg-blue-600 text-white rounded-lg mt-3" >Enviar</button>
      </form>

  )
}

export default Form