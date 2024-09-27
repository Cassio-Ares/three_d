'use client'

import { useColor } from "./ColorProvider.js";


const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

export const ColorPicker = () => {
  const {setColor} = useColor()

  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', padding: '20px'}}>
     {
        colors.map((color)=>(
            <div
             key={color}
             style={{
                width:'40px',
                height:'40px',
                background: color,
                margin:'10px',
                cursor: 'pointer',
                borderRadius:'50%'        
             }}
             onClick={()=> setColor(color)}
            />
        ))
     }
    </div>
  )
}
