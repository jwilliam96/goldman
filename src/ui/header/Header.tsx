import Image from "next/image";
import moneda from "/public/image/Moneda_oro.png"
import { Button } from "./Button";
import { lastica } from "../font";


export function Header() {
    return (
        <header className="min-h-screen relative flex flex-col">

            {/* TOP MENU  */}
            <div className="relative z-50 ">
                <nav className=" flex flex-col items-center gap-4 max-w-[1400px] lg:flex-row md:justify-between h-full shrink-0 mx-auto px-4 py-4">

                    <div className="flex items-center gap-4 px-4">
                        <Image src={moneda} alt="moneda de oro" className="size-20" />
                        <h2 className={`text-xl sm:text-4xl ${lastica.className} font-bold`}>GOLDMAN GROUP</h2>
                    </div>

                    <div className="flex flex-col gap-5 lg:flex-row items-center md:gap-10">
                        <Button title="QUIENES SOMOS" className="py-2 px-4 text-xl shrink-0 md:text-2xl" href="about" />
                        <Button title="CONTÁCTAME" className="py-2 px-4 text-xl md:text-2xl" href="contact" />
                    </div>

                </nav>
            </div>


            <div className="relative z-50 text-center py-10 flex-grow flex flex-col justify-center items-center px-8">
                <div className="flex-grow flex flex-col justify-center items-center gap-8">
                    <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl ${lastica.className} font-bold`}>
                        OPORTUNIDADES QUE <br /> TRANSFORMAN
                    </h1>
                    <p className={`text-2xl mb-12 `}>Tú futuro, nuestra prioridad</p>
                </div>

                <Button title="VER PLANES" className="py-4 max-w-max px-10 text-xl mt-auto md:text-2xl" href="plans" />
            </div>

            <div className="absolute z-20 bg-black inset-0 bg-opacity-30" />
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/header.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>


        </header>
    )
}
