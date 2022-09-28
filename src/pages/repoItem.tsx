import { useLocation } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import CardProfile from "../components/CardProfile";
import CardRepo from "../components/CardRepo";

export default function RepoItem() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center w-screen">
      <header className="w-full">
        <img
          src="./imgs/banner.png"
          className="flex w-full h-[250px] object-cover"
        />
      </header>
      <main className="max-w-[860px] w-full items-center">
        <CardInfo data={location.state} />
      </main>
    </div>
  );
}
