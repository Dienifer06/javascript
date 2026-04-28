
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

}