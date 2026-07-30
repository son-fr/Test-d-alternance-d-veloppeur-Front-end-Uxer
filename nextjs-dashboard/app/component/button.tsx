import styles from "@/app/component/button.module.css";
import Get_position, {Item_position} from "@/app/props/get_position";
import Draw_Icons, {Icons_name} from "@/app/props/get_icons";
import Get_shape from "@/app/props/get_shape";
import Get_Colors, {Colors_state} from "@/app/props/get_colors";
import Get_shadow, {Shadows} from "@/app/props/get_shadow";
import Get_sizes, {Sizes} from "@/app/props/get_sizes";
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

export type Button_props = {
    disabled?: boolean;
    text?: string;
    size?: 'M' | 'S' | 'XS'; 
    font_param?: Font_param;
    color?: Colors_state;
    position?:  'left_up' | 'center_up' | 'right_up' | 
                'left_center' | 'center_center' | 'right_center' | 
                'left_bottom' | 'center_bottom' | 'right_bottom';
    icons?: Icons;
    button_shape?: 'rectangle' | 'rounded' | 'semi-rounded' | 'feather' | 'left-to-right' | 'right-to-left' | 'semi-rounded-left-to-right' | 'semi-rounded-right-to-left';
    shadow?: Shadows;
    border?: number;
    badge?: string;
}

/**
 * Show a personalisable button.
 *
 * @param {boolean} disabled - Choose if the button is disabled or not. (default: false)
 * @param {string} text - The text of the button. (default: empty)
 * @param {Font_param} font_param - The font of the text, with is weight and style. (default: {
                                                                                                font: inter,
                                                                                                weight: 400,
                                                                                                style: 'normal',
                                                                                            }, )
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
 * @param {'rectangle' | 'rounded' | 'semi-rounded' | 'feather' | 'left-to-right' | 'right-to-left' | 'semi-rounded-left-to-right' | 'semi-rounded-right-to-left'} button_shape - The shape of the button between 5 deiferente shape (rectangle, rounded, feather). (default: "rounded")
 * @param {Shadows} shadow - Define the effect of the button. (default: 'none') 
 * @param {number} border - The border of the button (in px). (default: 0)
 * @param {string} badge - chose the texte inside the badge. (default: empty)
 * @returns The button component.
 */

export default function Button({disabled = false,
                                size = 'XS',
                                text = undefined, font_param = {
                                            font: inter,
                                            weight: 400,
                                            style: 'normal',
                                        },
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
                                button_shape = 'rounded', shadow = 'none', border = 0,
                                badge = undefined} : Button_props) {
    const Item_position : Item_position = Get_position(position);
    const Shape_button : string = Get_shape(button_shape);
    const colors = Get_Colors(color);
    const Shadow = Get_shadow(shadow);
    const Sizes = Get_sizes(size);
 
    return (
        <button disabled={disabled} style={{ height: `${Sizes.button_height}px`, width: `auto`,
                        gap: `${Sizes.gap}px`, padding: `${Sizes.vertical_padding}px ${Sizes.horizontal_padding}px ${Sizes.vertical_padding}px ${Sizes.horizontal_padding}px`,
                        fontSize: Sizes.text_size, fontWeight: font_param.weight, fontStyle: font_param.style,
                        "--btn-color-disabled": `${colors.disabled}`, "--btn-color": `${colors.default}`, "--btn-color-hover": `${colors.hover}`, "--btn-color-focus": `${colors.focus}`,
                        alignItems: Item_position.align, justifyContent: Item_position.justify, 
                        borderRadius: Shape_button, boxShadow: Shadow, border: `${border}px solid` } as React.CSSProperties} 
                        className={`${font_param.font.className} ${styles.button} flex whitespace-nowrap gap-2 px-5 text-background`}>
            {Draw_Icons(icons.left_icon, Sizes.icons_size)} 
            {text}
            {Draw_Icons(icons.right_icon, Sizes.icons_size)}
            {Badge(badge, Sizes.badge_text_size, Sizes.badge_size)}
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


function Badge(badge: string | undefined, text_size: number | undefined, size: number | undefined) {
    if (badge != undefined && text_size != undefined) {
        return(
        <div style={{   fontSize: `${text_size}px`, 
                        height: `${size}px`, width: `auto`, 
                        backgroundColor: '#a3a3a3'}}
            className={`flex rounded-[4px] items-center gap-[8px] px-[5px] py-[8px] whitespace-nowrap`}>
            {badge}
        </div>
        )
    }
    return (
        null
    )
}
