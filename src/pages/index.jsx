import Head from "next/head";
import styled from "styled-components";

import ListaPosts from "@/components/ListaPosts";

import { useState } from "react"; //importação da linha 8 useState(). Primeiro escreve useState
import serverApi from "./api/server"; // usamos na linha 16

/* EXECUTADA NO SERVIDOR/BACK-END 
            Função getStaticProps 
Utilizada para execução de código server-side (neste caso, fetch na API com o objetivo de gerar props com os dados processados)*/
export async function getStaticProps() {
  console.log("Código de servidor (não aparece no cliente)...");

  try {
    const resposta = await fetch(`${serverApi}/posts`); // antes era `http://10.20.46.34:2112/posts`
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Extraindo as categorias dos posts para um novo array */
    const categorias = dados.map((post) => post.categoria);
    console.log(categorias);

    /* Gerando um array de categorias ÚNICAS */
    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    /* Após o processamento (desde que não haja erros), a getStaticProps retorna um objeto com uma propriedade chamada "props", e nesta propriedade colocamos um objeto com as props que queremos usar. No caso, usamos uma prop "posts" (podemos dar qualquer nome) e é nela que colocamos os dados. */
    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim:" + error.message);

    /* Esse return  notFound: true é para retorna o erro 404 da pagina404.jsx. Precisa fazer, pois os dados são dinamicos    */
    return {
      notFound: true,
    };
  }
}
//posts pegamos da return linha 20 o {posts}
export default function Home({ posts, categorias }) {
  //Passa a passo do react-fundamento na parte  produto
  const [listaDePosts, SetListaDePosts] = useState(posts);

  //Fazer o botão Limpar filtro sumir / só aparecer quando clicamos no botão categorias(Bem-estar Comportamento) ai foi feito a const limparfiltro
  const [filtroAtivo, setFiltroAtivo] = useState(false);

  //Deixar o botão ativo quando clica
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  //função para filtrar as categorias(Bem-estar Comportamento) quando aperta botão da linha 85 que está StyledCategorias
  const filtrar = (event) => {
    /* Atenção: utilize  textContent  em vez de innerText, pois textContent captura o texto real do HTML/JSX sem levar em consideração estilo CSS. mudamos no css o  text-transform: capitalize a primeira letra era minuscula e deixamos maiuscula*/

    const categoriaEscolhida = event.currentTarget.textContent;

    // esse posts é da função Home
    const novaListaDePosts = posts.filter(
      (post) => post.categoria === categoriaEscolhida
    );

    // Sinalizando o state como filtro ativo (true) - Fazendo o botão Limpar filtro aparecer
    setFiltroAtivo(true);

    SetListaDePosts(novaListaDePosts);

    // Sinalizando o state com o texto/categoria escolhida  - Deixar o botão ativo quando clica
    setCategoriaAtiva(categoriaEscolhida);
  };

  const limparFiltro = () => {
    //Fazendo o botão Limpar filtro sumir -- Sinalizando o state como filtro inativo (false)
    setFiltroAtivo(false);

    //Atualizando o state da listaDePosts para os posts originais
    SetListaDePosts(posts);

    //Atualizando o state da categoria ativo para vazio
    setCategoriaAtiva("");
  };

  return (
    <>
      <Head>
        <title>PetShop 2024</title>
        <meta
          name="description"
          contente="Au au au! Melhor PetShop da região"
        />
        <meta
          name="Keywords"
          content="Ração, brinquedos, banho, coleira, Gato, Cachorro, petshop"
        />
        {/* meta name="Keywords" é tipo uma # para encontrar o site */}
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      <StyledHome>
        <h2>Pet Notícias</h2>

        <StyledCategorias>
          {categorias.map((categoria, indice) => {
            return (
              <button
                /*  className é para deixar o botão ativado com outra cor quando clicar. O "ativo" é o css  */
                className={categoria === categoriaAtiva ? "ativo" : ""}
                onClick={filtrar}
                /* key={indice} é para parar de dar erro no console do navegador */
                key={indice}
              >
                {categoria}
              </button>
            );
          })}

          {/* //Botão pata Limpeza do filtro de categoria  do botão de cima */}
          {filtroAtivo && (
            <button onClick={limparFiltro} className="limpar">
              Limpar filtro
            </button>
          )}
        </StyledCategorias>

        {/* arrayPosts vem da pasta api / array-posts */}
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1rem 0;

  button {
    text-transform: capitalize;
    background-color: var(--cor-logo);
    color: var(--cor-primaria);
    padding: 0.5em;
    border: none;
    cursor: pointer;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    margin: 10px;

    &:hover {
      background-color: var(--cor-primaria-fundo-hover);
    }

    &.ativo {
      background-color: var(--cor-primaria-fundo);
    }
  }

  .limpar {
    background-color: #5e6976;
    &:hover {
      background-color: slategrey;
    }
    &::before {
      content: "🧹 ";
    }
  }
`;
