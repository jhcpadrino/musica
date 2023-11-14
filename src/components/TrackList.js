import React from 'react';
import {useState, useEffect} from 'react';
import Track from './Track';

function TrackList ({results,addSongstoPlaylist}) {
  //console.log(results)
    return(
        <>
        <div>
            <h2>Resultados</h2>
            {
                   results.map((result,id)=>{
                    return <Track item={result} key={id} addSongstoPlaylist={addSongstoPlaylist} />
      
                  })
            }
        
        </div>
        
        
        
        
        </>



    );

    
}

export default TrackList;