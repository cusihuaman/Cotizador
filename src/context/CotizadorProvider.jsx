import {createContext,useState} from 'react'
import { obtenerDiferenciaYears,calcularMarca,calcularPlan,formatearDinero } from '../helpers'

const CotizadorContext=createContext()

const CotizadorProvider=({children})=>{
  const [datos,setDatos]=useState({
    marca:'',
    year:'',
    plan:''
  })
  const [error,setError]=useState('')
  const [resultado,setResultado]=useState(0)
  const [cargando,setCargando]=useState(false)
  const handleChangeDatos=(e)=>{
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
  }
  const cotizarSeguro=()=>{
    
    // base
    let resultado=2000;
    // obtener diferencia de años
    const diferencia=obtenerDiferenciaYears(datos.year)
    console.log(diferencia)
    // hay que restar el 3% de cada año
    resultado -=((diferencia*3)*resultado)/100;

    // amricano 15%

    // europero 30%
    // asiatico 5%
    resultado *=calcularMarca(datos.marca)
    // console.log(resultado)
    
    // basico 20%
    // completo 50%
    resultado *=calcularPlan(datos.plan)
    // formatear dinero
    resultado=formatearDinero(resultado)
    setCargando(true)
    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 3000);
  }
  return(
    <CotizadorContext.Provider value={{
      datos,
      handleChangeDatos,
      error,
      setError,
      cotizarSeguro,
      resultado,
      cargando
    }}>
      {children}
    </CotizadorContext.Provider>
  )
}
export{
  CotizadorProvider
}
export default CotizadorContext;