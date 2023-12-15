import { FaArrowRight } from "react-icons/fa6";

export default function NavBar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="conteiner mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#sobre" className="ml-3 text-xl">
                        Miguel
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projetos" className="mr-5 hover:text-white">
                        Projetos criados
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Tecnologias
                    </a>
                </nav>
                <a
                    href="#contato"
                    className="inline-flex items-center bg-gray-800 border-1 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Entre em contato comigo
                    <FaArrowRight className="h-4 w-4 ml-1"/>
                </a>
            </div>
        </header>
    )
}