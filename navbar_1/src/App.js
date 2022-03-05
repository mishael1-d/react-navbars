import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Consulting from './components/pages/Consulting'
import Marketing from './components/pages/Marketing'
import Support from './components/pages/Support'
import ContactUs from './components/pages/ContactUs'
import SignUp from './components/pages/SignUp'
import Services from './components/pages/Services'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/services" exact element={<Services/>}/>
          <Route path="/consulting" exact element={<Consulting/>}/>
          <Route path="/marketing" exact element={<Marketing/>}/>
          <Route path="/support" exact element={<Support/>}/>
          <Route path="/contact-us" exact element={<ContactUs/>}/>
          <Route path="/sign-up" exact element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
