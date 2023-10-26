import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [videoComment, setVideoComment] = useState([]);
    // const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet, statistics&id=${videoId}`)
            .then((data) => 
            setVideoDetail(data.items[0]));
            console.log(setVideoDetail);

        // fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
        // .then((data) => {
        //     setComments(data.items);
        //     console.log(data)
        //     })



        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
        .then((data) => 
            setVideoComment(data.items));
            console.log(setVideoComment);
        
    }, [videoId]);



    return (
        <section id='videoViewPage'>
            {videoDetail && (
                <div className='video__wrap'>
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width= '100%'
                                height='100%'
                                style= {{position: 'absolute', top:0, left:0}}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>
                                {videoDetail.snippet.title}
                            </h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`} className='author'>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className='count'>
                                    <BsPlay /><span className='view'>재생 {videoDetail.statistics.viewCount}</span>
                                    <AiOutlineHeart /><span className='like'>좋아요 {videoDetail.statistics.likeCount}</span>
                                    <BiCommentDetail /><span className='comment'>댓글 {videoDetail.statistics.commentCount}</span>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                    <div className='playlist'>
                        {/* {comments.map((comment, key) => (
                                <div className="comment__all" key={key}>
                                    <div className="comment__nickname" key={key}>
                                        {comment.snippet.topLevelComment.snippet.authorDisplayName}
                                    </div>
                                    <div className="comment__cont" key={key}>
                                        {comment.snippet.topLevelComment.snippet.textOriginal}
                                    </div>
                                </div>
                            ))} */}

                        <div>
                            {videoComment.map((comment) => (
                                <>
                                    <div class="commentName">
                                        {comment.snippet.topLevelComment.snippet.authorDisplayName}
                                    </div>
                                    <div class="commentbox">
                                        {comment.snippet.topLevelComment.snippet.textOriginal}
                                    </div>
                                </>
                            )
                            )}
                        </div>
                    </div>

                </div>

            )}
        </section>
    )
}

export default Video