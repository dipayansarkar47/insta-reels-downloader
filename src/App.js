import {  useState } from 'react';
import './App.css';
import axios from 'axios'
import Loader from './loader'

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoData, setVideoData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  const getApidata = async () => {
    const options = {
      method: 'GET',
      url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
      params: {
        url: videoUrl
      },
      headers: {
        'X-RapidAPI-Key': '824dddee65msh76dbe040b14bfe4p12ab6ajsnc6532155d4f8',
        'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setVideoData(response.data.media);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDownload = () => {
    // You can add logic for downloading the video here
    // For example, you can create a link element with a download attribute
    // and set its href to the video URL
    setIsLoading(true);
    const downloadLink = document.createElement('a');
    downloadLink.href = videoData;
    downloadLink.download = 'downloaded_video.mp4';
    downloadLink.click();
  };
  


  return (
    <div className="container">
      <video className="background-video" loop muted autoPlay>
        <source src="https://res.cloudinary.com/deafnuhyi/video/upload/v1691920847/Untitled_cjlqzp.mov" type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="heading">Instagram Reel Video Downloader</h1>
        
        <input
          type="text"
          value={videoUrl}
          className='p-2 rounded'
          placeholder='Enter video url'
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      <button className="button" onClick={getApidata}>Download Video</button>
      {isLoading ? <div><Loader/></div> : (videoData && (
        <div className='m-2'>
          <video crossorigin='anonymous' controls width="400">
            <source crossorigin='anonymous' src={videoData} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleDownload}>Download Video</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
