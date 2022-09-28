import CardProfile from "../components/CardProfile";
import CardRepo from "../components/CardRepo";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen">
      <header className="w-full">
        <img
          src="./imgs/banner.png"
          className="flex w-full h-[250px] object-cover"
        />
      </header>
      <main className="max-w-[860px] w-full items-center">
        <CardProfile />
        <CardRepo />
      </main>
    </div>
  );
}
