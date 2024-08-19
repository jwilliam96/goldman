import Image from "next/image"
import fondo from "/public/image/testimonios.png"
import image from "/public/videos/Gif testimonios.gif"
import { sanOne } from "../font"


export function Testimonio() {
    return (
        <section className="min-h-screen  flex relative">

            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1800px] mx-auto">

                <div className="relative z-50 px-4 lg:col-span-1 grid lg:pl-10 justify-center">
                    <h2 className={`text-3xl ss:text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl text-center mt-14 ${sanOne.className}`}>TESTIMONIOS</h2>
                    <Image src={image} alt="eslava morada" className="my-8 w-[300px] md:w-[400px] lg:my-0 lg:w-full h-auto justify-self-center" />
                </div>

                <div className="col-span-2 grid grid-cols-4 relative z-50 gap-14 px-4 md:pl-20">

                    <div className="col-span-4 sm:col-span-3 px-8 py-4 border-2 rounded-b-3xl border-t-0 grid gap-2">
                        <p >“Antes de invertir con Goldman Group, siempre me preocupaba no saber
                            lo suficiente. Con su plan Futuro Seguro, me sentí respaldado en cada
                            paso. Mi inversión ha crecido de manera constante, y lo mejor es que
                            siempre tengo a alguien disponible para responder mis preguntas”
                        </p>
                        <p className="text-autor">Felipe Hincapié, Electricista</p>
                    </div>

                    <div className="sm:col-start-2 col-span-4 sm:col-span-3 px-8 py-4 border-2 rounded-s-3xl border-r-0 grid gap-2">
                        <p>
                            “Llevo años invirtiendo, pero nunca había encontrado una
                            empresa que cuidara tanto de mis intereses. Con Crecimiento
                            Protegido, no solo he visto rendimientos impresionantes, sino
                            que sé que mi inversión está segura. Es un servicio
                            personalizado y confiable como pocos.”
                        </p>
                        <p className="text-autor">Sebastián Gómez, Diseñador Gráfico</p>
                    </div>

                    <div className="col-span-4 sm:col-span-3 px-8 py-4 border-2 rounded-t-3xl border-b-0 grid gap-2">
                        <p >
                            “Nunca pensé que invertir pudiera ser tan fácil. Con Futuro
                            Seguro, he visto cómo mis ahorros empiezan a crecer sin tener
                            que preocuparme por los riesgos. Goldman Group realmente
                            sabe cómo cuidar de sus clientes.”
                        </p >
                        <p className="text-autor">Maira Perez, Ama de casa</p>
                    </div>
                </div>
            </div>

            <Image src={fondo} alt="fondo morado" fill priority className="object-cover" />
        </section>
    )
}
