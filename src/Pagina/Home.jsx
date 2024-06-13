import React, { useState, useEffect } from 'react';
import { Carousel, Card, Input } from 'antd';
import foto from '../assets/imagens.png';
import Photo from '../assets/carteira-de-identidade.png';
import foto2 from '../assets/image1.png';
import foto1 from '../assets/image1.png';
import imagem from '../assets/home-1.png';
//
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
//
import '../style/Estilo.css'; // Importando o arquivo CSS onde as classes serão definidas
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { FloatButton } from 'antd';
const App = () => {

  const [isHalfway, setIsHalfway] = useState(false);
  const [pesquisar, setPesquisar] = React.useState();


  useEffect(() => {
    function handleScroll() {
      const descricaoElement = document.querySelector('.descricao');
      const descricaoPosition = descricaoElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Verifica se a descrição está pelo menos a metade visível na tela
      if (descricaoPosition < windowHeight / 2) {
        setIsHalfway(true);
      } else {
        setIsHalfway(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const handlePesquisa = (e) => {

    if (e.key === 'Enter') {
      console.log(pesquisar);
    }
    else {
      return ''
    }
  };


  return (
    <>
      <div className='INput'  >
        <Input size="large" className='inputs' placeholder="Perdeu algum documento ou objecto ?" prefix={<SearchIcon color='primary' fontSize='10px' />}
          value={pesquisar}
          onChange={(e) => setPesquisar(e.target.value)}
          onKeyDown={handlePesquisa}
        />
        <button className='ButaoN' type="submit">
          Pesquisar
        </button>
      </div>
      {/*  */}
      <div className="container" style={{

        padding: 10,
      }}>
        <Carousel afterChange={onChange} autoplay>
          <div>
            <span className="content-style">
              <img className="image-style" src={foto} alt="Foto 1" />
            </span>
          </div>
          <div>
            <span className="content-style">
              <img className="image-style" src={foto1} alt="Foto 2" />
            </span>
          </div>
          <div>
            <span className="content-style">
              <img className="image-style" src={foto2} alt="Foto 3" />
            </span>
          </div>
        </Carousel>

      </div>
      <section className='Textos'>
        <h2 className='textoH2'>
          Bem-vindo ao o seu portal<br />
          confiável para encontrar e recuperar documentos
          perdidos!
        </h2>
        <h3 className='texto1'>
          Nossa missão é reunir pessoas com seus
          documentos perdidos de forma rápida, segura e eficiente.<br />
          Sabemos o quão estressante pode ser perder um documento importante,
          como um Bilhete de Identidade (BI) ou uma carta de condução, e estamos aqui para ajudar.
        </h3>
      </section>
      {/*Cartao de conteudo  */}
      <div className="card-container">
        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <div className='descIdentidade'>
            <img className="card-image" src={Photo} alt="Ac" />
            <div className='posicao_desc'>
              <h5>Nome: ####</h5>
              <h5>BI:#####</h5>
            </div>
          </div>

        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <div className='descIdentidade'>
            <img className="card-image" src={Photo} alt="Ac" />
            <div className='posicao_desc'>
              <h5>Nome: ####</h5>
              <h5>BI:#####</h5>
            </div>
          </div>
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <div className='descIdentidade'>
            <img className="card-image" src={Photo} alt="Ac" />
            <div className='posicao_desc'>
              <h5>Nome: ####</h5>
              <h5>BI:#####</h5>
            </div>
          </div>
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <div className='descIdentidade'>
            <img className="card-image" src={Photo} alt="Ac" />
            <div className='posicao_desc'>
              <h5>Nome: ####</h5>
              <h5>BI:#####</h5>
            </div>
          </div>
        </Card>

      </div>
      {/*Descricao da empresa  */}
      <div>
        <h4 id='H7'>SOBRE NÓS</h4>
        <h4 id='H5'>Sobre nós</h4>
        <div className={`descricao ${isHalfway ? 'animate-slide' : ''}`}>
          <div style={{ color: '#000', textAlign: 'justify' }}>
            <div className='H6menu'>
              <h6 id='H6' >Quem Somos ?</h6>
            </div>
            <p className='textoparagrafo'>
              Somos uma equipe dedicada de profissionais comprometidos em fornecer
              um serviço comunitário valioso. Nosso site foi criado para servir como
              um ponto centralizado onde pessoas podem registrar
              documentos perdidos e encontrados, facilitando a devolução segura
              dos mesmos aos seus legítimos proprietários.
            </p>
          </div>

          <div>
            <img src={imagem} alt='Pessoa' className='imagemPrincipal' />
          </div>
        </div>
      </div>

      {/*  */}
      <div>


        {/* Texto */}

      </div>




      <FloatButton.BackTop style={{
        right: 45
      }} />
      <Rodape />

    </>
  );
};

export default App;




// Componente de rodapé
function Rodape() {
  return (
    <>
      <footer className="site-footer">

        <div className='divfooter' >
          <div style={{ marginTop: '2rem', marginLeft: '2rem' }}>
            {/* <input type="text" placeholder='Digite o seu email' className='Entrada' /> */}
            <h6 id='h6p' >
              Contactos
            </h6>
            <p id='h6pp' > Alcance seus objetivos de encontrar itens</p>
          </div>

          <div>
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FaFacebook /></a></li>
              <li><a className="facebook" href="#"><FaInstagram /></a></li>
              <li><a className="facebook" href="#"><FaXTwitter /></a></li>
            </ul>
          </div>


        </div>

        <div className='divfooter' >
          <div style={{ marginTop: '2rem', padding: '4px 4px' }}>
            <h6 id='h6p' >
              Notícia
            </h6>
            <p id='h6pp' >  Encontre seus itens perdidos com facilidade</p>



          </div>


        </div>
        <div className='divfooter'>
          <div style={{ marginTop: '2rem', padding: '4px 4px' }}>
            <h6 id='h6p' >
              Suporte
            </h6>
            <p id='h6pp' >  Valorize suas posses encontrando-as facilmente</p>
          </div>
        </div>





      </footer>



    </>

  );
}


