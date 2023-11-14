import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { useState,useEffect } from 'react';
import './css/App.css';
import './css/searchBar.css';
import {Saveplaylist} from './components/Playlistactions';
import './css/track.css';
import TrackList from './components/TrackList';
import Playlist from './components/Playlist';

function App() {
const [results, setResults]=useState([]);
const [songs,addSongs]=useState([]);
const [playlistName,setPlaylistName]= useState('');
const [accessToken, setAccessToken]=useState('');

const addSongstoPlaylist= (song) =>{

   const arr = songs.filter((r) => r.id === song.id);
   if (!arr.length>0){
  addSongs((songs) => [song, ...songs])
  }
}
const removeFromPlaylist =(result) =>{
  
  addSongs(songs.filter((r) => r.id !== result.id));
}

const namingPlaylist =(text)=>{
   setPlaylistName(text)
  // console.log('Dentro: '+ text);
}

const saveplaylist =(songslist) => {
  //console.log('Dentro: '+ playlistName);
  //console.log(songslist);
  //console.log(accessToken);
  Saveplaylist(songslist, playlistName, accessToken);
 // console.log('Dentro: '+ text);
}


 
  return (
  <>
  <div className='headerTop'>
  <h1>Musica -- Your Favorite Music</h1>
  </div>
  <div className='searchDiv'>
  <SearchBar setResults={setResults} accessToken={accessToken} setAccessToken={setAccessToken}/>
  </div>
  <div className='searchDivS'> 
  <TrackList results={results} addSongstoPlaylist={addSongstoPlaylist} removeFromPlaylist={removeFromPlaylist}/>
  </div>
  
  <Playlist songs={songs} playlistName={playlistName} removeFromPlaylist={removeFromPlaylist} namingPlaylist={namingPlaylist} saveplaylist={saveplaylist}/>
  
  
  </>
  );
}

export default App;
