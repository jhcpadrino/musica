import React from 'react';
import {useState, useEffect} from 'react';
import {CLIENT_ID,CLIENT_SECRET} from './Api_key';

function SearchBar({setResults, accessToken,setAccessToken}) {

const [input,setInput]= useState('');



useEffect(() => {
// API ACCESS TOKEN
var authParameter={
    method: 'POST',
    headers:{
    'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:'grant_type=client_credentials&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET
}
fetch('https://accounts.spotify.com/api/token',authParameter)
.then(result => result.json())
.then(data => setAccessToken(data.access_token))

},[]);



const searchPlay= async() => {

 
   var searchParameters={
    method: 'GET',
    headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+accessToken
    },
   }   

   try{
    //GET REQUEST SEARCH USING ARTIST ID

    var response = await fetch('https://api.spotify.com/v1/search?q='+input+'&type=track', searchParameters)
    .then(response => response.json())
    .then( data=>{return(data.tracks.items)})  
    setResults(response);

     

  }
  catch(error){

   console.log(error);
  }       


}


return(
    <>
      <div className='searchbar'>
      <input  placeholder='Input your favorite song' value= {input} type='text' id='input' name='input' onChange={(e)=> setInput(e.target.value)}/>    
      <button type='submit' onClick={searchPlay}> Search</button>
      </div>
    </>


);

}

export default SearchBar;