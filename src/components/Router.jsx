import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Main from './pages/Main';



const Router = () => {

    return (
      <div className='router' >

        <BrowserRouter>
          <Routes >

            <Route path='/' element={<Welcome />} />
            <Route path='home'  element={<Main />} />
              
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default Router;