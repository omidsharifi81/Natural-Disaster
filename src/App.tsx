import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import axios from 'axios'

import Map from './components/map'
import './App.css'
import { AddDisaster } from './components/addDisaster'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=5');
      const { events } = await response.data

      //     setEventData(events)
      //     setLoading(false)
      //   }

      //   fetchEvents()
      // }, [])
    }
  })

  return (
    <>
      <Header />
      <div className="container">
        <AddDisaster />
        {/* <Map /> */}
        {/* { loading && <Map eventData={eventData}/> } */}
        {loading && <Map eventData={eventData} />}
      </div>
    </>
  )
}

export default App
