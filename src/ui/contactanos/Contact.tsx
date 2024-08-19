import { sanOne } from "../font";
import Form from "./Form";

export function Contact() {
    return (
        <section id="contact" className="min-h-screen relative flex">

            <div className="relative z-50 container mx-auto px-4 py-20 space-y-6 flex-grow flex flex-col gap-4">
                <h2 className={`text-3xl ss:text-5xl md:text-6xl ${sanOne.className}`}>CONTÁCTENOS</h2>
                <p>Rellena el formulario para que uno de nuestros socios
                    <br />
                    se ponga en contacto contigo
                </p>

                <Form />

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

