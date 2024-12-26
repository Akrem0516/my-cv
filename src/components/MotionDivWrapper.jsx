import { motion } from "framer-motion";

export function MotionDivWrapper({ children }) {
    return(
        <motion.div className='details'
                initial={{ opacity: 0, y: -70 }} // Content starts below the viewport
                animate={{ opacity: 1, y: 0 }}  // Slides into view
                exit={{ opacity: 0, y: 70 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {children}
            </motion.div>
    )
}

// todo: add motion.img