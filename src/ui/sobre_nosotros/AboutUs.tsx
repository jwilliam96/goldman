import Image from "next/image";
import fondo from "/public/image/fondo_Sobre_nosotros.png"
import image from "/public/image/sobre_nosotros.png"
import { sanOne } from "../font";

export function AboutUs() {
    return (
        <section id="about" className="min-h-screen relative flex items-center py-9">
            <Image src={fondo} alt="fondo morado" fill priority className="object-cover" />
            <div className="grid lg:grid-cols-2 relative max-w-[1600px] mx-auto px-4 gap-8">

                <div className="grid items-center justify-items-center text-center gap-10 lg:gap-0 ">
                    <h2 className={`text-3xl md:text-5xl ${sanOne.className}`}>Sobre Nosotros</h2>
                    <Image src={image} alt="dos mujeres sentadas" className="max-w-[400px] w-full drop-shadow-sombraImage" />
                </div>

                <div className="p-5 py-4 lg:px-10 lg:py-8 border-2 space-y-4 max-w-[550px] mx-auto">
                    <p>
                        Goldman Group nace como una subsidiaria orgullosa de
                        JPMorgan, una de las instituciones financieras más respetadas y
                        confiables a nivel mundial. Desde nuestros inicios, nos hemos
                        dedicado a un solo propósito: transformar la vida de nuestros
                        clientes a través de inversiones estratégicas y un
                        acompañamiento excepcional.
                    </p>
                    <p>Durante años, hemos ayudado a cientos de personas a mejorar sus
                        vidas, guiándolos en la administración de sus inversiones y
                        asegurando un crecimiento sólido y sostenible de su capital.
                        Nuestra filosofía se basa en el compromiso con la excelencia y la
                        personalización de nuestros servicios, adaptándonos a las
                        necesidades únicas de cada cliente.
                    </p>
                    <p>
                        El acompañamiento que brindamos no solo se destaca por su
                        calidad, sino también por la cercanía y confianza que cultivamos
                        con nuestros clientes. Nos enorgullece que nuestra experiencia
                        hable por sí misma, reflejando una trayectoria de éxito respaldada
                        por el legado de JPMorgan. Con Goldman Group, estás en manos
                        de expertos que priorizan tu bienestar financiero y tu futuro.
                    </p>
                    <p className="text-autor">Una Herencia de Excelencia y Compromiso</p>
                </div>
            </div>


        </section>
    )
}
