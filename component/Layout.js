import Navbar from "./Navbar";
import { useEffect } from 'react';
import { useRouter } from "next/router";
import NProgress from "nprogress";



const Layout = ({ children, footer = true, dark = false }) => {
    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            NProgress.start();
        }

        router.events.on("routeChangeStart", handleRouteChange)

        router.events.on("routeChangeComplete", () => NProgress.done());

        return () => {
            router.events.off("routeChangeStart", handleRouteChange)
        }

    }, [])


    return (
        <>

            <Navbar />

            <main className="container py-4">
                {children}
            </main>

            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; Felipe Petrecca Portafolio</h1>
                            <p>2020 - {new Date().getFullYear()}</p>
                            <p>All Rights Reserved</p>
                        </div>
                    </footer>
                )
            }
        </>
    )
}



export default Layout;
