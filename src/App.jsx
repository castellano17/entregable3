
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { getRandomNumber } from './utils/handlRandom'
import { numbersPage } from './utils/handlePagination'

const RESIDENTS_PERPAGE = 12;
function App() {
  //Estado que almacena la información de la location
  const [location, setLocation] = useState()
  //location que almacena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState('')
  //estado paginación
  const [page, setPage] = useState(1)

  //función que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  const pagination = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResident = location?.residents.slice(minLimit, maxLimit)
    return newResident
  }

  // efecto que se ejecuta en el primer render y cuando cambia la location
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === '' ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <Pagination numbersPage={numbersPage} setPage={setPage} location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} />
      <ResidentList pagination={pagination} />
      <Pagination numbersPage={numbersPage} setPage={setPage} location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} />
    </div >

  )
}

export default App
