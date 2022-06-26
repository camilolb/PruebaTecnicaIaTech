import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviePresenter } from '../../movies/presentation';

export function MovieNavigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MoviePresenter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MovieNavigation;
