'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import ModalVideo from './ModalVideo';

interface CardMainProps {
    src: string;
    indexCardWork: number;
    poster: string;
    btnText: string;
    linkcorto: string;
    linkLargo: string;
    videos: {
        src: string;
        poster: string;
        btnText: string;
        index: number;
        linkVideoLargo: string;
        linkcorto: string;
        Titulo: string;
        Label: string;
        credits: {
            title: string;
            value: string;
        }[];
    }[];
}

const CardWork: React.FC<CardMainProps> = ({ indexCardWork, videos, linkcorto }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    const [modalVideoOpen, setModalVideoOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(indexCardWork); // Controla el índice actual en el modal
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };
    const handleNext = () => {
        setIsPlaying(false); // Detiene el video actual
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % videos.length;
            setIsPlaying(true); // Resetea el estado a true al cambiar de video
            return nextIndex;
        });
    };

    const handlePrevious = () => {
        setIsPlaying(false); // Detiene el video actual
        setCurrentIndex((prevIndex) => {
            const prevIndexAdjusted = (prevIndex - 1 + videos.length) % videos.length;
            setIsPlaying(true); // Resetea el estado a true al cambiar de video
            return prevIndexAdjusted;
        });
    };



    // Videos actual, siguiente y anterior basado en currentIndex
    const currentVideo = videos[currentIndex];
    const previousVideo = videos[(currentIndex - 1 + videos.length) % videos.length];
    const nextVideo = videos[(currentIndex + 1) % videos.length];


    const handleClick = () => {
        setModalVideoOpen(true);
    };

    if (!isClient) return null;

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], type: "spring", stiffness: 200, damping: 20 }}
            className='relative overflow-hidden h-full  w-[100px] bg-slate-400 rounded-xl cursor-pointer'>
         
            <ReactPlayer
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-100"
                pip={false}
                loop={true}
                playing={true}
                url={linkcorto}
                autoPlay={true}
                volume={0}
                muted={true}
                width='100%'
                height='100%'
            />



            <AnimatePresence>
                <div
                    onClick={handleClick}
                    className="relative z-10 flex justify-center items-center h-full">
                </div>

                {modalVideoOpen && (

                    <ModalVideo
                        key={indexCardWork}
                        isOpen={modalVideoOpen}
                        handleClose={() => setModalVideoOpen(!modalVideoOpen)}
                        currentVideo={currentVideo}
                        previousVideo={previousVideo}
                        nextVideo={nextVideo}
                        isPlaying={isPlaying}
                        handlePlayPause={handlePlayPause}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    >
                    </ModalVideo>

                )}

            </AnimatePresence>
        </motion.div>
    );
}

export default CardWork;
