import Card from "../components/Card";
import Header from "../components/Header";
import { useFetchRepositories } from "../hooks/useRepo";
import { useFavoriteReposStore } from "../store/favoriteRepos";

export default function HomeScreen() {
  const { data, isLoading, error } = useFetchRepositories();
  const { favoriteReposIds } = useFavoriteReposStore();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div>
      <Header />
      {data?.map((repo: any) => (
        <Card
          key={repo.id}
          repository={repo}
          isFavorite={favoriteReposIds.includes(repo.id)}
        />
      ))}
    </div>
  );
}
