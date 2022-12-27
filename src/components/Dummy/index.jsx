import P from 'prop-types';
import * as Styled from './styles';

export const Dummy = ({children}) =>{
    return (
        <Styled.container>
            <h1>Dummy</h1>
        </Styled.container>
    );
};
Dummy.propTypes = {
    children:P.node.isRequired,
};