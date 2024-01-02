import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
  params: {
    url: 'https://www.instagram.com/reel/CxgAOUUR8R6/'
  },
  headers: {
    'X-RapidAPI-Key': '824dddee65msh76dbe040b14bfe4p12ab6ajsnc6532155d4f8',
    'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}