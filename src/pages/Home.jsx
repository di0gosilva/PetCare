import axios from "axios"
import { useEffect, useState } from "react"
import PetCard from '../components/PetCard'

const API_URL_MOCKAPI = "https://681b99d717018fe5057c284c.mockapi.io/pets"
const API_URL_DOGAPI = "https://dog.ceo/api/breeds/image/random/3"

const Home = () => {
  const [pets, setPets] = useState([])
  const [petsImage, setPetsImage] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPetsData = async () => {
      setLoading(true)
      try {
        const res1 = await axios.get(API_URL_MOCKAPI)
        const res2 = await axios.get(API_URL_DOGAPI)

        const data1 = res1.data
        const data2 = res2.data.message

        const firstThree = data1.slice(0, 3)
        setPets(firstThree)
        setPetsImage(data2)
      } catch (error) {
        console.log("Erro ao buscar pets:", error)
      } finally {
        setLoading(false)
      }
    }

    getPetsData()
  }, [])

  return(
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-4"
    >
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md w-full max-w-5xl">
        <h1 className="text-3xl md:text-3xl font-semibold text-center mb-6">Bem-vindo</h1>

        {loading && (
          <div className="text-lg md:text-2xl font-semibold text-center mb-4">Carregando os pets...</div>
        )}

        <PetCard
          pets={pets}
          petsImage={petsImage}
          showButton
        />
      </div>
    </div>
  )
}

export default Home