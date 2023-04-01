import React from 'react';
import performer from '../../images/performer.jpg';
import './performer.scss';
import '../../styles/global.scss';

const Performer = () => {
  return (
    <div id='performerCont'>
      <h2 className='webfont'>Performer</h2>
      <div className='wrapper'>
        <div id='imgCont'>
          <img src={performer} alt='Enfermedades Espirituales' />
        </div>
        <div id='textCont'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            bibendum pulvinar condimentum. Quisque id vulputate enim. Nam
            gravida non felis vitae pulvinar. Nunc eget tincidunt justo, et
            dictum mauris. Mauris mattis lacus efficitur sapien porta fringilla.
            Curabitur dictum mi maximus odio fringilla imperdiet. Aenean euismod
            metus nulla, volutpat vestibulum lacus dapibus a. Quisque lacus
            urna, dapibus at lorem ut, malesuada ultricies nunc. Aliquam
            vestibulum luctus mauris, vitae tincidunt ligula blandit quis.
            Suspendisse tincidunt magna mi, non faucibus lectus mattis a.
            Vestibulum egestas mi venenatis dapibus semper.
          </p>
        </div>
      </div>
      <div className='home-buttons webfont'>
        <a href='#'>Saber Más</a>
      </div>
    </div>
  );
};

export default Performer;
