
import { useEffect, useState } from "react";
import { bsucarFilmes } from "../services/api";
import { Link } from "react-router-dom";
import "./movieList.css";

export default function MoveList(){
    const [filmes, setFilmes] = useState([])
    const [error, setError] = useState("");
    const [loading, setloading] = useState(true);

    useEffect(()=> {
        async function carregaFilme(){
            try{
                const dados = await bsucarFilmes();
                setFilmes(dados);
            }catch{
                setError("Não foi possivel carregar os filmes.")
            }finally{
                setloading(false);
            }
        }
        carregaFilme();

    }, [])

    if(loading){
        return <p className="status"> carregando filmes...</p>
    }

    if (error){
        return <p className="status error">{error}</p>
    }

    return(
        <section className="film-section">
            <h2>catalago de filmes</h2>

            <div className="filme-grid">
                {filmes.map((film) => (
                    <article className="filme-card" key={film.id}>
                       <Link to={`/filme?id=${film.id}`}>
                        <img src={film.imagem} alt={`Poster do filme ${film.titulo}` }/>
                        <div className="filme-info">
                                <h3>{film.titulo}</h3>
                                <p>{film.ano}</p>
                        </div>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}

// usestate garante para variaveis ficarem ok