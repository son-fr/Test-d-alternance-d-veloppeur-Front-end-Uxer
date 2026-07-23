import Image from "next/image";
import Get_position, {Item_position} from "../props/get_position";
import Draw_Icons, {Icons_name} from "../props/get_icons";
import Get_shape from "../props/get_shape";

type Button_props = {
    text?: string;
    height?: number;
    width?: number;
    color?: string;
    position?:  'left_up' | 'center_up' | 'right_up' | 
                'left_center' | 'center_center' | 'right_center' | 
                'left_bottom' | 'center_bottom' | 'right_bottom';
    icons?: [left_icon?: Icons_name, right_icon?: Icons_name];
    text_size?: [left_icon?: number, font_size?: number, right_icon?: number];
    button_shape?: 'rectangle' | 'rounded' | 'feather';
    border?: number;
}

export default function Button({text, 
                                height = 15, width = 15, 
                                color = "white", 
                                position = "center_center", 
                                icons = ['none', 'none'], 
                                text_size = [15, 20, 15], 
                                button_shape = 'rounded', border = 0} : Button_props) {
    const Item_position : Item_position = Get_position(position);
   const Shape_button : string = Get_shape(button_shape);
 
    return (
        <button style={{height: `${height}px`, width: `${width}px`, fontSize: `${text_size[1]}px`,
                        backgroundColor: `${color}`, 
                        alignItems: Item_position.align, justifyContent: Item_position.justify, 
                        borderRadius: Shape_button, border: `${border}px solid` }} 
                        className={`flex gap-2 bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]`}>
            {Draw_Icons(icons[0], text_size[0], text_size[0])}  
            {text}
            {Draw_Icons(icons[1], text_size[2], text_size[2])}
        </button>
    )
}