// Error Pop-up and screen shake animation w/react,framer-motion

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ErrorPopUp() {
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            document.body.classList.add("shake")
            setTimeout(() => {
                document.body.classList.remove("shake")
                setError(false)
            }, 5000)
        }
    }, [error])

    return (
        <div>
            {error && (
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                    className="fixed top-0 right-0 m-4 p-4 bg-red-500 text-white rounded-lg shadow-lg"
                >
                    Some error(s) occured while character generating.
                </motion.div>
            )}
        </div>
    )
}
// In globals.css file copy following lines

// @keyframes shake {
//     0% {
//         transform: translateX(0);
//     }
//     10%,
//     30%,
//     50%,
//     70%,
//     90% {
//         transform: translateX(-10px);
//     }
//     20%,
//     40%,
//     60%,
//     80% {
//         transform: translateX(10px);
//     }
//     100% {
//         transform: translateX(0);
//     }
// }

// .shake {
//     animation: shake 0.5s;
// }
