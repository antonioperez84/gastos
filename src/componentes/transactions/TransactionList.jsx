import React from 'react'
import {useGlobalState} from '../../contexto/GlobalState.jsx'
import { MdOutlineDeleteForever } from 'react-icons/md';


const TransactionList = () => {

  const {transactions, deleteTransaction} = useGlobalState()

  return (
    <div>
      {<table className='w-full p-1 font-bold rounded-xl border-separate mt-2 mb-2 table-fixed'>
        <th align='left' className='text-xl md:text-2xl text-white pl-3' width='70%'>Concepto</th>
        <th className='text-xl md:text-2xl text-white pl-3' width='25%' align='right'>
          Cantidad
        </th>
        <th width='5%'></th>
        {transactions.map(transaction =>(
          <tr key={transaction.id} className=''>
            <td className=' w-96 pl-3 overflow-hidden text-sm'>
              {transaction.descripcion}
            </td>
            <td className='' align='right'>
              {transaction.cantidad} €
            </td>
            <td className='' align='center'>
              <button className='flex justify-center' onClick={ ()=>{
                deleteTransaction(transaction.id)
              }}>
                <MdOutlineDeleteForever className='h-6 w-6 text-red-500'/>
            </button>
            </td>
          </tr>
        ))}
        </table>
      }
    </div>
  )
}

export default TransactionList