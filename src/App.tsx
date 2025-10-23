import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepo";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading, error } = useFetchRepositories();
  const {favoriteReposIds} = useFavoriteReposStore();
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  console.log(data)

  return (
    <>
      <div>
        {data?.map((repo: any) => (

          <Card key={repo.id} repository={repo} isFavorite={favoriteReposIds.includes(repo.id)} />
        ))}
      </div>
    </>
  )
}

export default App
