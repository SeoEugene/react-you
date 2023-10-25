import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import VideoSearch from '../components/video/VideoSearch';

const Search = () => {
    const {searchId} = useParams();
    const [videos, setVideo] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?type=video&part=snippet&q=${searchId}`)
            .then((data) => {
                setVideo(data.items);
                console.log(data);
            })
    }, [searchId]);

    return (
        <section id="searchPage">
            <div className="search__header">
                <h2>{searchId}</h2>
                <Link to ={`/channel/UCaO6TYtlC8U5ttz62hTrZgg`}>바로가기</Link>
            </div>
            <div className="video__inner search">
                <VideoSearch Videos={videos}/>
            </div>
        </section>
    )
}

export default Search