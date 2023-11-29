import React from 'react'
import { useGlobalState } from '../contexto/GlobalState'
import Grafico from './Grafico'

const IngresosGastos = () => {

  const {transactions} = useGlobalState()

  const total = transactions.map((transaction) =>transaction.cantidad)

  const ingresos = total.filter(cantidad => cantidad >0)
                        .reduce((acc,cantidad)=>(acc += cantidad),0)
  const gastos = total.filter(cantidad => cantidad <0)
                      .reduce((acc,cantidad)=>(acc += cantidad),0) *-1

  return (
    <div className='grid grid-cols-1 md:flex md:flex-col md:w-2/4 h-full items-center 
                    justify-center'>
      <Grafico ingresos={ingresos} gastos={gastos}/>
      <div className='flex flex-row gap-2 justify-center items-center text-2xl p-2 md:text-3xl'>
        <label className='text-white font-bold'>Ingresos</label>
        <label className='text-green-500 font-bold'>{ingresos}€</label>
        <label className='text-white  font-bold'>Gastos</label>
        <label className='text-red-500 font-bold'>{gastos}€</label>
      </div>
      
    </div>
        
  )
}

export default IngresosGastos