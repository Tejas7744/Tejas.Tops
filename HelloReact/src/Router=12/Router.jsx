import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Navbar from "../Navbar";
import CarService from "./CarService";
import BikeService from "./BikeService";


// function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="" element={<Home />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/service/car" element={<CarService />} />
//           <Route path="/service/bike" element={<BikeService />} />
//           <Route path="/contact" Component={Contact} />
//           <Route path="*" Component={PageNotFound} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }


// export default Router;


//NOTE = We Cant Get Active Class In Link Tags So We Use Navlink 
function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          {/* to make nested route use opeaning and closing tag and wrap child route in them note: not use "/" in child like "/bike" => "bike" */}
          <Route path="/service">
            {/* index Route */}
            <Route index path="" element={<Service />} />
            <Route path="car" element={<CarService />} />
            <Route path="bike" element={<BikeService />} />
          </Route>
          <Route path="/contact" Component={Contact} />
          {/* To give Default Page It Will Show When User Give Invalid  Path  */}
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default Router;
