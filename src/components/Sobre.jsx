import {imgCoding} from "../coding.svg";

export default function Sobre() {
    return (
        <section id="sobre">
            <div className="conteiner mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-white">
                        Ola, eu sou o Miguel
                        <br className="hidden lg:inline-block" />Sou um Desenvolveor front-end
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Sou um estudante do curso analise e desenvolvimento de sistemas, atualmente no 5 periodo. Estou focando meu estudos em desenvolvimento
                        front-end, principalmente fazendo projetos. Procuro sempre criando a melhor experiencia do usuario. 
                    </p>
                    <div className="flex justify-center">
                        <a 
                        href="#contato" 
                        className="inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-950 rounded text-lg" >
                        Caso queira entrar em contato comigo
                        </a>
                        <a 
                        href="#projetos" 
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Aqui estão alguns dos meus projetos
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img 
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={imgCoding}
                    />
                </div>
            </div>
        </section>
    )
}
