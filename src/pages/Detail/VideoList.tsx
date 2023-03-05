import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useGetVideosQuery } from '../../services/MoviesAPI';
import { API_KEY, VideoType } from '../../types/movie';

const VideoList = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState<VideoType[]>([]);
    const { data, isLoading, isSuccess } = useGetVideosQuery({
        id,
        params: {
            api_key: API_KEY
        }
    })


    useEffect(() => {
        if (isSuccess) {
            setVideos(data.results.slice(0, 5));
        }
    }, [isSuccess])

    return (
        <>
            {
                videos.map((video, index) => (
                    <Video key={index} item={video} />
                ))
            }
        </>
    )
}

const Video = (props: any) => {

    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const height = iframeRef.current?.offsetWidth ? iframeRef.current?.offsetWidth * 9 / 16 + 'px' : '0px';
        iframeRef.current?.setAttribute('height', height);

    }, [])

    return (
        <div className="video">
            <div className="video__title">
                <h2>{props.item.name}</h2>
            </div>
            <iframe src={`https://www.youtube.com/embed/${props.item.key}`} ref={iframeRef} width="100%" title="video">
            </iframe>
        </div>
    )
}

export default VideoList