import axios from 'axios';
import { useEffect, useState } from 'react';
import '../assets/css/MusicList.css';
import MusicControl from '../components/MusicControl';

function MusicList() {
  const [title, setTitle] = useState('');
  const [musics, setMusics] = useState([]);
  const [musicLink, setMusicLink] = useState('');

  const getMusics = async (pathname) => {
    try {
      const response = await axios.get(
        'https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST'
      );

      if (pathname === '/nhac-tre') {
        setTitle('Nhac Tre');
        setMusics(response.data.songs.top100_VN[0].songs);
      }

      if (pathname === '/nhac-trinh') {
        setTitle('Nhac Trinh');
        setMusics(response.data.songs.top100_VN[2].songs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeMusic = (link) => {
    setMusicLink(link);
  };

  useEffect(() => {
    console.log(window.location.pathname);
    getMusics(window.location.pathname);
  }, []);

  return (
    <div className='music-container'>
      <h1>{title}</h1>
      <ul className='music-list'>
        {musics.map((item) => (
          <li
            key={item.url}
            className='music-item'
            onClick={() => {
              changeMusic(item.music);
            }}
          >
            <img src={item.avatar} alt='' />
            <p>Title: {item.title}</p>
          </li>
        ))}
      </ul>
      <MusicControl link={musicLink} />
    </div>
  );
}

export default MusicList;
