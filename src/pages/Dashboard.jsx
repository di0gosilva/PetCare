import axios from "axios"
import { useEffect, useState } from "react"
import PetCard from '../components/PetCard'
import useAuth from "../hooks/useAuth"

const API_URL_MOCKAPI = "https://681b99d717018fe5057c284c.mockapi.io/pets"
const API_URL_DOGAPI = "https://dog.ceo/api/breeds/image/random/15"

const Dashboard = () => {
  const {user, logout} = useAuth()
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

        setPets(data1)
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
      <div className="bg-white md:p-10 rounded-2xl shadow-md w-full max-w-5xl">
        <h1 className="text-3xl md:text-3xl font-semibold text-center mb-6">Bem-vindo {user?.username}</h1>

        {loading && (
          <div className="text-lg md:text-2xl font-semibold text-center mb-4">Carregando os pets...</div>
        )}

        <PetCard
          pets={pets}
          petsImage={petsImage}
        />

        <div className="flex justify-center">
          <button
            onClick={logout}
            className="my-4 w-[200px] bg-blue-600 text-white py-1.5 px-2 rounded-lg hover:bg-blue-700 transition duration-300"
            type="submit"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard