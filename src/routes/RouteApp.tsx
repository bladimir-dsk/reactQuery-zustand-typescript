import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import Header from "../components/Header";
import FavoriteScreen from "../screen/FavoriteScreen";

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/header" element={<Header />} />
        <Route path="/favorite" element={<FavoriteScreen />} />

        {/* enviar a otra runa que no defina */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
