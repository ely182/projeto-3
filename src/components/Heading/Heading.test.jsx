import { ThemeConsumer, ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from "../../styles/render-theme";
import { theme} from './styles/render-theme';

describe('<Heading/>', () => {
    it('should render with default values', () => {
    const { debug } =  renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto'});

    expect(heading).toHaveStyle({
        color: theme.colors.primeryColor,
        'font-size':theme.font.size.xhuge,
        'text-transform': 'none',
        });
    });
    it('should render with white color', () => {
        renderTheme(<Heading colorDark={false}>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto'});
    
        expect(heading).toHaveStyle({
            color: theme.colors.white,         
            });
        });
        it('should render correct heading sizes', () => {
            const {rerender } = renderTheme(<Heading size="small">texto</Heading>);
            const heading = screen.getByRole('heading', { name: 'texto'});
        
            expect(heading).toHaveStyle({
               'font-size':theme.font.sizes.medium,
                });
                rerender(<ThemeProvider theme={theme}>
                    <Heading size="big">texto</Heading>
                    </ThemeProvider>
                    );
                    expect(screen.getByRole('heading',{name:'texto'})).toHaveStyle
                    'font-size': theme.font.size.xlarge,
            });
});