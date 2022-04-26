import {useContext} from 'react';

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from '../contexts/ColorContext';

const Button = () => {
  const languageContext = useContext(LanguageContext);
  const colorContext = useContext(ColorContext);

  const text = languageContext === 'english' ? 'Submit' : 'Voorleggen';
  const color = colorContext === 'red' ? 'red' : 'primary';
  return (
    <button className={`ui button ${color}`}>{text}</button>
  )
}

export default Button;