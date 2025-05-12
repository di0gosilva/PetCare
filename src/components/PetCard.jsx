import { Link } from "react-router-dom"

const PetCard = ({ pets, petsImage, showButton = false }) => {
  return(
    // <div className="flex flex-wrap justify-center gap-10">
    //   {pets.map((pet, index) => (
    //     <div key={pet.name}>
    //       {petsImage[index] && (
    //         <img
    //           src={petsImage[index]}
    //           alt={`Imagem de ${pet.name}`}
    //           className="w-[200px] h-[160px] object-cover rounded"
    //         />
    //       )}
    //       <h3 className="text-center text-lg font-semibold mt-3 break-words">{pet.name}</h3>
    //       <h3 className="text-center">{pet.breed}</h3>
    //       <h3 className="text-center">{pet.age} anos</h3>

    //       {showButton && (
    //         <Link to={"/login"}>
    //           <button
    //           className="w-full mt-2 bg-blue-600 text-white py-1.5 px-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition duration-300"
    //           type="submit"
    //           >
    //             Entrar como Funcionário
    //           </button>
    //         </Link>
    //       )}
    //     </div>
    //   ))}
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {pets.map((pet, index) => (
        <div
          key={pet.name}
          className="w-[220px] flex flex-col items-center bg-white p-4 rounded shadow-md"
        >
          {petsImage[index] && (
            <img
              src={petsImage[index]}
              alt={`Imagem de ${pet.name}`}
              className="w-[200px] h-[160px] object-cover rounded"
            />
          )}

          <h3 className="text-center text-lg font-semibold mt-3 break-words">
            {pet.name}
          </h3>
          <h3 className="text-center">{pet.breed}</h3>
          <h3 className="text-center">{pet.age} anos</h3>

          {showButton && (
            <Link to="/login" className="w-full">
              <button
                className="my-2 w-full bg-blue-600 text-white py-1.5 px-2 rounded-lg hover:bg-blue-700 transition duration-300"
                type="submit"
              >
                Entrar como Funcionário
              </button>
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

export default PetCard