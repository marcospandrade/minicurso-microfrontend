import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Template } from './components/Template';
import { Reports } from './pages/Reports';
import { Home } from './pages/Home';


export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Template />}>
          <Route index element={<Home />}></Route>
          <Route path='/reports' element={<Reports />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
