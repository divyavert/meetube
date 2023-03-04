import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
  
const options = {
  
    url: BASE_URL,   params: {maxResults: 50,},
    headers: {
      'X-RapidAPI-Key': 'a3744130e1msh48e09671b602089p1b435ejsn0c12a1260716',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com', },
};

export const FetchFromAPI = async (url)=>{
   const {data} =  await axios.get(`${BASE_URL}/${url}`,options)
   return data;
}