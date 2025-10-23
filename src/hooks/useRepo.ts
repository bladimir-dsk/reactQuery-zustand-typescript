import { useQuery } from "@tanstack/react-query";
import api from "../api/github";
import type { Repository } from "./types";

async function fetchRepos(){
    const {data} = await api.get<Repository[]>("/users/bladimir-dsk/repos");
    return data;
}

export function useFetchRepositories() {
    return useQuery({
      queryKey: ['repositories'],
      queryFn: fetchRepos,
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 3,
    });
  }
