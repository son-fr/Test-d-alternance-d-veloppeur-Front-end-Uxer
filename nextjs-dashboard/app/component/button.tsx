
import Get_position, {Item_position} from "../props/get_position";

type Button_props = {
    text?: string;
    height?: string;
    width?: string;
    color?: string;
    position?:  'left_up' | 'center_up' | 'right_up' | 
                'left_center' | 'center_center' | 'right_center' | 
                'left_bottom' | 'center_bottom' | 'right_bottom';
}

export default function Button({text, height = "full", width = "full", color = "white", position = "center_center"} : Button_props) {
    const Item_position : Item_position = Get_position(position);
    return (
        <button style={{ height: `${height}`, width: `${width}`, backgroundColor: `${color}`, alignItems: Item_position.align, justifyContent: Item_position.justify }} className={`flex gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]`}>
            {text}
        </button>
    )
}