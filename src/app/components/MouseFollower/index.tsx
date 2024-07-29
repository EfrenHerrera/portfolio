"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

const MouseFollower = () => {
    const followerRef = useRef<any>(null);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            if (followerRef.current) {
                const followerWidth = followerRef.current.offsetWidth;
                const followerHeight = followerRef.current.offsetHeight;
                followerRef.current.style.left = `${e.pageX - followerWidth / 2}px`;
                followerRef.current.style.top = `${e.pageY - followerHeight / 2}px`;
                followerRef.current.style.opacity = 1;
            }
        };

        document.body.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div
            ref={followerRef}
            className={`${styles.follower} pointer-events-none fixed z-30 transition duration-300 flex items-center  justify-center`}
            style={{ background: 'radial-gradient(600px at center, rgba(29, 78, 216, 0.2), transparent 80%)' }}
        >
        </div>
    );

};

export default MouseFollower;
