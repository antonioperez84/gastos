import React from 'react'
import {GlobalProvider} from './contexto/GlobalState.jsx'
import Header from './componentes/Header.jsx'
import TransactionForm from './componentes/transactions/TransactionForm.jsx'
import Balance from './componentes/Balance.jsx'
import TransactionList from './componentes/transactions/TransactionList.jsx'
import IngresosGastos from './componentes/IngresosGastos.jsx'
import Grafico from './componentes/Grafico.jsx'

const App = () => {
  return (
    <GlobalProvider>
      <div className='h-max bg-gray-500 flex flex-col items-center w-full gap-1 mt-0'>
        <Header/>
        <div className='grid grid-cols-1 md:flex md:flex-col md:w-2/4 w-4/5 h-full items-center 
                    justify-center bg-cyan-800 rounded-2xl border-black border-2'>
          <TransactionForm/>
          <Balance/>
          <IngresosGastos/>
          
        </div> 
        <div className='w-4/5 md:w-2/4 gap-2 bg-cyan-800 rounded-2xl border-black border-2'>
          <TransactionList/>
        </div>
      </div>       
    </GlobalProvider>
  )
}

export default App