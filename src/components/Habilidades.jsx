import { FaCircleCheck } from "react-icons/fa6";
import { Skills } from "../dataSkills";

export default function Habilidades() {
    return (
        <section id="skills">
            <div className="conteiner px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
                        Habilidades &amp; Tecnologias
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam porro 
                        impedit voluptatum reprehenderit dolorum possimus tempore, voluptatem
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {Skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                           <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                                <FaCircleCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>    
    )
}