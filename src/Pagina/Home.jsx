import React from 'react';
import { Carousel, Card, Input } from 'antd';
import foto from '../assets/imagens.png';
import Photo from '../assets/friends.png';
import foto1 from '../assets/image3.png';
import foto2 from '../assets/image1.png';
import '../style/Estilo.css'; // Importando o arquivo CSS onde as classes serão definidas
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { FloatButton } from 'antd';
const App = () => {
  const [pesquisar, setPesquisar] = React.useState();
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
        <Input size="large" className='inputs' placeholder="Procurar itens perdidos" prefix={<SearchIcon color='primary' />}
          value={pesquisar}
          onChange={(e) => setPesquisar(e.target.value)}
          onKeyDown={handlePesquisa}
        />
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
      {/*  */}
      <div className="card-container">
        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>

          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

      </div>




      <div className='descricao'>
        <div style={{ color: '#000', textAlign: 'justify' }}>
          <div className='H6menu'>
            <h6 id='H6'>Sobre nos</h6>
          </div>
          <p>
            Bem-vindo ao [Nome do Site], o seu portal
            confiável para encontrar e recuperar documentos
            perdidos! Nossa missão é reunir pessoas com seus
            documentos perdidos de forma rápida, segura e eficiente.
            Sabemos o quão estressante pode ser perder um documento importante,
            como um Bilhete de Identidade (BI) ou uma carta de condução, e estamos aqui para ajudar.

          </p>
        </div>
        <div style={{ color: '#000', textAlign: 'justify' }}>
          <div className='H6menu'>
            <h6  id='H6' >Quem Somos</h6>
          </div>

          <p>
            Somos uma equipe dedicada de profissionais comprometidos em fornecer
            um serviço comunitário valioso. Nosso site foi criado para servir como
            um ponto centralizado onde pessoas podem registrar
            documentos perdidos e encontrados, facilitando a devolução segura
            dos mesmos aos seus legítimos proprietários.
          </p>
        </div>
      </div>



      {/* <div className="card-container">
        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>

          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
            <NotificationsNoneIcon className="icon" color='#fff' />
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>
       
      </div> */}


      <FloatButton.BackTop style={{
        right: 24
      }} />
      <Rodape />

    </>
  );
};

export default App;




// Componente de rodapé
function Rodape() {
  return (
    <footer className="site-footer">

      <div className='divfooter' >
        <div style={{ marginTop: '2rem', marginLeft: '2rem' }}>
          <input type="text" placeholder='Digite o seu email' className='Entrada' />
          <h6>
            Contactos
          </h6>
          <p>Alcance seus objetivos de encontrar itens</p>
        </div>

      </div>

      <div className='divfooter' >
        <div style={{ marginTop: '2rem', padding: '4px 4px' }}>
          <h6>
            Notocia
          </h6>
          <p>  Encontre seus itens perdidos com facilidade</p>



        </div>
        {/* <ul className="social-icons">
          <li><a className="facebook" href="#"><FaFacebook /></a></li>
          <li><a className="twitter" href="#"><FaTwitter /></a></li>
          <li><a className="dribbble" href="#"><FaDribbble /></a></li>
          <li><a className="linkedin" href="#"><FaLinkedin /></a></li>
        </ul> */}

      </div>
      <div className='divfooter'>
        <div style={{ marginTop: '2rem', padding: '4px 4px' }}>
          <h6>
            Suporte
          </h6>
          <p>  Valorize suas posses encontrando-as facilmente</p>
        </div>
      </div>

    </footer>
  );
}


