import {BrowserRouter, Routes, Route, redirect} from "react-router-dom"
import { Redirect } from "./pages/redirect";
import { Create } from "./pages/create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />}/>
          <Route path="u/:id" element={<Redirect />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
