import {screen} from '@testing-library/react';
import { renderTheme} from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />',   () =>{
    it('should render a link', () =>{
        renderTheme(<MenuLink link="http://localhost">children</MenuLink>);
        expect(screen.getByRole('link',{name:'children'})).toHaveAttribute('target', '_self');
    });
    it('should render open in a new tab', () =>{
        const {container} =renderTheme(
        <MenuLink link="http://localhost">
            children
            </MenuLink>
            );
        expect(container.firstChild)
        .toMatchInlineSnapshot();
    });
});