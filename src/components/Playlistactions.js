
import React from 'react';
import {useState, useEffect} from 'react';
import {CLIENT_ID,CLIENT_SECRET} from './Api_key';

const Saveplaylist = async(tracklist, nameplaylist, accessToken) => {


    //console.log(accessToken)
   // http GET https://api.spotify.com/v1/me \
    //Authorization:'Bearer 1POdFZRZbvb...qqillRxMr2z'

    var searchParameters={
        method: 'GET',
        headers:{
        'Authorization': 'Bearer '+accessToken
        },
       }   

    
       try{
        //GET REQUEST SEARCH USING ARTIST ID
    
        var response = await fetch('https://api.spotify.com/v1/me', searchParameters)
        .then(response => response.json())
       // .then( data=>{return(data.tracks.items)})  
        console.log(response);
    
         
    
      }
      catch(error){
    
       console.log(error);
      }       
    
    
  

}

export  {Saveplaylist};