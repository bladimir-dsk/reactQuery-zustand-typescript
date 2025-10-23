import type { Repository } from '../hooks/types'
import { useFavoriteReposStore } from '../store/favoriteRepos'

type CardProps = {
    repository: Repository,
    isFavorite: boolean,
    
}

export default function Card({repository, isFavorite}: CardProps) {

    const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo)
    const removeFavoriteRepo = useFavoriteReposStore(state => state.removeFavoriteRepo)

    const toggleFavoriteRepo = () => {
        if(isFavorite){
            removeFavoriteRepo(repository.id)
            return
        }else{
            addFavoriteRepo(repository.id)
            return
        }
    } 


  return (
    <div className="p-4 border border-gray-200 rounded bg-red-200 hover:bg-red-300 transition-colors duration-200 flex justify-between">
        <div>
            <h1>{repository.name}</h1>
            <p className="text-gray-500">{repository.description}</p>
            <p className="text-gray-500">Lenguaje: {repository.language}</p>
            <p className="text-gray-500">Clone URL: {repository.clone_url}</p>

            

       

        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 " onClick={toggleFavoriteRepo}>
            {
                isFavorite ? '⭐' : '☆'
            }
        </button>
    </div>
  )
}
