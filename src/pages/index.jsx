import Head from "next/head";
import styled from "styled-components";

import ListaPosts from "@/components/ListaPosts";
import ListaCategorias from "@/components/ListaCategorias";

import { useState } from "react"; //importação da linha 8 useState(). Primeiro escreve useState
import serverApi from "./api/server"; // usamos na linha 16

/* EXECUTADA NO SERVIDOR/BACK-END 
            Função getStaticProps 
Utilizada para execução de código server-side (neste caso, fetch na API com o objetivo de gerar props com os dados processados)*/
export async function getStaticProps() {
  try {
    //TIREI ESSE  PELA FALTA 30/01  const resposta = await fetch(`${serverApi}/posts`); // antes era `http://10.20.46.34:2112/posts`

    const resposta = await fetch(`${serverApi}/posts.json`);

    const dados = await resposta.json();
    console.log(dados);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Colocando os dados dos objetos dentro de um array 
    1) Object.keys(dados): extrair as chaves/id de cada objeto para um array.
    2) Map no array de chaves, em que retornamos um novo objeto.
    3) Cada novo objeto (representado por post) é criado com
    os dados existentes (por isso, usamos o spread)
    4) No caso do id, atribuimos a própria chave de cada objeto. Portanto, em vez de ids numéricos, os ids passam a ser na aplicação o próprio hash/código de cada post.
    */
    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados[post],
        id: post,
      };
    });
    console.log(arrayDePosts);

    /* Extraindo as categorias dos posts para um novo array */
    // TIREI ESSE PELA FALTA 30/01 const categorias = dados.map((post) => post.categoria);
    const categorias = arrayDePosts.map((post) => post.categoria);

    /* Gerando um array de categorias ÚNICAS */
    const categoriasUnicas = [...new Set(categorias)];

    /* Após o processamento (desde que não haja erros), a getStaticProps retorna um objeto com uma propriedade chamada "props", e nesta propriedade colocamos um objeto com as props que queremos usar. No caso, usamos uma prop "posts" (podemos dar qualquer nome) e é nela que colocamos os dados. */
    return {
      props: {
        posts: arrayDePosts,
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

        <ListaCategorias
          /* Recebimento das props -- da ListaCategorias em  components */
          categorias={categorias}
          categoriaAtivo={categoriaAtiva}
          onfiltrar={filtrar}
          onlimparFiltro={limparFiltro}
          filtroAtivo={filtroAtivo}
        />

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
