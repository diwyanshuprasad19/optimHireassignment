import { createContext, useState} from 'react';
import './App.css';
import ProductDescription from './Component/Description/ProductDescription';
import Home from './Component/Home/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';



export const CRUDContext = createContext();

function App() {

  const [pop,setpop] = useState(false);
  const [option,setoption] = useState('True');


  return (
 <>

<CRUDContext.Provider value ={{pop,setpop,option,setoption}}>
<Router>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/Description/:id" element={<ProductDescription/>} />


</Routes>
</Router>
</CRUDContext.Provider>
 
 </>
  );
}

export default App;
