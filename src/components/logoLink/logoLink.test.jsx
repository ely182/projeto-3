import {screen} from '@testing-library/react';
import { renderTheme} from '../../styles/render-theme';
import { logoLink } from '.';

describe('<logoLink />',   () =>{
    it('should render', () =>{
        renderTheme(<logoLink>children</logoLink>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});