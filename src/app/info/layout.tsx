'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/layoutnested.module.scss';
import { LayoutWrapper } from '@/app/components/layout-wrapper';
import { AnimatePresence, motion } from 'framer-motion';
import FooterNested from '../components/footerNested';
import { IoClose } from 'react-icons/io5';
import { RiMenuLine } from "react-icons/ri";

type Category = 'DOCUMENTARY' | 'COMMERCIALS' | 'MUSIC';

export default function NestedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const footerRef = useRef<HTMLDivElement>(null); // Referencia al primer footer
  const [isFooterVisible, setIsFooterVisible] = useState(false); // Estado para controlar la visibilidad del segundo footer

  useEffect(() => {
    let title = "Monkey Label";
    switch (pathname) {
      case '/info/about':
        title = "About - Monkey Label";
        break;
      case '/info/contact':
        title = "Contact - Monkey Label";
        break;
      case '/info/work':
        title = "Work - Monkey Label";
        break;
      default:
        break;
    }

    document.title = title;
  }, [pathname]);

  // Intersection Observer footer en vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooterVisible(true);
          } else {
            setIsFooterVisible(false);
          }
        });
      },
      { threshold: 1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);


  //MENU

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // Verifica el tamaño al cargar
    window.addEventListener('resize', handleResize); // Actualiza en cambios de tamaño

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //VIDEO MENU
  const [isHovered, setIsHovered] = useState(false);

  //PASAR CATEGORIAS WORK
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category>('DOCUMENTARY');

  const handleSelect = (category: Category) => {
    setSelectedCategory(category);
    router.push(`/info/work?category=${category}`);
  };

  return (

    <LayoutWrapper>

      <div className='min-h-screen overflow-hidden bg-white'>
        <nav className={styles.nav}>
          <Link href="/">
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              style={{ position: 'relative', width: '100px', maxWidth: '100%', height: '100%', minHeight: '60px' }}
            >
              <motion.img
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                src="/logo.svg"
                alt="Monkey Label films logo"
                draggable="false"
                style={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
              />

              <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                src="/logo_1.mp4"
                muted
                loop
                autoPlay={true}
                style={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
              />
            </motion.div>
          </Link>

          <AnimatePresence>
            {pathname === '/info/work' && (
              <>
                <motion.div
                  initial={{ opacity: 0, translateX: 30 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0 }}
                  className={`${styles.navList} h-[30px] overflow-hidden font-semibold text-lg flex items-start gap-2`}

                >
                  {['DOCUMENTARY', 'COMMERCIALS', 'MUSIC'].map((category) => (
                    <motion.div
                      key={category}
                      onClick={() => {
                        if (['DOCUMENTARY', 'COMMERCIALS', 'MUSIC'].includes(category)) {
                          handleSelect(category as Category); // Aseguramos que category es de tipo Category
                        }
                      }} whileHover={{ y: -30 }}
                      animate={{ opacity: selectedCategory === category ? 1 : 0.5 }}


                    >
                      <span className={`flex items-center h-[30px]`}>
                        {category}
                      </span>
                      <span className="flex items-center h-[30px] ">{category}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>



          <div className={styles.containerMenu}>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className={styles.containerLinks}
                  initial={{ opacity: 0, height: isMobile ? 0 : '100%' }}
                  animate={{ opacity: 1, height: isMobile ? 'auto' : '100%' }}
                  exit={{ opacity: 0, height: isMobile ? 0 : '100%' }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                >
                  {MENULINKS.map((ml, idx) => (
                    <Link href={ml.href} key={idx} target="_self">
                      <motion.div
                        variants={menuLinkVariants}
                        initial={{
                          opacity: 0,
                          translateX: 30,
                        }}
                        animate={{
                          opacity: 1,
                          translateX: 0,
                          transition: {
                            delay: isMobile ? 0.4 + idx * 0.225 : 0.4 - idx * 0.225,

                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                          },
                        }}
                        exit={{
                          opacity: 0,
                          translateX: 30,
                          transition: {
                            delay: 0.4 - idx * 0.225,
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                          },
                        }}
                        rel="nofollow"
                        className="h-[30px] overflow-hidden font-semibold text-lg flex items-start gap-2"
                      >
                        <motion.div whileHover={{ y: -30 }}>
                          <span className={`flex items-center h-[30px] ${pathname === ml.href ? 'text-black' : 'text-gray-500'}`}>
                            {ml.text}
                          </span>
                          <span className="flex items-center h-[30px] ">{ml.text}</span>
                        </motion.div>
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={toggleMenu}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              whileTap={{ scale: 0.5, translateY: 2 }}
              className={styles.menubuton}
            >
              {isMenuOpen ? <IoClose /> : <RiMenuLine />}
            </motion.button>
          </div>
        </nav>

        <AnimatePresence>
          {pathname === '/info/work' && (
            <>
              <motion.div
                initial={{ opacity: 0, translateY: 30 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -10 }}
                className={styles.navlistMobile}
              >
                {(['DOCUMENTARY', 'COMMERCIALS', 'MUSIC'] as Category[]).map((category) => (
                  <motion.div
                    key={category}
                    onClick={() => handleSelect(category)}
                    animate={{
                      opacity: selectedCategory === category ? 1 : 0.5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {category}
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className={styles.paddingChildren}>         
            {children}
        </div>

      </div>

      {/*  Footer  */}
      <div className='relative'>
        <motion.div
          ref={footerRef}
          style={{ opacity: 0, height: 1 }}
        >
        </motion.div>
        <AnimatePresence>
          {isFooterVisible && (
            <motion.div
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0 }}
              exit={{ translateY: '100%' }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className='fixed w-full bottom-0'
            >
              <FooterNested />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </LayoutWrapper>
  );
}