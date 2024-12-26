import { motion } from "framer-motion";


export function MotionImgWrapper({PicPath, Alt, Class}) {
    return (
        <motion.img src={PicPath} alt={Alt} className={Class}
            initial={{ opacity: 0, scale: 0.8 }} // Image starts small and transparent
            animate={{ opacity: 1, scale: 1 }}   // Fade in and scale to normal
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Delay for smoother effect
        />
    )
}