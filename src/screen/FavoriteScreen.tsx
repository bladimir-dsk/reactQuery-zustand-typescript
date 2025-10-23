import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { useFetchRepositories } from "../hooks/useRepo";
import { useFavoriteReposStore } from "../store/favoriteRepos";

export default function FavoriteScreen() {
  const { data, isLoading, error } = useFetchRepositories();
  const { favoriteReposIds } = useFavoriteReposStore();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const favoriteRepos =
    data?.filter((repo: any) => favoriteReposIds.includes(repo.id)) || [];
  return (
    <div>
      <Header />

      <div>
        {favoriteRepos?.length > 0 ? (
          favoriteRepos.map((repo: any) => (
            <Card
              key={repo.id}
              repository={repo}
              isFavorite={true} // Siempre es true porque ya están filtrados
            />
          ))
        ) : (
          <div>No hay repositorios favoritos</div>
        )}
      </div>
    </div>
  );
}
