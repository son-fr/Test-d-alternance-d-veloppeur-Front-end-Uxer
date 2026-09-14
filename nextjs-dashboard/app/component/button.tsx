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
    addon_icon?: never;
    icon?: never;
}

export type ButtonGroup_props = {
    disabled?: boolean;
    text?: string | null;
    size?: 'M' | 'S' | 'XS'; 
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive';
    icons?: Icons;
    badge?: string | null;
    addon_icon: any;
    icon?: never;
}


export type Button_icon_props = {
    disabled?: boolean;
    text?: never;
    size?: never;
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive' | 'Alpha_Dark' | 'Alpha_Light';
    icons?: never;
    badge?: never;
    addon_icon?: never;
    icon: any;
}

type Props = (Button_props | ButtonGroup_props | Button_icon_props);

const ButtonComponent = 
    ({
        disabled = false,
        text = null,
        size = 'M',
        style = 'Primary',
        icons = {
            leading_icon: null,
            trailing_icon: null,
        },
        badge = null,
        addon_icon = null,
        icon = null,
    } : Props) => {
    const Badge = (badge: string | null) => {
        if (badge != null) {
            return(
                <div aria-label="Badge"
                    className={` ${styles["Colors_badge"]} ${sizes["Badge"]} ${button.badge}`}>
                    {badge}
                </div>
            )
        }
    }

    if (addon_icon) {
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

    if (icon) {
        return (
            <button aria-label="Button icon" disabled={disabled} 
                className={`${styles[`${style}`]} ${button.button_icon}`}>
                <Draw_Icons aria-label="Icon" icon={icon} size={20} />
            </button>
        )
    }

    return (
        <button aria-label="button" disabled={disabled} className={` ${styles[`${style}`]} ${sizes[`${size}`]} ${button.button}`}>
            <Draw_Icons aria-label="Leading icon" icon={icons.leading_icon} size={size == "M" || size == "XS" ? 20 : 16} />
            {text}
            <Draw_Icons aria-label="Trailing icon" icon={icons.trailing_icon} size={size == "M" || size == "XS" ? 20 : 16} />
            {Badge(badge)}
        </button>
    )
}

export default ButtonComponent;
