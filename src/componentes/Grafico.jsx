import React from 'react'
import {VictoryPie, VictoryLabel} from 'victory'

const Grafico = (props) => {
  return (
    <div className='mt-0'>
      <VictoryPie data={[
        { x: 'Ingresos', y: props.ingresos==0&props.gastos==0?1:props.ingresos},
        { x: 'Gastos', y: props.ingresos==0&props.gastos==0?1:props.gastos}
      ]}
      colorScale={['green','red']}
      animate={500}
      labelComponent={<VictoryLabel/>}
      labelRadius={40}
      style={{
        data: {
          stroke: "black", strokeWidth: 2, textShadow: 10},
        labels:{
          fill: 'white',
          fontWeight: 'bold',
          fontSize: 22,
          
        }
      }}
      />
    </div>
    
  )
}

export default Grafico