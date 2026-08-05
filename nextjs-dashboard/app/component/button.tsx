import styles from "@/app/component/button.module.css";
import Get_position, {Item_position} from "@/app/props/get_position";
import Draw_Icons, {Icons_name} from "@/app/props/get_icons";
import Get_shape from "@/app/props/get_shape";
import Get_sizes from "@/app/props/get_sizes";
import Get_style from "@/app/props/get_style";
import {inter, lusitana, manrope, space_grotesk, sora} from "@/app/ui/font"
import { ColorsValues } from "@/app/props/get_colors";

type Font_param = {
    font?: typeof inter | typeof lusitana | typeof manrope | typeof space_grotesk | typeof sora;
    weight?: 400 | 500 | 600 | 700 ;
    style?: 'normal' | 'italic';
}

type Icons = {
    leading_icon?: Icons_name;
    trailing_icon?: Icons_name;
}

export type Button_props = {
    disabled?: boolean;
    text?: string;
    size?: 'M' | 'S' | 'XS'; 
    font_param?: Font_param;
    badge_font_param?: Font_param;
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive';
    position?:  'left_up' | 'center_up' | 'right_up' | 
                'left_center' | 'center_center' | 'right_center' | 
                'left_bottom' | 'center_bottom' | 'right_bottom';
    icons?: Icons;
    button_shape?: 'rectangle' | 'rounded' | 'semi-rounded' | 'fetaher' | 'left-to-right' | 'right-to-left' | 'semi-rounded-left-to-right' | 'semi-rounded-right-to-left';

    border?: number;
    badge?: string;
}

export type Button_icon_props = {
    disabled?: boolean;
    size?: 'M' | 'S' | 'XS';
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive' | 'Alpha_Dark' | 'Alpha_Light';
    icon?: Icons_name;
    button_shape?: 'rectangle' | 'rounded' | 'semi-rounded' | 'feather' | 'left-to-right' | 'right-to-left' | 'semi-rounded-left-to-right' | 'semi-rounded-right-to-left';
}
export default function Button({disabled = false,
                                size = 'XS',
                                text = undefined, 
                                font_param = {
                                            font: inter,
                                            weight: 500,
                                            style: 'normal',
                                        },
                                badge_font_param = {
                                            font: inter,
                                            weight: 600,
                                            style: 'normal',
                                        },
                                style = 'Primary',
                                position = "center_center", 
                                icons = {
                                            leading_icon: 'none', 
                                            trailing_icon: 'none',
                                        }, 
                                button_shape = 'semi-rounded',
                                badge = undefined} : Button_props) {
    const Item_position : Item_position = Get_position(position);
    const Shape_button : string = Get_shape(button_shape);
    const Sizes = Get_sizes(size);
    const Style = Get_style(style);
 
    return (
        <button disabled={disabled} style={{ height: `${Sizes.button_height}px`, width: `auto`,
                        gap: `${Sizes.gap}px`, padding: `${Sizes.vertical_padding}px ${Sizes.horizontal_padding}px ${Sizes.vertical_padding}px ${Sizes.horizontal_padding}px`,
                        fontSize: Sizes.text_size, fontWeight: font_param.weight, fontStyle: font_param.style,
                        "--btn-color-disabled": `${Style.colors_state.disabled}`, "--btn-color": `${Style.colors_state.default}`, "--btn-color-hover": `${Style.colors_state.hover}`, "--btn-color-focus": `${Style.colors_state.focus}`,
                        "--btn-effect-disabled": `${Style.effect.disabled}`, "--btn-effect": `${Style.effect.default}`, "--btn-effect-hover": `${Style.effect.hover}`, "--btn-effect-focus": `${Style.effect.focus}`,
                        "--btn-opacity-disabled": `${Style.opacity.disabled}`, "--btn-opacity": `${Style.opacity.default}`, "--btn-opacity-hover": `${Style.opacity.hover}`, "--btn-opacity-focus": `${Style.opacity.focus}`,
                        alignItems: Item_position.align, justifyContent: Item_position.justify, 
                        borderRadius: Shape_button, border: `1px solid ${Style.stroke}`, color: `${Style.colors_text}` } as React.CSSProperties} 
                        className={`${font_param.font.className} ${styles.button} flex whitespace-nowrap gap-2 px-5`}>
            {Draw_Icons(Style.colors_icons, icons.leading_icon, Sizes.icons_size)} 
            {text}
            {Draw_Icons(Style.colors_icons, icons.trailing_icon, Sizes.icons_size)}
            {Badge(badge, Sizes.badge_text_size, badge_font_param, Sizes.badge_size, Style.colors_badge)}
        </button>
    )
}

function Badge(badge: string | undefined, text_size: number | undefined, badge_font_param: Font_param, size: number | undefined, color: ColorsValues) {
    if (badge != undefined && text_size != undefined) {
        return(
        <div style={{   fontSize: `${text_size}px`, 
                        fontWeight: badge_font_param.weight, 
                        fontStyle: badge_font_param.style,
                        height: `${size}px`, width: `auto`, 
                        backgroundColor: color}}
            className={`${badge_font_param.font.className} flex rounded-[4px] items-center gap-[8px] px-[5px] py-[8px] whitespace-nowrap`}>
            {badge}
        </div>
        )
    }
    return (
        null
    )
}

export function ButtonGroup({children} : any) {
    return (
        <div className="flex gap-1px">
            {children}
        </div>
    )
}


export function Button_icon( {icon = 'none',
                            disabled = false,
                                style = 'Primary',
                                button_shape = 'semi-rounded',} : Button_icon_props) {
    const Shape_button : string = Get_shape(button_shape);
    const Style = Get_style(style); 
 
    return (
        <button disabled={disabled} style={{ height: `40px`, width: `auto`,
                        gap: `8px`, padding: `10px 10px 10px 10px`,
                        "--btn-color-disabled": `${Style.colors_state.disabled}`, "--btn-color": `${Style.colors_state.default}`, "--btn-color-hover": `${Style.colors_state.hover}`, "--btn-color-focus": `${Style.colors_state.focus}`,
                        "--btn-effect-disabled": `${Style.effect.disabled}`, "--btn-effect": `${Style.effect.default}`, "--btn-effect-hover": `${Style.effect.hover}`, "--btn-effect-focus": `${Style.effect.focus}`,
                        "--btn-opacity-disabled": `${Style.opacity.disabled}`, "--btn-opacity": `${Style.opacity.default}`, "--btn-opacity-hover": `${Style.opacity.hover}`, "--btn-opacity-focus": `${Style.opacity.focus}`,
                        borderRadius: Shape_button, border: `1px solid ${Style.stroke}` } as React.CSSProperties} 
                        className={`${styles.button} flex whitespace-nowrap gap-2 px-5`}>
            {Draw_Icons(Style.colors_icons, icon, 20)} 
        </button>
    )
}
