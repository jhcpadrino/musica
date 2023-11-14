import React from 'react';


function Track ({item,addSongstoPlaylist}) {

   /* const Song=[{
        id:item.id,
        name:item.name,
        album:item.album.name

   }]
   */

   
    return(
        <>
        <div className="containerTrack">
            <h3 >{item.name}</h3>
            <div className="track">   
               <p>Album Name: {item.album.name}</p>
               <button type='submit' onClick={()=> {addSongstoPlaylist(item)}}>Add song</button>
            </div>
        </div>

      </>
    );



}

export default Track;