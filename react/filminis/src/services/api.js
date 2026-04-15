const API_URL = import.meta.env.VITE_API_URL;


export async function bsucarFilmes(){
    try {
        const resposta = await fetch(`${API_URL}/listagem`)

        if(!resposta.ok){
            throw new Error("erros oa buscra filmes")
        }

        const dados = await resposta.json();
        return dados;
    } catch(erro){
        console.error("Erro na API: ", erro)
        return [];
    }

}

// fatch = resposta de algo 