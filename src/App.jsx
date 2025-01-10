import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Hall from "./pages/Hall"
import Door_1 from "./pages/Door_1"
import Door_2 from "./pages/Door_2"
import Door_3 from "./pages/Door_3"
import MainRoom_1 from "./pages/MainRoom_1"
import MainRoom_2 from "./pages/MainRoom_2"
import MainRoom_3 from "./pages/MainRoom_3"
import Divan_1 from "./pages/Divan_1"
import Divan_2 from "./pages/Divan_2"
import Divan_3 from "./pages/Divan_3"

const App = () => {

  return(
    <div>

   <NavBar />

   <Routes>
    
    <Route exact path="/" element={<Home />} />
    <Route exact path="/inside" element={<Hall />} />
    <Route exact path="/inside/door1" element={<Door_1 />} />
    <Route exact path="/inside/door2" element={<Door_2 />} />
    <Route exact path="/inside/door3" element={<Door_3 />} />
    <Route exact path="/inside/mainroom1" element={<MainRoom_1 />} />
    <Route exact path="/inside/mainroom2" element={<MainRoom_2 />} />
    <Route exact path="/inside/mainroom3" element={<MainRoom_3 />} />
    <Route exact path="/inside/mainroom/divan1" element={<Divan_1/>}/>
    <Route exact path="/inside/mainroom/divan2" element={<Divan_2/>}/>
    <Route exact path="/inside/mainroom/divan3" element={<Divan_3/>}/>



   </Routes>
   
    </div>
  )
}

export default App