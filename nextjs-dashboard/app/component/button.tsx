import Draw_Icons from "@/app/props/get_icons";

import button from "@/app/component/button.module.scss"
import styles from "@/src/ui/styles.module.scss"
import sizes from "@/src/ui/sizes.module.scss"

type Icons = {
    leading_icon?: any;
    trailing_icon?: any;
}

export type Button_props = {
    disabled?: boolean;
    text?: string | null;
    size?: 'M' | 'S' | 'XS'; 
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive';
    icons?: Icons;
    badge?: string | null;
}

export type ButtonGroup_props = {
    disabled?: boolean;
    text?: string | null;
    size?: 'M' | 'S' | 'XS'; 
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive';
    icons?: Icons;
    badge?: string | null;
    addon_icon?: any;
}


export type Button_icon_props = {
    disabled?: boolean;
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive' | 'Alpha_Dark' | 'Alpha_Light';
    icon?: any;
}

export default function Button({disabled = false,
                                size = 'XS',
                                text = null,
                                style = 'Primary', 
                                icons = {
                                            leading_icon: null,
                                            trailing_icon: null,
                                        },
                                badge = null} : Button_props){

    return (
        <button aria-label="button" disabled={disabled} className={` ${styles[`${style}`]} ${sizes[`${size}`]} ${button.button}`}>
            <Draw_Icons aria-label="Leading icon" icon={icons.leading_icon} size={size == "M" || size == "XS" ? 20 : 16} />
            {text}
            <Draw_Icons aria-label="Trailing icon" icon={icons.trailing_icon} size={size == "M" || size == "XS" ? 20 : 16} />
            {Badge(badge)}
        </button>
    )
}

function Badge(badge: string | null ) {
    if (badge != null) {
        return(
        <div aria-label="Badge"
            className={` ${styles["Colors_badge"]} ${sizes["Badge"]} ${button.badge}`}>
            {badge}
        </div>
        )
    }
    return (
        null
    )
}

export function ButtonGroup({disabled = false,
                                size = 'XS',
                                text = null,
                                style = 'Primary', 
                                icons = {
                                            leading_icon: null, 
                                            trailing_icon: null,
                                        },
                                badge = null,
                                addon_icon = null
                                } : ButtonGroup_props) {

    return (
        <div className={`${button.button_group}`}>
            <button aria-label="button" disabled={disabled} className={` ${styles[`${style}`]} ${sizes[`${size}`]} ${button.button_buton_group}`}>
                <Draw_Icons aria-label="Leading icon" icon={icons.leading_icon} size={size == "M" || size == "XS" ? 20 : 16} />
                {text}
                <Draw_Icons aria-label="Trailing icon" icon={icons.trailing_icon} size={size == "M" || size == "XS" ? 20 : 16} />
                {Badge(badge)}
            </button>
            <button aria-label="Button icon" disabled={disabled} 
                className={`${styles[`${style}`]} ${button.button_icon_buton_group} ${sizes[`${size}`]}`}>
                <Draw_Icons aria-label="Icon" icon={addon_icon} size={size == "M" || size == "XS" ? 20 : 16}/>
            </button>
        </div>
    )
}

export function Button_icon( {icon = null,
                            disabled = false,
                            style = 'Primary',} : Button_icon_props) {
 
    return (
        <button aria-label="Button icon" disabled={disabled} 
            className={`${styles[`${style}`]} ${button.button_icon}`}>
            <Draw_Icons aria-label="Icon" icon={icon} size={20} />
        </button>
    )
}
