'use client';

import styles from '../styles/mainSlider.module.scss';
import CardMain from '../components/CardMain';
import { motion, animate, useMotionValue } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function MainSlider() {
    const videosMainPage = [
        {
            index: 0,
            src: "/mainVideos/gamechangers.mp4",
            poster: "/posters/0.webp",
            btnText: "Game Changers / Apple TV",
            Titulo: "Game Changers",
            Label: "Apple TV",
            linkVideoLargo: "https://player.vimeo.com/video/1015301576",
            linkcorto: "/mainVideos/gamechangers.mp4",
            credits: [
                { title: "Client", value: "Apple TV / MLS" },
                { title: "Production Company", value: "Monkey Label Films" },
                { title: "Director", value: "Juan Irigoyen" },
                { title: "Director Assistant", value: "Rafael Urbina" },
                { title: "Executive Producer", value: "Alexis Estiz / Daniela Martinez" },
                { title: "Producer", value: "Guli Corradetti" },
                { title: "DOP", value: "Gerald Lee" },
                { title: "Camera", value: "Marco Perreta" },
                { title: "Sound", value: "Ariel Novo Curiel" },
                { title: "Post Production", value: "Monkey Label Films" },
                { title: "Editor", value: "Daniela Benedetti" },
                { title: "Editor", value: "Denise Umaschi" },
                { title: "Editor", value: "Andrea Usher" },
                { title: "Editor", value: "Tomas Dantonio" },
                { title: "Editor", value: "Agostina Raffa" },
                { title: "Assistant Editor", value: "Belen Risso Patron" },
                { title: "Colourist", value: "Juan Celestino" },
                { title: "Sound Design", value: "Guillermo Quintana / Santiago Pafundi" },
            ],
        },
        {
            index: 1,
            src: "/mainVideos/greenland.mp4",
            poster: "/posters/1.webp",
            btnText: "Greenland / ESPN",
            Titulo: "Greenland",
            Label: "ESPN",
            linkVideoLargo: "https://player.vimeo.com/video/1015304667",
            linkcorto: "/mainVideos/greenland.mp4",
            credits: [
                { title: "Client", value: "ESPN+ / ESPN Deportes" },
                { title: "Production Company", value: "ESPN Originals" },
                { title: "Executive Producer", value: "Edgardo Mattei" },
                { title: "Producer", value: "Vilma Obando" },
                { title: "DOP", value: "Juan Irigoyen (Monkey Label) / Gerald Lee" },
                { title: "1st AD", value: "Rafael Urbina" },
                { title: "Sound", value: "Carlos Marcellan" },
                { title: "Data Manager", value: "Ruben Gallego" },
                { title: "Post Production", value: "Monkey Label Films" },
                { title: "Editor", value: "Daniela Benedetti" },
                { title: "Assistant Editor", value: "Belen Risso Patron" },
                { title: "Colourist", value: "Juan Celestino" },
                { title: "Sound Design", value: "Pafundi / Quintana" },
                { title: "Equipment", value: "HD House" },
            ],
        },
        {
            index: 2,
            src: "/mainVideos/valeria.mp4",
            poster: "/posters/1.webp",
            btnText: "Valeria Mazza / Paramount+",
            Titulo: "Valeria Mazza",
            Label: "Paramount+",
            linkVideoLargo: "https://player.vimeo.com/video/1015322584",
            linkcorto: "/mainVideos/valeria.mp4",
            credits: [
                { title: "Client", value: "Paramount+" },
                { title: "Production Company", value: "100 Bares" },
                { title: "Director", value: "Juan Irigoyen / Martin Fradkin (Monkey Label)" },
                { title: "Executive Producer", value: "Muriel Cabeza / Daniela Martinez (Monkey Label)" },
                { title: "Producer", value: "Natasha Gurfinkel" },
                { title: "DOP", value: "Conrado Taina" },
                { title: "Camera", value: "Armin Marchesini Wehmuller" },
                { title: "Sound", value: "Carlos Marcellan" },
                { title: "Editor", value: "Daniela Benedetti" },
                { title: "Assistant Editor", value: "Belen Risso Patron" },
                { title: "Colourist", value: "Juan Celestino" },
                { title: "Sound Design", value: "Guillermo Quintana / Santiago Pafundi" },
            ],
        },
        {
            index: 3,
            src: "/mainVideos/pibank.mp4",
            poster: "/posters/3.webp",
            btnText: "Pibank / Monkey Label",
            Titulo: "Pibank",
            Label: "Monkey Label",
            linkVideoLargo: "https://player.vimeo.com/video/1015324735",
            linkcorto: "/mainVideos/pibank.mp4",
            credits: [
                { title: "Agency", value: "Dentsu" },
                { title: "Client", value: "Pibank" },
                { title: "Production Company", value: "Monkey Label Films" },
                { title: "Director", value: "Juan Irigoyen / Martin Fradkin" },
                { title: "Director Assistant", value: "Jeronimo Toubes" },
                { title: "Executive Producer", value: "Alexis Estiz / Daniela Martinez / Martin Lapissonde" },
                { title: "Head of Production", value: "Catalina Ward" },
                { title: "Producer", value: "Carlos Marcellan" },
                { title: "Location Manager", value: "Nicanor Gonzales del Solar" },
                { title: "Casting", value: "Elencos y Elenquitos" },
                { title: "DOP", value: "Manu Bullrich" },
                { title: "Art Director", value: "Valentina Llorens" },
                { title: "Post Production", value: "Monkey Label Films" },
                { title: "Editor", value: "Daniela Benedetti" },
                { title: "Assistant Editor", value: "Belen Risso Patron" },
                { title: "Colourist", value: "Alejandra Lescano" },
                { title: "Sound Design", value: "Pickle Music" },
                { title: "VFX Supervisor", value: "Nicolas Agarzua (Opposite Visuals)" },
                { title: "VFX Supervisor", value: "Joaquin Romero (Opposite Visuals)" },
                { title: "Motion Graphics", value: "Alexia Miller Moscardini (Opposite Visuals)" },
                { title: "Compositing", value: "Nahuel Acevedo (Opposite Visuals)" },
            ],
        },
        {
            index: 4,
            src: "/mainVideos/mdf.mp4",
            poster: "/posters/4.webp",
            btnText: "Misterios del Futbol / FIFA+",
            Titulo: "Misterios del Futbol",
            Label: "FIFA+",
            linkVideoLargo: "https://player.vimeo.com/video/1015334680",
            linkcorto: "/mainVideos/mdf.mp4",
            credits: [
                { title: "Client", value: "FIFA+" },
                { title: "Production Company", value: "Monkey Label Films" },
                { title: "Director", value: "Juan Irigoyen" },
                { title: "Executive Producer", value: "Alfredo Montes de Oca / Juan Castro" },
                { title: "Producer", value: "Carlos Marcellan" },
                { title: "Line Producer", value: "Joaquin Garcia" },
                { title: "Talent", value: "Diego Ripoll" },
                { title: "DOP", value: "Nicolas Gorla" },
                { title: "Gaffer", value: "Juan Mendoza" },
                { title: "Art Director", value: "Denise Fritzler" },
                { title: "Camera", value: "Conrado Taina" },
                { title: "1st AD", value: "Santiago Burgos" },
                { title: "Post Production", value: "Monkey Label Films" },
                { title: "Editor", value: "Daniela Benedetti" },
                { title: "Assistant Editor", value: "Belen Risso Patron" },
                { title: "Colourist", value: "Juan Celestino" },
                { title: "Sound Design", value: "Guillermo Quintana / Santiago Pafundi" },
            ],
        },
        {
            index: 5,
            src: "/mainVideos/equino.mp4",
            poster: "/posters/5.webp",
            btnText: "Caballos / Monkey Label",
            Titulo: "Caballos",
            Label: "Monkey Label",
            linkVideoLargo: "https://player.vimeo.com/video/1015331358",
            linkcorto: "/mainVideos/equino.mp4",
            credits: [
                { title: "Director", value: "John Doe" },
                { title: "Productor", value: "Jane Smith" },
            ],
        },
        {
            index: 6,
            src: "/mainVideos/bodog.mp4",
            poster: "/posters/6.webp",
            btnText: "Bodog / Monkey Label",
            Titulo: "Bodog",
            Label: "Monkey Label",
            linkVideoLargo: "https://player.vimeo.com/video/1015332882",
            linkcorto: "/mainVideos/bodog.mp4",
            credits: [
                { title: "Agency", value: "Pipol" },
                { title: "Client", value: "Bodog" },
                { title: "Production Company", value: "Monkey Label Films" },
                { title: "Director", value: "Juan Irigoyen" },
                { title: "Executive Producer", value: "Daniela Martinez" },
                { title: "Producer", value: "Carlos Marcellan" },
                { title: "DOP", value: "Nicolas Gorla" },
                { title: "Art Director", value: "Valentina Llorens" },
                { title: "Post Production", value: "Monkey Label Films" },
                { title: "Editor", value: "Daniela Benedetti" },
                { title: "Colourist", value: "Juan Celestino" },
                { title: "VFX", value: "Nicolas Agarzua" },
            ],
        },
        {
            index: 7,
            src: "/mainVideos/china.mp4",
            poster: "/posters/7.webp",
            btnText: "Ay Ay Ay China Suarez / Bourke",
            Titulo: "Ay Ay Ay China Suarez",
            Label: "Bourke",
            linkVideoLargo: "https://player.vimeo.com/video/1015330661",
            linkcorto: "/mainVideos/china.mp4",
            credits: [
                { title: "Artist", value: "China Suarez" },
                { title: "Production Company", value: "Bourke" },
                { title: "Director", value: "Martin Fradkin (Monkey Label)" },
                { title: "Executive Producer", value: "Rodolfo Lamboglia" },
                { title: "Producer", value: "Rocio Taboada" },
                { title: "DOP", value: "Gerald Lee / Juan Carlos Sauczuk" },
                { title: "Art Director", value: "Set Machine" },
                { title: "Post Production", value: "Bourke" },
                { title: "Editor", value: "Pablo Caceres Medina" },
                { title: "Colourist", value: "Juan Celestino" },
                { title: "Equipment", value: "HD House" },
            ],
        },
        {
            index: 8,
            src: "/mainVideos/touching.mp4",
            poster: "/posters/8.webp",
            btnText: "Rauw Alejandro (Backstage Touching the Sky)",
            Titulo: "(Backstage Touching the Sky)",
            Label: "Rauw Alejandro",
            linkVideoLargo: "https://player.vimeo.com/video/1015300321",
            linkcorto: "/mainVideos/touching.mp4",
            credits: [
                { title: "Artist", value: "Rauw Alejandro" },
                { title: "Director", value: "Marco Perreta" },
                { title: "Producer", value: "Daniela Martinez / Guli Corradetti (Monkey Label)" },
                { title: "DOP", value: "Martin Fradkin / Juan Irigoyen (Monkey Label)" },
                { title: "Sound", value: "Carlos Marcellan (Monkey Label)" },
                { title: "Editor", value: "Andrea Usher" },
                { title: "Colourist", value: "Isaias Bovio" },
            ],
        },
    ];
    
    

    const FAST_D = 60;
    const SLOW_D = 7500;

    const [duration, setDuration] = useState(SLOW_D);

    const xTranslation = useMotionValue(0);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRenderer] = useState(false);


    const [animationPhase, setAnimationPhase] = useState("translatePhase");

    const sliderRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            setWidth(sliderRef.current.offsetWidth);
        }
    }, [sliderRef.current]);


    const handleTranslateComplete = () => {
        setAnimationPhase("staggerPhase");
        xTranslation.set(0);
        setMustFinish(true);
        setDuration(FAST_D);

        // Forzar el cálculo del ancho nuevamente
        if (sliderRef.current) {
            setWidth(sliderRef.current.offsetWidth);
        }

    };




    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    handleTranslateComplete();
                    xTranslation.set(0);
                    setRenderer(!rerender);

                }
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return controls?.stop;
    }, [xTranslation, width, duration, rerender]);


    return (
        <main className={styles.main}>
            <motion.div
                className={`${styles.mainSliderContainer} absolute left-0 flex gap-5`}
                ref={sliderRef}
                style={{ x: xTranslation }}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_D);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_D);
                }}
                drag="x"
                dragConstraints={{ left: -width / 2, right: 0 }}
                dragTransition={{ power: 0.2, bounceStiffness: 300, bounceDamping: 20 }}
                onClick={(e) => {
                        e.preventDefault();                    
                }}
                onDragStart={() => {
                    setMustFinish(true);
                }}
                onDragEnd={() => {
                    setMustFinish(true);
                    setDuration(SLOW_D);
                    setTimeout(() => {
                        setMustFinish(true);
                        setDuration(FAST_D);
                    }, 800);
                }}
                initial="hidden"
                animate={animationPhase}
                variants={{
                    hidden: {
                        translateX: "calc(50vw - 175px)",
                    },
                    translatePhase: {
                        translateX: "calc(50vw - 175px)",
                        transition: {
                            duration: 3,
                            delay: 2,
                        },
                    },
                    staggerPhase: {
                        translateX: "calc(0vw - 0.00001px)",
                        transition: {
                            ease: [0.76, 0, 0.24, 1],
                            duration: 2,
                        }
                    }
                }}
                onAnimationComplete={(definition) => {
                    if (definition === "translatePhase") {
                        handleTranslateComplete();
                    }
                }}
            >
                {[...videosMainPage, ...videosMainPage, ...videosMainPage, ...videosMainPage,].map((video, idx) => (
                    <motion.div
                        key={idx}
                        variants={{
                            hidden: {
                                opacity: idx === 0 ? 1 : 0,
                                scaleY: idx === 0 ? 1 : 0,
                                scaleX: idx === 0 ? 1 : 0,
                            },
                            translatePhase: {
                                opacity: idx === 0 ? 1 : 0,
                                scaleX: idx === 0 ? 1 : 0.2,
                                scaleY: idx === 0 ? 1 : 0.2,
                            },
                            staggerPhase: {
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                transition: {
                                    ease: [0.76, 0, 0.24, 1],
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                    duration: 3,
                                    delay: idx * 0.22

                                }
                            }
                        }}
                        initial="hidden"
                        animate={animationPhase}
                    // DEBUG <div className="debug-width"> Width: {width}px </div>
                    >
                        <CardMain src={video.src} btnText={video.btnText} poster={video.poster} key={idx} index={video.index} videos={videosMainPage} />
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}
