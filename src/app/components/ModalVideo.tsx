'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react'
import ReactPortal from './ReactPortal'
import styles from '../styles/modalvideo.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import { IoClose, IoPlayOutline, IoPause, IoPlaySkipForward, IoPlaySkipBack, IoVolumeMute, IoVolumeHigh } from "react-icons/io5";



interface ModalVideoProps {
    isOpen: boolean;
    handleClose: () => void;
    currentVideo: {
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
    };
    previousVideo: {
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
    };
    nextVideo: {
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
    };
    onNext: () => void;
    onPrevious: () => void;
}


const dropIn = {
    hidden: {
        y: "100vh",
    },
    visible: {
        y: "0",
        transition: {
            duration: 0.66,
            ease: [0.76, 0, 0.24, 1]
        },
    },
    exit: {
        y: "100vh",
        transition: {
            duration: 0.66,
            ease: [0.76, 0, 0.24, 1]
        },
    },
};



const ModalVideo = ({
    isOpen,
    handleClose,
    currentVideo,
    previousVideo,
    nextVideo,
    onNext,
    onPrevious,
}: ModalVideoProps) => {

    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const [isCreditsVisible, setCreditsVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [hoverTime, setHoverTime] = useState<number | null>(null);

    const overlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const playerRef = useRef<ReactPlayer>(null);

    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Close with Escape key (always executed)
    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
    }, [handleClose]);

    //QuitarScroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return (): void => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Reset overlay visibility logic
    const resetOverlayVisibility = useCallback(() => {
        if (!isPlaying) {
            setIsOverlayVisible(true);
            if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
        } else {
            setIsOverlayVisible(true);
            if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
            overlayTimeoutRef.current = setTimeout(() => setIsOverlayVisible(false), 2000);
        }
    }, [isPlaying]);

    // Handle mouse move to show/hide overlay
    useEffect(() => {
        resetOverlayVisibility();
    }, [isPlaying, resetOverlayVisibility]);

    useEffect(() => {
        const handleMouseMove = () => {
            if (isPlaying) resetOverlayVisibility();
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isPlaying, resetOverlayVisibility]);

    // Show credits overlay
    const handleCreditsClick = () => {
        setCreditsVisible(true);
        setIsOverlayVisible(false);
    };

    const handleCloseCredits = () => {
        setCreditsVisible(false);
        setIsOverlayVisible(true);
    };

    // Mute/unmute control
    const handleMuteUnmute = () => {
        setIsMuted((prev) => !prev);
    };

    // Update time tracking (current time and duration)
    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current) {
                const time = playerRef.current.getCurrentTime();
                setCurrentTime(time || 0);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Get video duration when ready
    const handleReady = () => {
        if (playerRef.current) {
            const videoDuration = playerRef.current.getDuration();
            setDuration(videoDuration || 0);
        }
    };

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    // Progress bar functionality
    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (playerRef.current && duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickPosition = clickX / rect.width;
            const newTime = clickPosition * duration;

            playerRef.current.seekTo(newTime, 'seconds');
            setCurrentTime(newTime);
        }
    };

    const handleMouseMovePB = (e: React.MouseEvent<HTMLDivElement>) => {
        if (duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const hoverX = e.clientX - rect.left;
            const hoverPosition = hoverX / rect.width;
            setHoverTime(hoverPosition * duration);
        }
    };

    const handleMouseLeavePB = () => {
        setHoverTime(null);
    };


    return (
        <ReactPortal wrapperId='react-portal-modal-container'>
            <>
             <div className={styles.antibug}>
                
             </div>
                <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={styles.modal}>

                    <div className={styles.contenedorVideo}>
                        <ReactPlayer
                            ref={playerRef}
                            key={currentVideo.linkVideoLargo} // Genera un key único
                            className={styles.reactplayer}
                            playing={isPlaying}
                            pip={false}
                            loop={true}
                            volume={1}
                            muted={isMuted}
                            url={currentVideo.linkVideoLargo}
                            onStart={handleReady}
                            onReady={handleReady}
                            width='100%'
                            height='100%'
                            playsinline={true}
                        />
                    </div>
                    <motion.button
                         onClick={() => {
                            handleClose();
                            setIsPlaying(false);
                          }}
                        whileHover={{ rotate: 180 }}
                        whileTap={{ scale: 0.8, y: 2 }}
                        className={styles.closebtn}>
                        <IoClose />
                    </motion.button>

                    <motion.div

                        initial={{ opacity: 1 }}
                        animate={{ opacity: isOverlayVisible ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles.contenedorOverlay}
                    >


                        {/* Botón de Play/Pausa */}
                        <div className={styles.buttonContainer}>
                            <motion.button
                                onClick={handlePlayPause}
                                whileTap={{ scale: 0.8, translateY: 2 }}
                                className={styles.playpausebtn}>
                                {isPlaying ? <IoPause /> : <IoPlayOutline />}
                            </motion.button>
                        </div>

                        {/* Botón de Mute/Unmute */}
                        <div className={styles.buttonContainerMute}>
                            <motion.button
                                onClick={handleMuteUnmute}
                                whileTap={{ scale: 0.8, translateY: 2 }}
                                className={styles.muteunmutebtn}
                            >
                                {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
                            </motion.button>
                        </div>

                        {/* Botón de Pantalla Completa 
                        <div className={styles.buttonContainerFS}>
                            <motion.button
                                onClick={handleFullScreenToggle}
                                whileTap={{ scale: 0.8, translateY: 2 }}
                                className={styles.fullscreenbtn}
                            >
                                {isFullScreen ? <IoContract /> : <IoExpand />}
                            </motion.button>
                        </div>*/}

                        <div className={styles.textNumbers}>
                            {formatTime(currentTime)} - {duration > 0 ? formatTime(duration) : '00:00'}
                        </div>


                        {/* Barra de progreso */}
                        <div
                            onClick={handleProgressClick}
                            onMouseMove={handleMouseMovePB}
                            onMouseLeave={handleMouseLeavePB}
                            className={styles.containerBarra}
                        >
                            {/* Barra de progreso llena */}
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{
                                    width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' // Asegúrate de que duration no sea 0
                                }}
                                exit={{ width: '0%' }}
                                transition={{ ease: "linear", duration: 0.2 }}
                                style={{
                                    position: 'absolute',
                                    height: '100%',
                                    backgroundColor: '#fff',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    zIndex: '5'
                                }}
                            ></motion.div>

                            {/* Barra de vista previa  */}
                            {/* Tooltip  */}
                            <AnimatePresence>
                                {hoverTime !== null && (
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            width: `${(hoverTime / duration) * 100}%`,
                                            height: '100%',
                                            backgroundColor: '#fff',
                                            borderRadius: '15px',
                                            zIndex: '2',
                                            opacity: '0'
                                        }}
                                        transition={{ ease: "linear", duration: 0.3 }}
                                        animate={{ opacity: 0.5 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                                {hoverTime !== null && (
                                    <motion.div
                                        initial={{ opacity: 0, translateY: -40, translateX: '-50%' }}
                                        animate={{ opacity: 1, translateY: -30 }}
                                        exit={{ opacity: 0, translateY: -40 }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            position: 'absolute',
                                            top: '-0px',
                                            left: `${(hoverTime / duration) * 100}%`,
                                            transform: 'translateX(-50%)',
                                            backgroundColor: 'rgba(0,0,0,0.5)',
                                            color: '#fff',
                                            padding: '5px',
                                            borderRadius: '5px',
                                            fontSize: '12px',
                                            zIndex: '50'
                                        }}
                                    >
                                        {formatTime(hoverTime)}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        <button className={styles.buttonCredits} onClick={handleCreditsClick}>
                            {isCreditsVisible ? 'CLOSE' : 'CREDITS'}
                        </button>



                        <h3 className={`${styles.textTitle} text-lg uppercase`}>
                            {currentVideo.btnText}
                        </h3>


                        <div onClick={onPrevious} className={styles.BtnPrev}>

                            <div className={styles.Text}>
                                <p>{previousVideo.Label}</p>
                                <p>{previousVideo.Titulo}</p>
                            </div>
                            <div className={styles.icon}>
                                <IoPlaySkipBack />
                            </div>
                            {/*<ReactPlayer
                                className={styles.reactplayerNext}
                                pip={false}
                                loop={true}
                                playing={true}
                                url={previousVideo.linkcorto}
                                autoplay={true}
                                volume={0}
                                muted={true}
                                config={{
                                    vimeo: {
                                        playerOptions: { controls: false }
                                    }
                                }}
                                width='160px'
                                height='90px'
                            />*/}
                        </div>

                        <div onClick={onNext} className={styles.BtnNext}>

                            <div className={styles.Text}>
                                <p>{nextVideo.Label}</p>
                                <p>{nextVideo.Titulo}</p>
                            </div>
                            <div className={styles.icon}>
                                <IoPlaySkipForward />
                            </div>
                            {/*<ReactPlayer
                                className={styles.reactplayerNext}
                                pip={false}
                                loop={true}
                                playing={true}
                                url={nextVideo.linkcorto}
                                autoplay={true}
                                volume={0}
                                muted={true}
                                config={{
                                    vimeo: {
                                        playerOptions: { controls: false }
                                    }
                                }}
                                width='160px'
                                height='90px'
                            />*/}
                        </div>


                    </motion.div>

                    {isCreditsVisible && (

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.overlayCredits}
                        >

                            <button className={styles.buttonCredits} onClick={handleCloseCredits}>
                                {isCreditsVisible ? 'CLOSE' : 'CREDITS'}
                            </button>

                            <h3 className={`${styles.textTitle} mb-4 font-semibold mt-auto text-lg uppercase`}>
                                {currentVideo.btnText}
                            </h3>

                            <div className="grid w-fit grid-cols-2 gap-4 gap-y-0">
                                {currentVideo.credits.map((credit, idxCredit) => (
                                    <React.Fragment key={idxCredit}>
                                        <div className="text-right text-sm">{credit.title}</div>
                                        <div className="text-left text-sm">{credit.value}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </>
        </ReactPortal >

    );

}

export default ModalVideo;