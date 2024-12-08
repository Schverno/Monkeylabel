'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/main.module.scss';
import {FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import MainSlider from './components/mainSlider'



export default function Home() {
  const [isCentered, setIsCentered] = useState<boolean>(true);
  const [siguiente, setSiguiente] = useState<boolean>(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showMainSlider, setShowMainSlider] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCentered(false);
      setSiguiente(false);
    }, 1500);

    const timerdos = setTimeout(() => {
      setIsAnimationComplete(true)
      setShowMainSlider(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerdos);
    }


  }, []);

  const menuLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: -10,
      opacity: 0,
    },
  };

  const MENULINKS = [
    {
      text: "WORK",
      href: "/info/work",
    },
    {
      text: "ABOUT",
      href: "/info/about",
    },
    {
      text: "CONTACT",
      href: "/info/contact",
    },
  ];



  const MenuLink = () => {
    return (
      <>
        <div className={styles.containerMenuMain}>

          {MENULINKS.map((ml, idx) => {
            return (
              <motion.a
                key={idx}
                href={ml.href}
                variants={menuLinkVariants}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 2 + idx * 0.225,
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1]
                  },
                }}
                rel="nofollow"
                target="_self"
                className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
              >
                <motion.div whileHover={{ y: -30 }}>
                  <span className="flex items-center h-[30px] text-gray-500">{ml.text}</span>
                  <span className="flex items-center h-[30px] ">{ml.text}</span>
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      </>
    );
  };

  const SOCIAL_CTAS = [
    //{
    //  Component: FaFacebookF,
    //  href: "https://www.facebook.com",
    //},
    {
      Component: FaInstagram,
      href: "https://www.instagram.com",
    },
    //{
    //  Component: FaXTwitter,
    //  href: "https://www.x.com",
    //},
    {
      Component: FaLinkedinIn,
      href: "https://www.linkedin.com",
    },
  ];

  const FooterCTAs = () => {
    return (
      <>
        <div className={styles.containerRedes}>
          {SOCIAL_CTAS.map((l, idx) => {
            return (
              <motion.a
                key={idx}
                href={l.href}
                target="_blank"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 3 + idx * 0.225,
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1]
                  },
                }}
              >
                <l.Component />
              </motion.a>
            );
          })}
        </div>

      </>
    );
  };

  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 728px)").matches;


  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className={`${styles.divmain} min-h-screen`}>
      <header className={styles.header}>
        <motion.div
          initial={{
            opacity: 0,
            width: 100,
            translateX: '-50%',
            translateY: '-50%',
            top: '50%',
            left: '50%',
            position: 'fixed',
          }}
          animate={{
            opacity: 1,
            width: isMobile
            ? isCentered
                ? '240px'
                : '130px'
            : isCentered
            ? '240px'
            : '160px',
            top: isMobile
            ? isCentered
                ? '50%'
                : '15px'
            : isCentered
            ? '50%'
            : '25px',
            translateX: '-50%',
            translateY: isCentered ? '-50%' : '0%',
            transition: { ease: [0.76, 0, 0.24, 1], duration: 1 },
          }}
          className={` ${isAnimationComplete ? styles.completed : ''}`}
          style={{ position: 'relative'}}
         
        >
          {/* Video que se muestra por defecto */}
          <motion.video
            initial={{ opacity: 1 }} // Opacidad inicial del video
            animate={{ opacity: videoEnded ? 0 : 1}} // Se oculta al hacer hover o si el video ha terminado
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            src="/logointro_4.mp4"
            muted={true}
            loop={false}
            playsInline
            autoPlay={true}
            onEnded={() => setVideoEnded(true)} // Cambia el estado cuando el video termina
            style={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
          />

          {/* Imagen que se muestra después de que el video termina */}
          <motion.img
            initial={{ opacity: 0 }} // Opacidad inicial de la imagen
            animate={{ opacity: videoEnded ? 1 : 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0 }}
            src="/logo.svg"
            alt="Logo Monkey Label"
            draggable={false}
            width={180}
            height={38}
            style={{ width: 'auto', height: 'auto', willChange: 'transform, width', imageRendering: 'crisp-edges', position: 'absolute', top: 0, left: 0 }}
          />
        </motion.div>
      </header>


      {showMainSlider && <motion.main
        initial={{
          opacity: 0,
          translateY: 80,
          scale: 0.9
        }}
        animate={{
          opacity: siguiente ? 0 : 1,
          translateY: 0,
          scale: 1,
          transition: { ease: [0.76, 0, 0.24, 1], delay: 0.6, duration: 1 },
        }}
        className="">
        <MainSlider />
      </motion.main>
      }

      <motion.footer
        className={`${styles.footer} row-start-3 flex gap-6 flex-wrap items-center `}>
        <div className={styles.containerMenuMain}>
          <MenuLink />
        </div>
        <div className={styles.containerRedes}>
          <FooterCTAs />
        </div>
      </motion.footer>
    </div>
  );
}


