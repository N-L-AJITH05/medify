import { SnackbarProvider } from "notistack";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import Headline from "./Components/Headline/Headline";
import Contact from "./Components/Contacts/Contact";
import FindDoc from "./FindDoctor/FindDoc";
import MyBookings from "./Booking/MyBooking";
import Homepage from "./Home/Homepage";


function Medify()
{
  return(
    <div>
      <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
        <Headline />
        <Navbar/>
        <Outlet/>
        <Contact/>
        <Footer/>
      </SnackbarProvider>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Medify/>}>
          <Route path='' element={<Homepage />}/>
          <Route path='doctors' element={<FindDoc/>}/>
          <Route path='mybookings' element={<MyBookings/>}/>
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

