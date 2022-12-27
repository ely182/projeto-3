import styled, { css } from 'styled-components';
import { theme} from './styles/render-theme';

const titleSize = {
    small:(theme) => css`
    font-size: ${theme.sizes.medium};
    `,
    medium:(theme) => css`
    font-size: ${theme.sizes.large};
    `,
    big:(theme) => css`
    font-size: ${theme.sizes.xlarge};
    `,
    big:(theme) => css`
    font-size: ${theme.sizes.xhuge};
    `,
    huge:(theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
    `,
};
const mediaFont = (theme) => css`
@media ${theme.media.lteMedium}{
    font-size: ${theme.font.size.xlarge};
}
`;



const titleCase =(upperCase)=>css`
text-transform: ${upperCase ? 'uppercase' : 'none'};

`;

export const Title = styled.h1`
$ {({theme, colorDark, size })=> css`
color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
${titleSize[size](theme)};
${titleCase(upperCase)};
`}
`;