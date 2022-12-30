import { P } from 'prop-types';
import * as Styled from './styles';
import {Heading} from '../Heading';

export const logoLink = ({text, srcImg='', link}) => {
    return (
        <Heading>

        <Styled.Container>
           {srcImg ? <img src={srcImg} alt={text}/> : <span>{text}</span>}
          
        </Styled.Container>
        </Heading>
    );
};
logoLink.prototype = {
  text: P.string.isRequired,
  image: P.string,
  link: P.string.isRequired,
};