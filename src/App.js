import { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoData, setVideoData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [Thumbnail, setThumbnail] = useState("");
  const [videoQuality, setvideoQuality] = useState("");
  const [videoDownloadURL, setvideoDownloadURL] = useState("");
  const [error, seterror] = useState(false);


  const getApidata = async () => {
    const options = {
      method: 'GET',
      url: 'https://social-media-video-downloader.p.rapidapi.com/smvd/get/all',
      params: {
        url: videoUrl,
        filename: 'download'
      },
      headers: {
        'X-RapidAPI-Key': '824dddee65msh76dbe040b14bfe4p12ab6ajsnc6532155d4f8',
        'X-RapidAPI-Host': 'social-media-video-downloader.p.rapidapi.com'
      }
    };

    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setVideoData(response.data);
      setThumbnail(response.data.picture);
      const [{ quality, link }] = response.data.links;
      setvideoQuality(quality);
      setvideoDownloadURL(link);
      setIsLoading(false);
    } catch (error) {
      seterror(true);
    }
  };





  return (


    <div className="container bg-gray-100">

      <a href='https://appopener.co.in/ig/8atgj29jc' target='_blank' rel='noreferrer' className='flex gap-2 flex-row justify-center items-center'>

        <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="" srcset="" />
        <h1 className='text-xl text-black font-semibold font-mono'>Made by Codeiwithbiki</h1>
      </a>
      <div className="content">
        <h1 className=" text-center p-2 mb-2 text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 inline-block text-transparent bg-clip-text">Instagram Reels Downloader</h1>

        <input
          type="text"
          value={videoUrl}
          className='p-2 rounded border-2 focus:outline-none border-blue-800'
          placeholder='Enter video url'
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button className="button" onClick={getApidata}>Download Video</button>
        {isLoading && <div className='text-black bg-transparent mt-5'>Loading...</div>}
        {videoData && !error && <div className='flex flex-row justify-between border-2 border-indigo-800 items-center w-10/12 p-5 m-5'>
          <img src={Thumbnail} alt="" srcset="" className='h-20 w-20' />
          <h3 className='text-black'>{videoQuality}</h3>
          <a href={videoDownloadURL} target='_blank' rel='noreferrer' className='bg-blue-800 text-white p-2 rounded'> Download </a>
        </div>}
        {error && <div className='p-5 m-5 text-white bg-red-600 rounded'>Something went wrong...</div>}
      </div>
    </div>
  );
}

export default App;
