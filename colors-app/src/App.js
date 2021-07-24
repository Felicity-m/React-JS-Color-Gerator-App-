import React, { useState } from 'react'
import Values from 'values.js'
import "./styles.css"
import SingleColor from './SingleColor'

const App = () => {
         const [value, setValue]= useState("")
         const [newColors, setNewColors]=useState(new Values('#32a8a4').all(10))
         const [error, setError] = useState(false)


         const handleSubmit = (e)=>{
             e.preventDefault()
             try {
                let allColors = new Values(value).all(10)
                setNewColors(allColors)
              } catch (error) {
                setError(true)
                console.log(error)
              }
            // const allColors = new Values(value).all(10)
             //setNewColors(allColors)
             //console.log(allColors)
         }


         return (
                  <main>
                      <section className="section-form">
                          <form onSubmit={handleSubmit}>
                              <label htmlFor="color">
                                  <h1>Generate Color </h1>
                              </label>
                              <input 
                              onChange={(e)=>setValue(e.target.value)}
                              value={value}
                              type="text"
                               name="color"
                               id="color"
                               placeholder="#32a8a4"
                               className={`${error ? 'error' : null}`}
                               />
                               <button type="submit">Get Color</button>
                          </form>
                      </section>
                      <section className="color-box">
                          {newColors.map((color,index)=>{
                              return(
                                    <SingleColor 
                                    key={index}
                                    index={index}
                                    color={color}/>
                              )
                          })}
                      </section>    
                  </main>
         )
}

export default App
