import P from 'prop-types'
import * as styled from './styles';

export const Heading = ({children}) =>{
    return <styled.Title>{children}</styled.Title>;
};

Heading.propTypes = {children: P.node.isRequired};