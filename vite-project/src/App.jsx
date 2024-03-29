import { useState, useEffect } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'

function App() {
  const [catImageUrl, setCatImageUrl] = useState('')
  const [fact, setFact] = useState('')

  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch(`https://catfact.ninja/fact`)
          const data = await response.json()
          const { fact } = data
          setFact(fact)
        } catch (error) {
          console.error(error)
        }
      }
      //funcion anonima
    )()
    //matriz de dependencia
  }, [])

  useEffect(() => {
    if (fact) {
      (
        async () => {
          try {
            const firstword = fact.split(' ', 3).join(' ')
            const response = await fetch(`https://cataas.com/cat/says/${firstWord}`)
            const data = await response
            const { url } = data
            setCatImageUrl(url)
          } catch (error) {
            console.log(error)
          }
        }
      )()
    }
  }, [fact])

  return (
    <>
      <h1>useState, useEffect example: Random cat</h1>
      {fact && <p> {fact} </p>}
      {catImageUrl && <ima src={catImageUrl} alt='random' />}
    </>
  )
}
export default App
