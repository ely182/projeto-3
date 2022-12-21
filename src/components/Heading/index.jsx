import P from 'prop-types'
import * as styled from './styles';

export const Heading = ({children,light = false}) =>{
    return <styled.Title light={light}>{children}</styled.Title>;
};

Heading.propTypes = {
    children: P.node.isRequired,
    light: P.bool.isRequired,
};