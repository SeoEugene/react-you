import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

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
                {videos.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.id.videoId}`}
                                style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
                            </Link>
                        </div>
                        <div className="video__info">
                            <div className="title">
                                <Link to={`/video/${video.id.videoId}`}> {video.snippet.title.replace(/&#39;|&quot;/g, '')}</Link>
                            </div>
                            <div className="info">
                                <Link to={`/channel/${video.snippet.channelId}`} className='author'>{video.snippet.hannelId}</Link>
                                <span className='date'>{formatDate (video.snippet.publishTime)}</span>
                            </div>
                        </div>
                    </div>                
                ))}
            </div>
        </section>
    )
}

export default Search