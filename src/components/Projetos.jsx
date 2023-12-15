import { Projects } from "../dataProjetos";

export default function Projetos() {
    return (
        <section id="projetos" className="text-gray-400 bg-gray-900 font-body">
            <div className="conteiner px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="mx-auto inline-block w-10 mb-4">
                        <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>

                    <h1 className="sm:text-4x1 text-3x1 font-medium title-font mb-4 text-white">
                        alguns projetos que eu construír
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis in 
                        dignissimos perferendis, dolor dicta voluptatem minus eveniet voluptas nobis
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {Projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-full p-4">
                            <div className="flex relative">
                                <img 
                                    alt="galeria e projetos"
                                    className="absolute inset-0 w-full h-full object-contain object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                                        {project.tec}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.desc}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}