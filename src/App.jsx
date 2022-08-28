import Form from "./components/Form"
import Header from "./components/Header"

function App() {

  return (
    <div className="container mx-auto">
    <Header />
    <div className="md: ml-40 md:flex flex-col p-5 rounded-lg bg-white">
    <Form />
    </div>
    </div>
  )
}

export default App
