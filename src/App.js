import Home from './Components/Home';
import PlantDetail from "./Components/PlantDetail"
import { Route,Routes ,Navigate} from 'react-router-dom';

function App() {
  return (
    <div>
      
    <Routes>
      <Route exact path="#/" element={<Home/>} />
      <Route exact path="#/plant-detail" element={<PlantDetail/>} />
      <Route path="*" element={<Navigate replace to="#/" />} />  
    </Routes>
      
    </div>
  );

}

export default App;
