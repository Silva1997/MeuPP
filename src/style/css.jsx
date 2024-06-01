import React, { useEffect, useState } from 'react';
import './Estilo.css'; // Importe seu arquivo de estilos CSS

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentOffsetTop = document.getElementById('animatedText').offsetTop;
      const triggerPoint = contentOffsetTop - windowHeight + 100; // Defina a altura em que a animação deve ser acionada

      if (scrollPosition > triggerPoint) {
        setIsVisible(true); // Ative a animação quando o usuário rolar até o ponto de gatilho
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container ${isVisible ? 'visible' : ''}`}>


<div>
Me considero esforçado, organizado, proativo e consistente em aprender uma nova linguagem e me adaptar a qualquer mudança, tenho foco em resultado e gosto de ser bom no que faço.
</div>





      <div className="content" id="animatedText">Texto animado da esquerda para a direita</div>
    </div>
  );
};

export default AnimatedText;
