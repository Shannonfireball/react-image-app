import axios from "axios";


export const GetDataPhotos = async () => {
    const axiosOptions = {
        method:'GET',
        headers:{ 'content-type': 'application/json' },
        url:`https://api.unsplash.com/photos?client_id=TQH9LXXwePIysJ7SiAEoXFiwnN1l80OoSEz0M8FIUzs`
    };

    try {
        const {data} = await axios(axiosOptions);
        return data;
    } catch (error) {
        console.log(error)
    }
    };


export const GetSearch = async (search:any) => {
    const axiosOptions = {
        method:'GET',
        headers:{ 'content-type': 'application/json' },
        url:`https://api.unsplash.com/search/photos?client_id=TQH9LXXwePIysJ7SiAEoXFiwnN1l80OoSEz0M8FIUzs&query=${search}`
    };

    try {
        const {data} = await axios(axiosOptions);
        return data;
    } catch (error) {
        console.log(error)
    }
    };    