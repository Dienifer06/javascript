
import { useEffect, useState } from "react";
import { filmeID } from "../services/api";
import { useSearchParams } from "react-router-dom";

export default function Movie(){
     
    const [buscaParam] = useSearchParams();
    const id = buscaParam.get("id")

    const [filme, setFilme] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("");

    useEffect (() =>  {
        async function carregaFilme(){
            try{
                setCarregando(true)
                setErro("")

                const dados = await filmeID(id);
                
                if(!dados){
                    throw new Error("filme não encontrado")
                }

                setFilme(dados)
            } catch(err){
                setErro(err.mensage)
            }finally{
                setCarregando(false);
            }


        }
        if (id){
            carregaFilme();
        }
    }, [id])

    if (carregando) { 
    return <p className="loading"> Carregando filme...</p>
    }
 
    if (erro) {
        return <p className="error">Erro: {erro}</p> // Tela de aviso de problema
    }
 
    if (!filme) {
        return <p className="error"> Nenhum filme para exibir.</p> // Tela de segurança
    }
 
    // 5. O Visual Final: Só aparece quando o 'filme' já está na memória
    return (
        <main>
            <h2>{filme.titulo}</h2>
            <div>
                <p>Ano: {filme.ano}</p>
                <p>Duração: {filme.duracao}</p>
            </div>
 
            <figure>
                <img src={filme.poster} alt={`Poster do filme ${filme.titulo}`} />
            </figure>
 
            <section>
                <h3>Categorias</h3>
                <ul>
                    {/* O .map percorre a lista de categorias e cria um <li> para cada uma */}
                    {filme.categorias.map((c) => (
                        <li>{c}</li>
                    ))}
                </ul>
            </section>
        </main>
    )

}