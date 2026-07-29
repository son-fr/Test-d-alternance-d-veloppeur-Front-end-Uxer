import styles from "@/app/component/button.module.css";
import Get_position, {Item_position} from "@/app/props/get_position";
import Draw_Icons, {Icons_name} from "@/app/props/get_icons";
import Get_shape from "@/app/props/get_shape";
import Get_Colors, {Colors_state} from "@/app/props/get_colors";
import Get_shadow, {Shadows} from "@/app/props/get_shadow";
import {inter, lusitana, manrope, space_grotesk, sora} from "@/app/ui/font"

type Font_param = {
    font?: typeof inter | typeof lusitana | typeof manrope | typeof space_grotesk | typeof sora;
    weight?: 400 | 700;
    style?: 'normal' | 'italic';
}

type Icons = {
    left_icon?: Icons_name;
    right_icon?: Icons_name;
}

type TextSize = {
    left_icon?: number;
    font_size?: number;
    right_icon?: number;
    badge?: number;
}

export type Button_props = {
    disabled?: boolean;
    text?: string;
    font_param?: Font_param;
    height?: number;
    width?: number;
    color?: Colors_state;
    position?:  'left_up' | 'center_up' | 'right_up' | 
                'left_center' | 'center_center' | 'right_center' | 
                'left_bottom' | 'center_bottom' | 'right_bottom';
    icons?: Icons;
    text_size?: TextSize;
    button_shape?: 'rectangle' | 'rounded' | 'feather' | 'left-to-right' | 'right-to-left';
    shadow?: Shadows;
    border?: number;
    badge?: string;
}

/**
 * Show a personalisable button.
 *
 * @param {string} text - The text of the button. (default: empty)
 * @param {Font_param} font_param - The font of the text, with is weight and style. (default: {
                                                                                                font: inter,
                                                                                                weight: 400,
                                                                                                style: 'normal',
                                                                                            }, )  
 * @param {number} height - The height of the button (in px). (default: 15)
 * @param {number} width - The width of the button (in px). (default: 15)
 * @param {Colors_state} color - The color of the button on 4 state. (default: {
                                                                        default : 'none',
                                                                        hover: 'none',
                                                                        focus: 'none',
                                                                        disabled: 'none',
                                                                    }, )
 * @param {'left_up' | 'center_up' | 'right_up' | 
 *         'left_center' | 'center_center' | 'right_center' | 
 *         'left_bottom' | 'center_bottom' | 'right_bottom'} position - The position of the text, first value position align ( ↔ ), second value position justify ( ↕ ). (default: "center_center")
 * @param {Icons} icons - The icons chose on the left or on the right of the button (chose between all the icons in /icons/ only need the name of the file). (default: {
                                                                                                                                                                            left_icon: 'none', 
                                                                                                                                                                            right_icon: 'none',
                                                                                                                                                                        })
 * @param {TextSize} text_size - The size of the text (in px), first value is the size of the left_icons, the second value is the size of the text, the third value is the size of the right_icon and the fourth value is the size of the badge (in px). (default: {
                                                                                                                                                                                                                                                                left_icon: 15, 
                                                                                                                                                                                                                                                                font_size: 20,
                                                                                                                                                                                                                                                                right_icon: 15,
                                                                                                                                                                                                                                                                badge: 15,    
                                                                                                                                                                                                                                                            })
 * @param {'rectangle' | 'rounded' | 'feather'} button_shape - The shape of the button between 5 deiferente shape (rectangle, rounded, feather). (default: "rounded")
 * @param {Shadows} shadow - Define the effect of the button. (default: 'none') 
 * @param {number} border - The border of the button (in px). (default: 0)
 * @returns The button component.
 */

export default function Button({disabled = false,
                                text, font_param = {
                                            font: inter,
                                            weight: 400,
                                            style: 'normal',
                                        },
                                height = 15, width = 15, 
                                color = {
                                            default : 'none',
                                            hover: 'none',
                                            focus: 'none',
                                            disabled: 'none',
                                        },
                                position = "center_center", 
                                icons = {
                                            left_icon: 'none', 
                                            right_icon: 'none',
                                        }, 
                                text_size = {
                                            left_icon: 15, 
                                            font_size: 20,
                                            right_icon: 15,
                                            badge: 15,    
                                        } , 
                                button_shape = 'rounded', shadow = 'none', border = 0,
                                badge = undefined} : Button_props) {
    const Item_position : Item_position = Get_position(position);
    const Shape_button : string = Get_shape(button_shape);
    const colors = Get_Colors(color);
    const Shadow = Get_shadow(shadow);
 
    console.log(colors.default, colors.hover, colors.focus, Shadow)
    return (
        <button disabled={disabled} style={{ height: `${height}px`, width: `${width}px`, 
                        fontSize: `${text_size.font_size}px`, fontWeight: font_param.weight, fontStyle: font_param.style,
                        "--btn-color-disabled": `${colors.disabled}`, "--btn-color": `${colors.default}`, "--btn-color-hover": `${colors.hover}`, "--btn-color-focus": `${colors.focus}`,
                        alignItems: Item_position.align, justifyContent: Item_position.justify, 
                        borderRadius: Shape_button, boxShadow: Shadow, border: `${border}px solid` } as React.CSSProperties} 
                        className={`${font_param.font.className} ${styles.button} flex gap-2 px-5 text-background`}>
            {Draw_Icons(icons.left_icon, text_size.left_icon, text_size.left_icon)}  
            {text}
            {Draw_Icons(icons.right_icon, text_size.right_icon, text_size.right_icon)}
            {Badge(badge, text_size.badge)}
        </button>
    )
}

export function ButtonGroup({children} : any) {
    return (
        <div className="flex gap-4px">
            {children}
        </div>
    )
}


function Badge(badge: string | undefined, text_size: number | undefined) {
    console.log(text_size, badge)
    if (badge != undefined && text_size != undefined) {
        console.log("true")
        return(
        <div style={{fontSize: `${text_size}px`, }}
            className={`flex border-2 border-solid px-1 py-0.5`}>
            {badge}
        </div>
        )
    }
    console.log("false")
    return (
        null
    )
}
