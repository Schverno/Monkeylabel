"use client"

import { motion } from "framer-motion";

export const LayoutWrapper = ({
    children,
}: {
    children: React.ReactNode;

}) => (
        <motion.div
            initial={{ opacity: 0,}}
            animate={{ opacity: 1,}}
            exit={{ opacity: 0,}}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.5}}
        >
            {children}
        </motion.div>
)