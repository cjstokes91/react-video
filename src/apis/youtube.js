import axios from 'axios';

const KEY = "AIzaSyB0hHAJsvKO63P9R7UN1sxt73Fu3bUSg88";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
    }
});


