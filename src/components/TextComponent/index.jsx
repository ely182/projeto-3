import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({children}) =>{
    return (
        <Styled.container>
           {children}
        </Styled.container>
    );
};
TextComponent.propTypes = {
    children:P.node.isRequired,
};