'use client';

import React, { useState } from 'react';
import { useRef } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring, } from 'framer-motion'
import styles from '../styles/mainCard.module.scss';

import ModalVideo from './ModalVideo';



interface CardMainProps {
    src: string;
    index: number;
    poster: string;
    btnText: string;
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

const CardMain: React.FC<CardMainProps> = ({ src, poster, btnText, index, videos }) => {


    const [isLoaded, setIsLoaded] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const ref = useRef<HTMLButtonElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, {
        mass: 3,
        stiffness: 200,
        damping: 80,
    });
    const ySpring = useSpring(y, {
        mass: 3,
        stiffness: 100,
        damping: 80,
    });

    const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

    const handleMouseMove = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (!ref.current) return;

        const { height, width, left, top } = ref.current.getBoundingClientRect();

        x.set(e.clientX - (left + width / 2));
        y.set(e.clientY - (top + height / 2));
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const [modalVideoOpen, setModalVideoOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(index); // Controla el índice actual en el modal

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % videos.length;
            return nextIndex;
        });
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => {
            const prevIndexAdjusted = (prevIndex - 1 + videos.length) % videos.length;
            return prevIndexAdjusted;
        });
    };



    // Videos actual, siguiente y anterior basado en currentIndex
    const currentVideo = videos[currentIndex];
    const previousVideo = videos[(currentIndex - 1 + videos.length) % videos.length];
    const nextVideo = videos[(currentIndex + 1) % videos.length];

    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(false);
        setStartPosition({ x: e.clientX, y: e.clientY }); // Guarda la posición inicial
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        const distance = Math.sqrt(
            Math.pow(e.clientX - startPosition.x, 2) + Math.pow(e.clientY - startPosition.y, 2)
        );

        if (distance < 5) {
            setIsDragging(false); // Considera que fue un clic si el desplazamiento es menor a 5px
        } else {
            setIsDragging(true); // Marca como drag si el movimiento fue mayor a 5px
        }
    };

    const handleClick = () => {
        if (!isDragging) {
            setModalVideoOpen(true); // Solo abre el modal si no fue un drag
        }
    };

    return (
        <motion.div

            onHoverStart={() => {
                setShowOverlay(true);
            }}
            onHoverEnd={() => {
                setShowOverlay(false);
            }}
            onTouchStart={() => setShowOverlay(true)}
            onTouchEnd={() => {
                setTimeout(() => {
                    setShowOverlay(false);
                }, 2000);
            }} whileHover={{ scale: 1.05 }}
            transition={{ ease: [0.76, 0, 0.24, 1], type: "spring", stiffness: 200, damping: 20 }}
            className='relative overflow-hidden h-[var(--hmaincards)]  w-[var(--wmaincards)] bg-slate-400 rounded-xl cursor-pointer'>
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                poster={poster}
                onCanPlay={() => setIsLoaded(true)}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            {!isLoaded && (
                <img
                    src={poster}
                    draggable="false"
                    alt={"preload" + poster}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            )}

            <AnimatePresence>

                {showOverlay && (
                    <motion.div
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onClick={handleClick}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: { ease: [0.76, 0, 0.24, 1], duration: 0.4 },
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="relative z-10 flex justify-center items-center h-full">
                        <div className={`${styles.bgcard} absolute pointer-events-none h-full w-full`} />
                        <motion.button
                            ref={ref}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ transform }}
                            transition={{ ease: [0.76, 0, 0.24, 1], type: "spring", stiffness: 200, damping: 20 }}

                            className={`${styles.btncard} bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch]`}>
                            <span>{btnText}
                            </span>
                        </motion.button>
                    </motion.div>
                )}
                {modalVideoOpen && (

                    <ModalVideo
                        key={index}
                        isOpen={modalVideoOpen}
                        handleClose={() => setModalVideoOpen(!modalVideoOpen)}
                        currentVideo={currentVideo}
                        previousVideo={previousVideo}
                        nextVideo={nextVideo}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    >
                    </ModalVideo>

                )}

            </AnimatePresence>
        </motion.div>
    );
}

export default CardMain;
