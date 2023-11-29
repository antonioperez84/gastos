import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useGlobalState } from '../contexto/GlobalState.jsx'

const Balance = () => {

  const {transactions} = useGlobalState()

  const [color, setColor] = useState()

  const cantidad = transactions.map(transaction => transaction.cantidad)

  const total = cantidad.reduce((acumulador, item)=>(acumulador+=item), 0)

  useEffect(()=>{
    total<0 ? setColor('text-red-500') : setColor('text-green-500')
  },[total])

  return (
    <div className='grid md:flex md:flex-col justify-center items-center'>
      <label className='text-white font-bold'>Balance</label>
      <div className={'font-bold '+color}>
        <label className='text-5xl'>{total}€</label>
      </div>
    </div>
  )
}

export default Balance