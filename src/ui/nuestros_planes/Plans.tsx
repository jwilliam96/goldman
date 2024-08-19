
import Image from "next/image"
import imageCp from "/public/image/plansCp.png"
import imageFs from "/public/image/plansFs.png"
import { sanOne } from "../font"
import Link from "next/link"


export function Plans() {
    return (
        <section id="plans" className="min-h-screen relative py-16 flex">

            <div className="relative z-50 max-w-[1600px] mx-auto px-4 lg:px-20 flex-grow flex flex-col items-center gap-16">
                <h2 className={`text-4xl sm:text-7xl ${sanOne.className} bright-text self-start`}>NUESTROS PLANES</h2>

                <div className="flex flex-col gap-16 justify-center items-center px-8 w-full max-w-[900px] flex-grow  md:gap-4 md:flex-row  md:justify-between xl:max-w-[1100px]">
                    <Link href={"#futuro"} className="w-full max-w-[370px] h-full max-h-[525px] px-10 sm:px-0">
                        <Image src={imageFs} alt="una mujer con un gráfico" className=" " />
                    </Link>

                    <Link href={"#crecimiento"} className="w-full max-w-[370px] h-full max-h-[525px] px-10 sm:px-0">
                        <Image src={imageCp} alt="una mujer con un gráfico" />
                    </Link>
                </div>
            </div>


            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/plans.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>

        </section>
    )
}
