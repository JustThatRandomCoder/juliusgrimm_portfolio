import { FC } from "react";
import { motion } from "framer-motion";

const NotFoundPage: FC = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-font bebas-neue-regular">404</div>
            </motion.div>
        </>
    );
}

export default NotFoundPage;