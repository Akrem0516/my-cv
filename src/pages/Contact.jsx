import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Image starts small and transparent
            animate={{ opacity: 1, scale: 1 }}   // Fade in and scale to normal
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <h1>Contact</h1>
        </motion.div>
    )
}

export default Contact;