import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import RepoItem from "./pages/repoItem";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo" element={<RepoItem />} />
      </Routes>
    </BrowserRouter>
  );
}
