import React from 'react';
import { Carousel, Card, Input } from 'antd';
import foto from '../assets/imagens.png';
import Photo from '../assets/friends.png';
import foto1 from '../assets/image3.png';
import foto2 from '../assets/image1.png';
import '../style/Estilo.css'; // Importando o arquivo CSS onde as classes serão definidas
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
// Importe os ícones necessários do FontAwesome para usar
import { FaFacebook, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa';
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
      <div className="container">
        <Carousel afterChange={onChange}>
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
      <div style={{marginTop:'2rem',marginLeft:'2rem'}}>
        <h6>
          Alcance seus objetivos de encontrar itens
        </h6>
        <p>Alcance seus objetivos de encontrar itens</p>
</div>
        <ul className="social-icons">
          <li><a className="facebook" href="#"><FaFacebook /></a></li>
          <li><a className="twitter" href="#"><FaTwitter /></a></li>
          <li><a className="dribbble" href="#"><FaDribbble /></a></li>
          <li><a className="linkedin" href="#"><FaLinkedin /></a></li>
        </ul>
      </div>

      <div className='divfooter' >
        <div style={{ marginTop: '2rem',padding:'4px 4px' }}>
          <h6>
            Encontre seus itens perdidos com facilidade
          </h6>
          <p>Alcance seus objetivos de encontrar itens</p>


        </div>

      </div>
      <div className='divfooter'>
        <div style={{ marginTop: '2rem',padding:'4px 4px'}}>
          <h6>
            Valorize suas posses encontrando-as facilmente
          </h6>
          <p>Alcance seus objetivos de encontrar itens</p>
        </div>
      </div>

    </footer>
  );
}


