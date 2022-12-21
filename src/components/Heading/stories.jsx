import { Heading } from '.';

export default {
    title: 'Heading',
    component: Heading,
    args:{
        children: 'texto escuro',
        light:false,
    },
    argType:{
        children:{type:'string',},
        light: {type:'boolean',},
    },
    parameters:{
        backgraounds:{
            default:'dark',
        },
    },
};

export const Light = (args) => <Heading {...args}/>;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
    backgraounds:{
        default:'light',
    },
};
Dark.args = {
   children:'texto claro',
   light:true,
}