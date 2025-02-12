import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import Main from "./Components/Main/Main";
import SingleProoduct from "./Components/FilteredProducts/SingleProoduct";
// import { useSelector,  } from 'react-redux';
import Footer from "./Components/Footer";
// import LoginPage from "./Components/Login";

function App() {

  // const user = useSelector((state) => state.user?.user || {});
  // const authUser = useSelector((state) => state.user?.authUSer || false);
  
  // console.log(user,'user');
  // console.log(authUser,'authUser is this');
  

    
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
        <Route path="/filteredProducts/:type/:id"element={<SingleProoduct />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
