import React from 'react'
import './skeleton-loading.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoading = () => {
    return (
        <div className="skeleton">
            {Array(10).fill(0).map((index) => (
                <div key={index}>
                    <Skeleton className="card loading" />
                    <Skeleton style={{ height: '14px', marginTop: '1rem' }} />
                </div>
            ))}
        </div>
    )
}

export default SkeletonLoading