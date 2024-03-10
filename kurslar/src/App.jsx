import { useState } from 'react'
import './css/App.css'
import Header from './Header'
import { kurs } from './data'
import Books from './Books'
import './css/kurs.css'

function App() {
 
  return (
   <div>
        <Header />
        <div className="kurs-main">
        {
         kurs?.map((kurs)=>(
          <Books key={kurs.id} kurs={kurs}/>
         ))
          
        }
        </div>
   </div>
  )
}

export default App
