"use server"

export const getSecret = async () => {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;


    if (!serviceId || !templateId || !publicKey) {
        throw new Error("Las claves de entorno no están definidas");
    }

    return { serviceId, templateId, publicKey }
}