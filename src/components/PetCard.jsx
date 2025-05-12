import { Link } from "react-router-dom"

const PetCard = ({ pets, petsImage }) => {
  return(
    <div className="flex flex-wrap justify-center gap-10">
      {pets.map((pet, index) => (
        <div key={pet.name}>
          {petsImage[index] && (
            <img
              src={petsImage[index]}
              alt={`Imagem de ${pet.name}`}
              className="w-full h-40 object-cover rounded"
            />
          )}
          <h3 className="text-center text-lg font-semibold mt-3">{pet.name}</h3>
          <h3 className="text-center">{pet.breed}</h3>
          <h3 className="text-center">{pet.age} anos</h3>

          <Link to={"/login"}>
            <button
            className="w-full bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition duration-300"
            type="submit"
            >
              Entrar como Funcionário
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PetCard