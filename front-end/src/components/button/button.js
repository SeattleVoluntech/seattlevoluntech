import React from 'react';
import posed from 'react-pose';

const Posedbutton = posed.button({
  hoverable: true,
  pressable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 },
  press: { scale: 1.1 },
});

const Button = (props) => {
  return (
    <Posedbutton {...props} className='posed-button'/>
  );
};

export default Button;
