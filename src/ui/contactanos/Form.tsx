"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useRef } from "react";
import { getSecret } from "@/action/secret";

interface FormData {
    name: string;
    email: string;
    tel: string;
    plans: "Futuro seguro" | "Impulsa tu futuro" | "Elige un plan";
    call: string;
}

export default function Form() {
    const form = useRef<HTMLFormElement>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();




    const submit = async () => {

        const secret = await getSecret()

        emailjs
            .sendForm(secret.serviceId, secret.templateId, form.current!, secret.publicKey)
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Mensaje enviado",
                        showConfirmButton: false,
                        timer: 1000,
                    });

                    reset({
                        name: "",
                        call: "",
                        email: "",
                        plans: "Elige un plan",
                        tel: ""
                    });
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={handleSubmit(submit)} className=" flex justify-center items-center flex-grow pt-10">
            <div className="max-w-[950px] grid md:grid-cols-2 gap-8 md:gap-x-16 w-full">
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="name" className="text-2xl">Nombre Completo</label>
                    <div className="relative p-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl">
                        <input
                            id="name"
                            {...register("name", { required: true })}
                            type="text"
                            className="w-full p-4 rounded-2xl bg-white border-none outline-none text-black"
                            placeholder="Nombre"
                        />
                    </div>
                    {errors.name && <p className="text-red-500 text-xl pl-6">* Campo requerido</p>}
                </div>

                <div className="flex flex-col gap-2 ">
                    <label htmlFor="tel" className="text-2xl">Teléfono</label>
                    <div className="relative p-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl">
                        <input
                            id="tel"
                            {...register("tel", { required: true })}
                            type="text"
                            className="w-full p-4 rounded-2xl bg-white border-none outline-none text-black"
                            placeholder="# celular ó fijo"
                        />
                    </div>
                    {errors.tel && <p className="text-red-500 text-xl pl-6">* Campo requerido</p>}
                </div>

                <div className="flex flex-col gap-2 ">
                    <label htmlFor="email" className="text-2xl">Correo electrónico</label>
                    <div className="relative p-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl">
                        <input
                            id="email"
                            {...register("email", { required: true })}
                            type="email"
                            className="w-full p-4 rounded-2xl bg-white border-none outline-none text-black"
                            placeholder="cliente@gmail.com"
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xl pl-6">* Campo requerido</p>}
                </div>

                <div className="flex flex-col gap-2 ">
                    <p className="text-2xl">Plan de contacto</p>
                    <div className="relative p-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl">
                        <select
                            {...register("plans")}
                            className="w-full p-4 rounded-2xl bg-white border-none outline-none text-gray-700 cursor-pointer"
                        >
                            <option value="Elige un plan" className="text-gray-400">Elige un plan</option>
                            <option value="Futuro seguro">Futuro seguro</option>
                            <option value="Impulsa tu futuro">Impulsa tu futuro</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <label htmlFor="call" className="text-2xl">Horario de llamada</label>
                    <div className="relative p-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl">
                        <input
                            id="call"
                            {...register("call")}
                            type="text"
                            className="w-full p-4 rounded-2xl bg-white border-none outline-none text-black"
                            placeholder="ejm: 08:00am - 01:00pm"
                        />
                    </div>
                </div>

                <button className="bg-gradient-to-b from-custom-purple to-custom-pink text-white text-xl font-bold rounded-full px-12 py-3 md:col-span-2 max-w-max justify-self-center">
                    Enviar
                </button>
            </div>
        </form>
    );
}
