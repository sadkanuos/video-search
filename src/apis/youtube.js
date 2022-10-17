import axios from 'axios';

const KEY = 'AIzaSyBpJ6xoTRyoQRuCozckz_5UgoU8TxyfSwA';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 8, 
        key: KEY
    }
});

