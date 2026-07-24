import Get_position, {Item_position} from "@/app/props/get_position";
import Draw_Icons, {Icons_name} from "@/app/props/get_icons";
import Get_shape from "@/app/props/get_shape";
import {inter, lusitana, manrope, space_grotesk, sora} from "@/app/ui/font"

type Button_props = {
    text?: string;
    font?: typeof inter | typeof lusitana | typeof manrope | typeof space_grotesk | typeof sora;
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

/**
 * Show a personalisable button.
 *
 * @param {string} text - The text of the button. (default: empty)
 * @param {font} font - The font of the text. (default: inter)  
 * @param {number} height - The height of the button (in px). (default: 15)
 * @param {number} width - The width of the button (in px). (default: 15)
 * @param {string} color - The color of the button. (default: "white")
 * @param {'left_up' | 'center_up' | 'right_up' | 
 *         'left_center' | 'center_center' | 'right_center' | 
 *         'left_bottom' | 'center_bottom' | 'right_bottom'} position - The position of the text, first value position align ( ↔ ), second value position justify ( ↕ ). (default: "center_center")
 * @param {[left_icon?: Icons_name, right_icon?: Icons_name]} icons - The icons chose on the left or on the right of the button (chose between all the icons in /icons/ only need the name of the file). (default: ['none', 'none'])
 * @param {[left_icon?: number, font_size?: number, right_icon?: number]} text_size - The size of the text (in px), first value is the size of the left_icons, the second value is the size of the text, the third value is the size of the right_icon. (default: [15, 20, 15])
 * @param {'rectangle' | 'rounded' | 'feather'} button_shape - The shape of the button between 3 deiferente shape (rectangle, rounded, feather). (default: "rounded")
 * @param {number} border - The border of the button (in px). (default: 0)
 * @returns The button component.
 */

export default function Button({text, font = inter,
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
                        className={`${font.className}  flex gap-2 bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]`}>
            {Draw_Icons(icons[0], text_size[0], text_size[0])}  
            {text}
            {Draw_Icons(icons[1], text_size[2], text_size[2])}
        </button>
    )
}