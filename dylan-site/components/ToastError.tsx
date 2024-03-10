"use client"
import { useEffect, useMemo } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "next-themes";

export default function ToastError({ error }: any) {

    const { systemTheme, theme, setTheme } = useTheme();

    const updatedTheme = useMemo(() => {
        if (theme === 'system') {
            return systemTheme;
        } else {
            return theme;
        }
    }, [systemTheme, theme])


    useEffect(() => {
        if (error) {
            toast.error('Error Loading Content', {
                toastId: "error-loading-content",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: updatedTheme === 'dark' ? 'dark' : 'light',
            });
            console.log(error)
        }
    }, [error, updatedTheme])

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}