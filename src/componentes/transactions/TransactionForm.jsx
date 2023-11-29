import React, { useContext, useState } from 'react'
import { useGlobalState } from '../../contexto/GlobalState.jsx'

const TransactionForm = () => {

  const {addTransaction} = useGlobalState()
  const [descripcion, setDescripcion] = useState('')
  const [cantidad, setCantidad] = useState()

  const onSubmit = (e) =>{
    e.preventDefault() //para no reiniciar el navegador
    cantidad!=0&&
    addTransaction({
      id: window.crypto.randomUUID(),
      descripcion, 
      cantidad: +cantidad
    })
    setDescripcion('')
    setCantidad('')
  
  }

  return (
    <div>

      <form onSubmit={onSubmit} 
            className='flex flex-col gap-2  p-4 rounded-lg 
                     text-white w-full font-bold'>
        Concepto:
        <input name='descripcion' type='text' placeholder='Escribe un concepto'
               onChange={(e) => setDescripcion(e.target.value)}
               className='p-1 text-black font-bold rounded-xl border-2 border-black' value={descripcion}/>
        Cantidad:
        <input name='cantidad' type='number' placeholder='0.00' step={0.01}
               onChange={(e) => setCantidad(e.target.value)}
               className='p-1 text-black font-bold rounded-xl border-2 border-black' value={cantidad}/>
        <div className='flex w-full justify-center'>
          <button className='w-2/3 items-center justify-center bg-slate-400 rounded-xl border-2 border-black'>
            Añadir
          </button>
        </div>
      </form>

    </div>
  )
}

export default TransactionForm