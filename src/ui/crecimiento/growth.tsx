import { crecimiento } from "@/utils";

export function Growth() {
    return (
        <section id="crecimiento" className="min-h-screen relative py-10 flex flex-col ">

            {/* TITLE  */}
            <div className="w-11/12 md:w-10/12 bg-fondo-purple relative z-30 rounded-s-full my-4 self-end">
                <p className="py-4 px-10 text-3xl md:text-4xl lg:text-5xl">CRECIMIENTO PROTEGIDO</p>
            </div>

            <div className="max-w-[1500px] mx-auto px-8 grid md:grid-cols-5  relative z-30 grow items-center justify-items-center my-10 gap-8 md:gap-0" >

                <div className="order-2 max-w-[330px] cuadro  bg-gradient-to-r from-purple-700 to-purple-900 py-8 px-4 text-center h-[230px] grid place-content-center col-span-3 md:col-span-2">
                    Un plan de éxito, con altos
                    rendimientos y la protección
                    adicional contra pérdidas,
                    favorece a inversionistas que
                    buscan maximizar sus ganancias
                    con un respaldo sólido.
                </div>

                <ul className="order-1 h-full col-span-3 flex flex-col justify-center md:px-16 gap-6">
                    {
                        crecimiento.map(item => (
                            <li key={item} className="border-2 px-10 py-8 rounded-2xl text-center ">
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* sombra negra  */}
            <div className="absolute z-20 bg-black inset-0 bg-opacity-30" />
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/crecimiento.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
        </section>
    )
}
