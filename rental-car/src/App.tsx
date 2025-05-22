
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/catalog" element={<CatalogPage />} />

      <Route path="/catalog/:id" element={<CarDetailsPage />} />

      <Route path="/favorites" element={<FavoritesPage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
