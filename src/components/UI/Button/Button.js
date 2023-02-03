import React from 'react';

import './Button.css';

const Button = props => {
  // const [valid, setvalid] = useState(false);
  // if(props.valid){
  //   setvalid(true);
  //   return;
  // }
 
  return (
    <button type={props.type} style={{background:`${props.valid?'#8b005d':'#eacbe0'}`}} className='button' onClick={props.onClick}>
      {props.children}
      
    </button>
  );
};

export default Button;
