import axios from 'axios';

const KEY = 'AIzaSyC4JDYgLlOIJGpJXMXH2Oz4WjjHx0w18Ks';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});