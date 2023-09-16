
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.page';
import Layout from './components/Layout.page';
import NoMatch from './components/NoMatch.page';
import RQSuperheros from './components/RQSuperheros.page';
import Superheros from './components/Superheros.page';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="super-heros" element={<Superheros />} />
          <Route path="rq-super-heros" element={<RQSuperheros />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
