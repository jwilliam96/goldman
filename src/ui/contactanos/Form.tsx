"use client"

import { useForm } from "react-hook-form"


interface FormData {
    name: string
    email: string
    cc: string
    tel: string
    plans: string
    call: string
}

export default function Form() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()


    const submit = (data: FormData) => {

        reset({
            name: "",
            call: "",
            cc: "",
            email: "",
            plans: "",
            tel: ""
        })

    }

    return (
        <form onSubmit={handleSubmit(submit)} className=" flex justify-center items-center flex-grow">
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
                            placeholder="Nombre"
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
                            placeholder="Nombre"
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xl pl-6">* Campo requerido</p>}
                </div>

                <div className="flex flex-col gap-2 ">
                    <label htmlFor="plans" className="text-2xl">Plan de contacto</label>
                    <div className="relative p-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl">
                        <input
                            id="plans"
                            {...register("plans")}
                            type="text"
                            className="w-full p-4 rounded-2xl bg-white border-none outline-none text-black"
                            placeholder="Nombre"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <label htmlFor="cc" className="text-2xl">N° de Identificación</label>
                    <div className="relative p-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl">
                        <input
                            id="cc"
                            {...register("cc")}
                            type="text"
                            className="w-full p-4 rounded-2xl bg-white border-none outline-none text-black"
                            placeholder="Nombre"
                        />
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
                            placeholder="Nombre"
                        />
                    </div>
                </div>
                <button className={`bg-gradient-to-b from-custom-purple to-custom-pink text-white text-xl font-bold rounded-full px-12 py-3 md:col-span-2 max-w-max justify-self-center`}>Enviar</button>
            </div>

        </form>
    )
}
