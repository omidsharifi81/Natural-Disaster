import { useState, useEffect } from 'react'
import  {Header}  from './components/Header'
import  Map  from './components/map'
 import './App.css'
import { AddDisaster } from './components/addDisaster'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     setLoading(true)
  //     const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
  //     const { events } = await res.json()

  //     setEventData(events)
  //     setLoading(false)
  //   }

  //   fetchEvents()
  // }, [])


  return (
    <>
      <Header />
      <AddDisaster />
      {/* <Map /> */}
      {/* { loading && <Map eventData={eventData}/> } */}
    </>
  )
}

export default App
