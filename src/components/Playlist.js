import React from 'react';
import {useState, useEffect} from 'react';
import '../css/playlist.css';


function Playlist ({songs,playlistName,removeFromPlaylist,namingPlaylist,saveplaylist}) {

  
     const uri= songs.map(song =>{return song.uri})

   

 // console.log(uri);
    return(
        <>
        <div className='playlist'>
            <h2>Playlist</h2>
            <input type='text' placeholder='Insert playlist name' value={playlistName} onChange={(e)=>namingPlaylist(e.target.value)}/>  
            {
           
              
              songs.map((song)=>{
                return(
                <>
                <div  className="containerTrack1">
                <h3 >{song.name}</h3>
                <div className="track1">   
               <p>Album Name: {song.album.name}</p>
               <button type='submit' onClick={()=> {removeFromPlaylist(song) }}>Remove song</button>
               </div>
               </div>

              
              </>
              )
  
              })
            }
            <button className='save' onClick={(e) => { saveplaylist(songs)}}>Save To Spotify</button> 
        </div>

        </>
    );


}

export default Playlist;