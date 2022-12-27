import {screen} from '@testing-library/react';
import { renderTheme} from '../../styles/render-theme';
import { Dummy } from '.';

describe('<Dummy />',   () =>{
    it('should render', () =>{
        renderTheme(<Dummy>children</Dummy>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});