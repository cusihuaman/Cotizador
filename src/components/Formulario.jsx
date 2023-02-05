import { MARCAS,YEARS,PLANES } from "../constants"
import { Fragment} from "react"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"
const Formulario = () => {
    const {datos,handleChangeDatos,error,setError,cotizarSeguro}=useCotizador()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(Object.values(datos).includes('')){
            setError('Todo los campos son obligatorios')
            return
        }
        setError('')
        //Cotizar
        cotizarSeguro()
    }
  return (
    <>
        {error && <Error/>}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
            <label htmlFor="marca" className="block mb-3 font-bold  text-gray-500 uppercase">Marca</label>
            <select 
            name="marca" 
            onChange={e=>handleChangeDatos(e)} 
            className="w-full p-3 bg-white border border-gray-300 rounded-lg" 
            value={datos.marca}>
                <option value="">--Selecione Marca--</option>
                {MARCAS.map(marca=>(
                    <option
                        key={marca.id}
                        value={marca.id}
                    >{marca.nombre}</option>
                ))}
            </select>
        </div>
        <div className="my-5">
            <label htmlFor="marca" className="block mb-2 font-bold  text-gray-500 uppercase">Año</label>
            <select 
            name="year" 
            onChange={e=>handleChangeDatos(e)} 
            className="w-full p-3 bg-white border border-gray-300 rounded-lg" 
            value={datos.year}>
                <option value="">--Selecione Año--</option>
                {YEARS.map(year=>(
                    <option
                        key={year}
                        value={year}
                    >{year}</option>
                ))}
            </select>
        </div>
        <div className="my-5">
            <label htmlFor="marca" className="block mb-2 font-bold  text-gray-500 uppercase">Elige un plan</label>
            <div className="flex gap-2 items-center">
                    
                 {PLANES.map(plan=>(
                    <Fragment key={plan.id}>
                        <label htmlFor="">{plan.nombre}</label>
                        <input type="radio" name="plan" value={plan.id} onChange={e=>handleChangeDatos(e)} />
                    </Fragment>
                 ))}
            </div>
        </div>
        <input type="submit" value='Cotizar' className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" />
      </form>
    </>
  )
}

export default Formulario
