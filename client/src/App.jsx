import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Series from "./pages/series";
import Peliculas from "./pages/peliculas";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path='/series' element={<Series/>}></Route>
          <Route path='/peliculas' element={<Peliculas/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;