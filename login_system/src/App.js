import './App.scss';
import Login from './components/Pages/Login';
import Registration from './components/Pages/Registration';
import Home from './components/Pages/Home';

import {BrowserRouter,Switch,Route} from 'react-router-dom';

function App()
 {
  return   (

          <BrowserRouter>
            <Switch>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/Registration" element={<Registration/>}/>
            </Switch>
          </BrowserRouter>
     
  );
}

export default App;
