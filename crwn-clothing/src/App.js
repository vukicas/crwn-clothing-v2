import Home from './routes/home/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

const Shop = () => {
  return(
    <h1>I am a shop page</h1>
  );
};

const App = () => {
  return(
    <Routes>
      <Route path='/' element ={<Navigation/>}>
        <Route index element = {<Home/>} ></Route>
        <Route path = 'shop' element = {<Shop/>} ></Route>
        <Route path = 'auth' element = {<Authentication/>} ></Route>
      </Route>      
    </Routes>
  );
};

export default App;
