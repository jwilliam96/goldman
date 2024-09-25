import { secureFuture } from "@/utils";
import { sanOne } from "../font";
import { secureFutureDos } from "@/utils/utils";

export function SecureFuture() {
    return (
        <section id="futuro" className="min-h-screen relative py-10 flex flex-col">

            {/* TITLE  */}
            <div className="w-11/12 md:w-8/12 bg-fondo-purple relative z-30 flex justify-end rounded-e-full my-4">
                <p className={`py-4 px-10 text-3xl ss:text-4xl sm:text-5xl `}>FUTURO SEGURO</p>
            </div>

            <div className="max-w-[1500px] mx-auto px-8 grid md:grid-cols-5 relative z-30 grow items-center justify-items-center my-10 gap-8 md:gap-0">

                {/* CAJA  */}
                {/* <div className="max-w-[330px] cuadro  bg-gradient-to-r from-purple-700 to-purple-900 py-8 px-4 text-center h-[230px] grid place-content-center col-span-3 md:col-span-2">
                    Es un plan accesible y confiable
                    para inversionistas novatos,
                    destacando la seguridad y
                    facilidad que ofrece.
                </div> */}
                {/* <div className="md:col-span-2"></div> */}

                <div className="col-span-3 md:col-span-2 grid gap-6 md:pt-20">
                    <div className="max-w-[330px] cuadro  bg-gradient-to-r from-purple-700 to-purple-900 py-8 px-4 text-center h-[230px] grid place-content-center col-span-3 md:col-span-2">
                        La mejor alternativa para quienes comienzan desde cero y no tienen prisa de crecer paso a paso.
                    </div>
                    <div className="max-w-[330px] cuadro  bg-gradient-to-r from-purple-700 to-purple-900 py-8 px-4 text-center h-[230px] grid place-content-center col-span-3 md:col-span-2">
                        ¿Estás buscando una forma segura y rentable de hacer crecer tu dinero? ¡No busques más! Nuestro fondo de inversión a plazo fijo es la solución perfecta para ti.
                    </div>
                </div>

                {/* CARDS  */}
                {/* <ul className="gap-6 h-full col-span-3 flex flex-col justify-center md:px-16">
                    {
                        secureFuture.map(item => (
                            <li key={item} className="border-2 px-10 py-8 rounded-2xl text-center ">
                                {item}
                            </li>
                        ))
                    }
                </ul> */}
                <div className="col-span-3 md:px-6 grid gap-6 ">
                    {/* <p>La mejor alternativa para quienes comienzan desde cero y no tienen prisa de crecer paso a paso.</p>
                    <p>¿Estás buscando una forma segura y rentable de hacer crecer tu dinero? ¡No busques más! Nuestro fondo de inversión a plazo fijo es la solución perfecta para ti.</p> */}

                    <h3 className="mb-4 text-4xl col-span-3">¿Por qué elegir nuestro fondo?</h3>
                    <ul className="gap-6 h-full col-span-3 flex flex-col justify-center md:px-8 lg:px-16">
                        {
                            secureFutureDos.map(item => (
                                <li key={item} className="border-2 px-4 lg:px-10 py-8 rounded-2xl text-center ">
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                    {/* <ul className="list-decimal list-inside space-y-6">
                        <li>Rendimiento Garantizado: Disfruta de tasas de interés fijas y atractivas, sin sorpresas. Tu dinero trabaja para ti de manera predecible.</li>
                        <li>Seguridad Total: Tu capital está protegido. Invertimos en instrumentos de alta calidad, minimizando el riesgo.</li>
                        <li>Flexibilidad: Elige el plazo que mejor se adapte a tus necesidades, desde 3 meses hasta 5 años.</li>
                        <li>Sin Comisiones Ocultas: Total transparencia en tus inversiones. Conoce exactamente lo que ganarás al final del plazo.</li>
                    </ul> */}
                </div>
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
