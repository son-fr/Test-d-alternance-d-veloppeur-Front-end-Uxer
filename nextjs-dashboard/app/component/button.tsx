import Draw_Icons from "@/app/props/get_icons";
import button from "@/app/component/button.module.scss"
import styles from "@/src/ui/styles.module.scss"
import sizes from "@/src/ui/sizes.module.scss"


type Icons = {
    leading_icon?: any;
    trailing_icon?: any;
}

type Button_props = {
    aria_label: string;
    disabled?: boolean;
    text?: string | null;
    size?: 'M' | 'S' | 'XS'; 
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive';
    leading_icon?: any;
    trailing_icon?: any;
    badge?: string | null;
    addon_icon?: never;
    icon?: never;
}

type ButtonGroup_props = {
    aria_label: string;
    disabled?: boolean;
    text?: string | null;
    size?: 'M' | 'S' | 'XS'; 
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive';
    leading_icon?: any;
    trailing_icon?: any;
    badge?: string | null;
    addon_icon: any;
    icon?: never;
}


type Button_icon_props = {
    aria_label: string;
    disabled?: boolean;
    text?: never;
    size?: never;
    style?: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive' | 'Alpha_Dark' | 'Alpha_Light';
    leading_icon?: never;
    trailing_icon?: never;
    badge?: never;
    addon_icon?: never;
    icon: any;
}

type Props = (Button_props | ButtonGroup_props | Button_icon_props);

const ButtonComponent = 
    ({
        aria_label,
        disabled = false,
        text,
        size = 'M',
        style = 'Primary',
        leading_icon,
        trailing_icon,
        badge,
        addon_icon,
        icon,
    } : Props) => {
    const Badge = (badge: string | null) => {
        return(
            <div
                className={` ${styles["Colors_badge"]} ${sizes["Badge"]} ${button.badge}`}>
                {badge}
            </div>
        )
    }

    if (addon_icon) {
        return (
            <div aria-label={aria_label} className={`${button.button_group}`}>
                <button disabled={disabled} className={` ${styles[`${style}`]} ${sizes[`${size}`]} ${button.button_buton_group}`}>
                    {leading_icon && <Draw_Icons icon={leading_icon} />}
                    {text}
                    {trailing_icon &&<Draw_Icons icon={trailing_icon} />}
                    {badge && Badge(badge)}
                </button>
                <button disabled={disabled} 
                    className={`${styles[`${style}`]} ${button.button_icon_buton_group} ${sizes[`${size}`]}`}>
                    <Draw_Icons icon={addon_icon} />
                </button>
            </div>
        )
    }

    if (icon) {
        return (
            <button aria-label={aria_label} disabled={disabled} 
                className={`${styles[`${style}`]} ${button.button_icon}`}>
                <Draw_Icons icon={icon}/>
            </button>
        )
    }

    return (
        <button aria-label={aria_label} disabled={disabled} className={` ${styles[`${style}`]} ${sizes[`${size}`]} ${button.button}`}>
            {leading_icon && <Draw_Icons icon={leading_icon} />}
            {text}
            {trailing_icon && <Draw_Icons icon={trailing_icon} />}
            {badge && Badge(badge)}
        </button>
    )
}

export default ButtonComponent;
