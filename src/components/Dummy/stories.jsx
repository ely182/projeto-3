import { Dummy } from '.';
export default{
    title:'Dummy',
    component: Dummy,
    args:{
        children:'Dummy',
    },
    argsType:{
        children:{type:'string'},
    },
};

export const Template = (args) => {
    return(
        <div>
            <Dummy {...args}/>
        </div>
    );
};