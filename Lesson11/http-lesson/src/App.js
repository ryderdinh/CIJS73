import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MusicList from './pages/MusicList';
import NotfoundPages from './pages/NotfoundPages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nhac-tre' element={<MusicList />} />
          <Route path='/nhac-trinh' element={<MusicList />} />
          <Route path='*' element={<NotfoundPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
  / : Home -> Nhạc Trẻ, Nhac Trinh
    /nhac-tre
      
    /nhac-trinh
*/
