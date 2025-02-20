import { motion } from "framer-motion";

export function MotionDivWrapper({ children, Class }) {
    return (
        <motion.div className={Class}
            initial={{ opacity: 0, y: -90 }} // Content starts below the viewport
            animate={{ opacity: 1, y: 0 }}  // Slides into view
            exit={{ opacity: 0, y: 90 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {children}
        </motion.div>
    )
}
