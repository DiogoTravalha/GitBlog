import axios from "axios";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import SearchForm from "./SearchForm";
import { NavLink, useNavigate } from "react-router-dom";

interface CardProfileUserRepo {
  created_at: Date;
  name: string;
  description: string;
  url: string;
}

export default function CardRepo() {
  const [repos, setRepos] = useState<CardProfileUserRepo[]>([]);
  const [reposSearch, setReposSearch] = useState<CardProfileUserRepo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios("https://api.github.com/users/DiogoTravalha/repos").then((res) => {
      const filter = res.data.filter(
        (doc: any) => doc.name !== "DiogoTravalha"
      );
      console.log(res.data);
      setRepos(filter);
      setReposSearch(filter);
    });
  }, []);

  function handleSearchRepos(data: string) {
    const filter = repos.filter((item) => {
      return item.name.toLowerCase().includes(data.toLowerCase());
    });
    if (filter.length === 0) {
      setReposSearch(repos);
    } else {
      setReposSearch(filter);
    }
  }

  return (
    <>
      <SearchForm num={repos.length} handleSearchRepos={handleSearchRepos} />
      <div className="mt-11 grid grid-cols-2 gap-2 overflow-auto">
        {reposSearch.map((repo) => (
          <div
            onClick={() => navigate("/repo", { state: repo })}
            key={repo.name}
            className="flex flex-col bg-[#112131] h-52 flex-1 rounded-lg p-8 m-2 justify-between cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <strong className="text-white text-lg font-extrabold">
                {repo.name}
              </strong>
              <span className="text-[#7B96B2] text-sm">
                {formatDistanceToNow(new Date(repo.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <p className="text-[#7B96B2] text-md">{repo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
