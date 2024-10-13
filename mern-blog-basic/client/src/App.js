import Header from './components/header';
import { Route, Routes } from 'react-router-dom'
import AddBlog from './pages/add-blog';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add-blog' element={<AddBlog />} />
      </Routes>
    </div>
  );
}

export default App;
