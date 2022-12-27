import P from 'prop-types';
import * as Styled from './styles';
import {MenuLink} from '../MenuLink';

export const NavLinks = ({links = []}) =>{
    return (
        <Styled.container>
            {links.map(link =>
                <MenuLink key={link.link} {...link} />
                )}
        </Styled.container>
    );
};
NavLinks.propTypes = {
    links:P.arrayOf(
        P.shape({
            children: P.string.isRequired,
            link:P.string.isRequired,
            newTabe: P.bool,
        }),
    ).isRequired,
};