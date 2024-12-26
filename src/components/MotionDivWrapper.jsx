import { motion } from "framer-motion";

export function MotionDivWrapper({ children, Class }) {
    return (
        <motion.div className={Class}
            initial={{ opacity: 0, y: -70 }} // Content starts below the viewport
            animate={{ opacity: 1, y: 0 }}  // Slides into view
            exit={{ opacity: 0, y: 70 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {children}
        </motion.div>
    )
}
