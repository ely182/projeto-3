/* eslint-disable import/no-anonymous-default-export */
import { NavLinks } from '.';
import links from './mock'


export default{
    title:'NavLinks',
    component: NavLinks,
    args:{
        links:links,
    },
 argsTypes:{
    links:{type:''},
 }
};

export const Template = (args) => {
    return(
        <div>
            <NavLinks {...args}/>
        </div>
    );
};