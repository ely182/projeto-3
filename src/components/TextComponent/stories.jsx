import { TextComponent } from '.';
export default{
    title:'TextComponent',
    component: TextComponent,
    args:{
        children: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Nesciunt sit accusantium quasi corporis. 
        Nihil, mollitia! Veritatis sed magnam facilis numquam praesentium quia, 
        neque itaque? Aliquid voluptatibus itaque est consequuntur nulla.`,
    },
    argsType:{
        children:{type:'string'},
    },
};

export const Template = (args) => {
    return(
        <div>
            <TextComponent {...args}/>
        </div>
    );
};