// packages
import React from 'react';

//assets
import thankyou from '../../../assets/thankyou.jpg';

// styles
import './thank-you.scss';

const ThankYou = (props) => {
  return (
      <div className='thank-you flex'>
        <h3>Thank you</h3>
        <p>Thank you for signing up for this project! The project owner will
          contact you for next steps.</p>
        <img src={thankyou} alt='Image of grateful heart icon'/>
      </div>
  );
};

export default ThankYou;
