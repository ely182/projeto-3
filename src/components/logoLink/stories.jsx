import { logoLink } from '.';
export default{
    title:'logoLink',
    component: logoLink,
    args:{
        text:'logoLink',
        srcImg:'assets/images/logo.svg',
        link:'http://localhost',
    },
};

export const Template = (args) => {
    return(
        <div>
            <logoLink {...args}/>
        </div>
    );
};