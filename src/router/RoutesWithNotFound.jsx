import { Route, Routes } from "react-router-dom";

export const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
        { children }
        
        <Route path="*" element={ <h1>No se encontro ningun resultado</h1> }  />
    </Routes>
  )
}

export default RoutesWithNotFound;