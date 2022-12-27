import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({children, link, newTab = false}) =>{
    const target = newTab ? '_blank' : '_self';
    return (
        <Styled.container href={link} target={target}>
            {children}
        </Styled.container>
    );
};
MenuLink.propTypes = {
    children:P.node.isRequired,
    link:P.string.isRequired,
    newTab: P.bool,
};