import axios from "axios";
import { ArrowSquareOut } from "phosphor-react";
import { useEffect, useState } from "react";

interface CardProfileUser {
  avatar_url: string;
  bio: string;
  followers: number;
  name: string;
}

export default function CardProfile() {
  const [user, setUser] = useState<CardProfileUser>();

  useEffect(() => {
    axios("https://api.github.com/users/DiogoTravalha").then((res) => {
      const { avatar_url, bio, followers, name } = res.data;
      setUser({ avatar_url, bio, followers, name });
    });
  }, []);

  return (
    <div className="flex w-full bg-[#0B1B2B] h-52 rounded-lg p-8 gap-8 -mt-20">
      <div className="flex w-[144px]">
        <img
          src="https://avatars.githubusercontent.com/u/49844220?s=400&u=b179f49e48e6004eb46feb4b7e6ed1322f2742b6&v=4"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col w-full text-white items-center">
        <div className="flex w-full justify-between items-center text-[#E7EDF4]">
          <strong>{user?.name}</strong>
          <a
            href="https://github.com/DiogoTravalha"
            target="_black"
            className="flex gap-2"
          >
            <p className="gap-2 items-center text-[#3294F8] font-black m-0">
              Github
            </p>
            <ArrowSquareOut size={20} color="#3294F8" />
          </a>
        </div>
        <div className="w-full flex-1 flex items-center justify-start text-sm font-light text-[#AFC2D4]">
          <p>{user?.bio}</p>
        </div>
        <div className="flex w-full gap-6 text-sm text-[#A2B8CD]">
          <span className="flex h-5 gap-2 ">
            <img src="./imgs/icon.svg" className="w-5" />
            <p>diogotravalha</p>
          </span>
          <span className="flex h-5 w-5 gap-2">
            <img src="./imgs/user.svg" className="w-5" />
            <p>{user?.followers}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
