import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path=":id" element={<Details />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
