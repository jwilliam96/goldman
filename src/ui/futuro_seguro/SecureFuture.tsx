import { secureFuture } from "@/utils";
import { sanOne } from "../font";

export function SecureFuture() {
    return (
        <section id="futuro" className="min-h-screen relative py-10 flex flex-col">

            {/* TITLE  */}
            <div className="w-11/12 md:w-8/12 bg-fondo-purple relative z-30 flex justify-end rounded-e-full my-4">
                <p className={`py-4 px-10 text-3xl ss:text-4xl sm:text-5xl `}>FUTURO SEGURO</p>
            </div>

            <div className="max-w-[1500px] mx-auto px-8 grid md:grid-cols-5 relative z-30 grow items-center justify-items-center my-10 gap-8 md:gap-0">

                {/* CAJA  */}
                <div className="max-w-[330px] cuadro  bg-gradient-to-r from-purple-700 to-purple-900 py-8 px-4 text-center h-[230px] grid place-content-center col-span-3 md:col-span-2">
                    Es un plan accesible y confiable
                    para inversionistas novatos,
                    destacando la seguridad y
                    facilidad que ofrece.
                </div>

                {/* CARDS  */}
                <ul className="gap-6 h-full col-span-3 flex flex-col justify-center md:px-16">
                    {
                        secureFuture.map(item => (
                            <li key={item} className="border-2 px-10 py-8 rounded-2xl text-center ">
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* SOMBRA NEGRA  */}
            <div className="absolute z-20 bg-black inset-0 bg-opacity-30" />

            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/futuro_seguro.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
        </section>
    )
}
