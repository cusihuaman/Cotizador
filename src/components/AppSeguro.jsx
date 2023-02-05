import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
const AppSeguro = () => {
  const {resultado,cargando}=useCotizador()
  return (
    <>
        <header className="my-10 bg-slate-700">
         <h1 className="text-white font-black text-4xl text-center">cotizador de seguros</h1>   
        </header> 
        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario/>
        {cargando ?<Spinner/>:<Resultado/>}
        </main>
    </>
  )
}

export default AppSeguro
