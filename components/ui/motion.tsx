'use client'

import { motion } from "motion/react";

export default function Motion({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex justify-between items-center">
            {children}
        </motion.div>
    )
}