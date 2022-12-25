import styled, { css } from 'styled-components';

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
};

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