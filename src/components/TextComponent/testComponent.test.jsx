import {screen} from '@testing-library/react';
import { renderTheme} from '../../styles/render-theme';
import { TextComponent } from '.';
import { container } from 'webpack';

describe('<TextComponent />',   () =>{
    it('should render a test', () =>{
        renderTheme(<TextComponent>children</TextComponent>);
        expect(screen.getByRole('children')).toBeInTheDocument();
    });
    it('should match snapshot', () =>{
       const {conteiner} = renderTheme(<TextComponent>children</TextComponent>);
        expect(container.firstchild).toMatchInlineSnapshot(`
        .c0{
            font-size: 2.4rem;
        }
        <p class="c0"
        >
        children
        </p>
        `);
    });
});
