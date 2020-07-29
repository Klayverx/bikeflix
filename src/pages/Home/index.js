import React from 'react';
import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (

    <div>
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Agora todas as profissões estão sendo impactadas com essa nova Inteligência Artificial... literalmente não vai sobrar mais pra ninguém e nesse vídeo é mostrado várias demonstrações do GPT-3 sendo aplicado em diversos campos!"}
          />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
          />

        <Carousel
          category={dadosIniciais.categorias[1]}
          />

        <Carousel
          category={dadosIniciais.categorias[2]}
          />      

        <Carousel
          category={dadosIniciais.categorias[3]}
          />      

        <Carousel
          category={dadosIniciais.categorias[4]}
          />      

        <Carousel
          category={dadosIniciais.categorias[5]}
          />
      </PageDefault>
    </div>
  );
}

export default Home;
