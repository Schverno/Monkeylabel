'use client'

import { motion } from 'framer-motion';
import styles from '../styles/layoutnested.module.scss';
import {FaInstagram, FaLinkedinIn } from "react-icons/fa6";




export default function FooterNester() {

    const SOCIAL_CTAS = [
        //{
        //    Component: FaFacebookF,
        //    href: "https://www.facebook.com",
        //},
        {
            Component: FaInstagram,
            href: "https://www.instagram.com",
        },
        //{
        //    Component: FaXTwitter,
        //    href: "https://www.x.com",
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
                                        delay: 0.5 + idx * 0.225,
                                        duration: 0.6,
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



    return (

        <motion.footer className={styles.ContainerFooter}>
            <div className={styles.containerRedes}>
                <FooterCTAs />
            </div>
            <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 1.5,
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1]
                },
            }}
            >
                <p>2024 MONKEY LABEL FILMS.<span className={styles.span}></span> ALL RIGHTS RESERVED</p>

            </motion.div>
        </motion.footer>
    );
}


