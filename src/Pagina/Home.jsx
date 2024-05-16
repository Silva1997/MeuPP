import React from 'react';
import { Carousel, Card ,Input} from 'antd';
import foto from '../assets/imagens.png';
import Photo from '../assets/friends.png';
import foto1 from '../assets/image3.png';
import foto2 from '../assets/image1.png';
import '../style/Estilo.css'; // Importando o arquivo CSS onde as classes serão definidas
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
    <div className='INput'  >
    <Input size="large" className='inputs'  placeholder="Procurar itens perdidos" prefix={<SearchIcon color='primary' />} />
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
          <NotificationsNoneIcon className="icon" color='#fff'/>
          </div>
          
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
             <NotificationsNoneIcon className="icon" color='#fff'/>
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>

        <Card bordered={false} className="card-style">
          <div className="circle">
             <NotificationsNoneIcon className="icon" color='#fff'/>
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>
        
        <Card bordered={false} className="card-style">
          <div className="circle">
             <NotificationsNoneIcon className="icon" color='#fff'/>
          </div>
          <img className="card-image" src={Photo} alt="Ac" />
        </Card>
      </div>
    </>
  );
};

export default App;
