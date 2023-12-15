import { useState } from "react";

import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";


export default function Contato() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessge] = useState("");

    function encode(value) {
        return Object.keys(value)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(value[key])
             )
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/', {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({ "form-name": "contato", name, email, message }),
        })
        .then(() => alert("Mensagem envida"))
        .catch((error) => alert(error))
    }

    return (
        <section id="contato">
            <div className="conteiner px-10 py-10 mx-auto flex md:flex-row flex-col items-center">
                <form 
                    netlify
                    name="contato"
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 px-10 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center"
                >
                    
                    <div className="w-full mb-10">
                        <h2 className="text-white sm:text-4x1 text-3x1 font-medium title-font">
                            Entre em contato comigo
                        
                        </h2>
                    </div>

                    <div className="w-full relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Nome
                        </label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea 
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessge(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 w-full border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Enviar
                    </button>
                </form>

                <div className="flex flex-col lg:max-w-lg lg:w-full md:w-1/2 text-center">
                    <h2 className="text-white sm:text-4x1 text-3x1 mb-1 font-medium">
                        Formas de contato
                    </h2>
                    <p className="mb-8 leading-relaxed">
                        Abaixo estão as formas de entrar em contato comigo. Além do meu github onde mostro outros projetos 
                        que eu fiz e meu linkedin onde mostro os certificados e conquistas que eu recebi
                    </p>

                    <div className="flex flex-col w-full">
                        <div className="flex flex-col items-center mb-10">
                            <div className="rounded flex p-2 items-center">
                                <CiMobile3 className="w-4 h-4 flex-shrink-0 mr-4"/>
                                <span className="text-white font-medium">(24) 98122-7340</span>
                            </div>
                            <div className="rounded flex p-2 items-center">
                                <MdOutlineEmail className="w-4 h-4 flex-shrink-0 mr-4"/>
                                <span className="text-white font-medium">mgdroid2003@gmail.com</span>
                            </div>
                        </div>

                        <div className="mx-auto flex items-center justify-between w-1/2">
                            <div>
                                <DiGithubBadge className="w-20 h-20"/>
                            </div>
                            <div>
                                <FaLinkedin className="w-10 h-20"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    )
}