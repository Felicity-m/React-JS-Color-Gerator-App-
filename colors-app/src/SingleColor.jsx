import React,{useState,useEffect} from 'react'

const SingleColor = ({color,index}) => {
         const[alert, setAlert]=useState(false)
         const {rgb,weight,hex} = color
         const newHex = `#${hex}`
         const background = rgb.join(',')

         useEffect(() => {
                  const timeout = setTimeout(() => {
                    setAlert(false)
                  }, 3000)
                  return () => clearTimeout(timeout)
                }, [alert])
         return (
                  <div className={`colors ${index > 10 && "color-white"}`}
                  style={{ backgroundColor: `rgb(${background})` }}
                  onClick={() => {
                           setAlert(true)
                           navigator.clipboard.writeText(newHex)
                         }}
                  >
                           <p>{newHex}</p>
                           <p>{weight}%</p> 
                           {alert && <p className="clip">Copied to clipboard</p>}     
                  </div>
         )
}

export default SingleColor
