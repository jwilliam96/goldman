import { sanOne } from "../font";
import Form from "./Form";

export function Contact() {
    return (
        <section id="contact" className="min-h-screen relative flex">

            <div className="relative z-50 container mx-auto px-4 py-20 space-y-6 flex-grow flex flex-col gap-4">
                <h2 className={`text-3xl ss:text-5xl md:text-6xl ${sanOne.className}`}>CONTÁCTENOS</h2>
                <p className="md:text-xl">Rellena el formulario para que uno de nuestros socios
                    <br />
                    se ponga en contacto contigo
                </p>

                <Form />

                <div className="pt-10">
                    <p className="text-xs">©Copyright GOLDMAN GROUP - Todos los derechos reservados. ADVERTENCIA SOBRE INVERSIÓN DE ALTO RIESGO: El trading por apalancamiento en contratos de divisas extranjeras, contratos por diferencia u otros productos fuera de intercambio conllevan un alto nivel de riesgo y puede que no sean adecuados para todos. Antes de realizar operaciones se recomienda encarecidamente leer y asegurarse de entender la relevante información y advertencias de riesgo que presentamos: Declaración de Divulgación de Riesgos. Existe un riesgo importante de poder perder toda su inversión inicial. Le aconsejamos considerar si es apropiado el hacer trading con productos con apalancamiento a la luz de sus propias circunstancias personales. Le recomendamos buscar asesoramiento financiero independiente y asegurarse de entender completamente todos los riesgos involucrados antes de negociar. Negociar mediante una plataforma en línea conlleva riesgos adicionales. Para más detalles, consulte los Términos y condiciones.</p>
                </div>

            </div>

            <div className="absolute z-20 bg-black inset-0 bg-opacity-30" />

            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/contactanos.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
        </section>
    )
}

