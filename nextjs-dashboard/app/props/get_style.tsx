

import Get_shadow, {Shadows_values} from "@/app/props/get_shadow";
import Get_Colors, {Get_Color_value, Colors_state, Colors, ColorsValues} from "@/app/props/get_colors";

type States_shadows = {
    default?: Shadows_values;
    hover?: Shadows_values;
    focus?: Shadows_values;
    disabled?: Shadows_values;
}

type States_opacity = {
    default?: string;
    hover?: string;
    focus?: string;
    disabled?: string;
}

export type Styles = {
    colors_state: Colors_state,
    colors_badge: ColorsValues,
    colors_text:  ColorsValues,
    colors_icons:  ColorsValues,
    stroke: ColorsValues,
    effect: States_shadows,
    opacity: States_opacity,
}

export default function Get_style(size: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive' | 'Alpha_Dark' | 'Alpha_Light' | undefined) {

    let data_styles: Styles = {
                                colors_state: Get_Colors({
                                                            default: 'Brand/Fairway/600',
                                                            hover: 'Brand/Fairway/700',
                                                            focus: 'Brand/Fairway/600',
                                                            disabled: 'Brand/Fairway/600',
                                                        }),
                                colors_badge: Get_Color_value('Neutral/White/20'),
                                colors_text:  Get_Color_value('Neutral/White/100'),
                                colors_icons: Get_Color_value('Neutral/White/100'), 
                                stroke: Get_Color_value('Neutral/Black/30'),
                                effect: {
                                            default: Get_shadow('shadow-xs-down'),
                                            hover: Get_shadow('shadow-xs-down'),
                                            focus: Get_shadow('focusring-primary'),
                                            disabled: Get_shadow('shadow-xs-down'),
                                        },
                                opacity: {
                                            default: '100%',
                                            hover: '100%',
                                            focus: '100%',
                                            disabled: '40%',
                                        }
                            }
    switch (size) {
        case 'Primary':
            break;
        case 'Secondary':
            data_styles = {
                            colors_state: Get_Colors({
                                                        default: 'Neutral/White/100',
                                                        hover: 'Neutral/Grey/50',
                                                        focus: 'Neutral/White/100',
                                                        disabled: 'Neutral/White/100',
                                                    }),
                            colors_badge: Get_Color_value('Neutral/Black/10'),
                            colors_text:  Get_Color_value('Neutral/Grey/900'),
                            colors_icons: Get_Color_value('Neutral/Grey/500'), 
                            stroke: Get_Color_value('Neutral/Grey/300'),
                            effect: {
                                        default: Get_shadow('shadow-xs-down'),
                                        hover: Get_shadow('shadow-xs-down'),
                                        focus: Get_shadow('focusring-primary'),
                                        disabled: Get_shadow('shadow-xs-down'),
                                    },
                            opacity: {
                                        default: '100%',
                                        hover: '100%',
                                        focus: '100%',
                                        disabled: '40%',
                                    }
                        };
            break;
        case 'Ghost':
            data_styles = {
                            colors_state: Get_Colors({
                                                        default: 'Neutral/White/5',
                                                        hover: 'Neutral/Grey/50',
                                                        focus: 'Neutral/Black/5',
                                                        disabled: 'Neutral/White/5',
                                                    }),
                            colors_badge: Get_Color_value('Neutral/Black/10'),
                            colors_text:  Get_Color_value('Neutral/Grey/900'),
                            colors_icons: Get_Color_value('Neutral/Grey/500'), 
                            stroke: Get_Color_value('none'),
                            effect: {
                                        default: Get_shadow('none'),
                                        hover: Get_shadow('none'),
                                        focus: Get_shadow('focusring-primary'),
                                        disabled: Get_shadow('none'),
                                    },
                            opacity: {
                                        default: '100%',
                                        hover: '100%',
                                        focus: '100%',
                                        disabled: '40%',
                                    }
                        };
            break;
        case 'Destructive':
            data_styles = {
                            colors_state: Get_Colors({
                                                        default: 'Semantic/Red/600',
                                                        hover: 'Semantic/Red/700',
                                                        focus: 'Semantic/Red/600',
                                                        disabled: 'Semantic/Red/600',
                                                    }),
                            colors_badge: Get_Color_value('Neutral/Black/20'),
                            colors_text:  Get_Color_value('Neutral/White/100'),
                            colors_icons: Get_Color_value('Neutral/White/100'), 
                            stroke: Get_Color_value('Neutral/Black/30'),
                            effect: {
                                        default: Get_shadow('shadow-xs-down'),
                                        hover: Get_shadow('shadow-xs-down'),
                                        focus: Get_shadow('focusring-primary'),
                                        disabled: Get_shadow('shadow-xs-down'),
                                    },
                            opacity: {
                                        default: '100%',
                                        hover: '100%',
                                        focus: '100%',
                                        disabled: '40%',
                                    }
                        };
            break;
        case 'Alpha_Dark':
            data_styles = {
                            colors_state: Get_Colors({
                                                        default: 'Neutral/Black/20',
                                                        hover: 'Neutral/Black/30',
                                                        focus: 'Neutral/Black/20',
                                                        disabled: 'Neutral/Black/20',
                                                    }),
                            colors_badge: Get_Color_value('none'),
                            colors_text:  Get_Color_value('none'),
                            colors_icons: Get_Color_value('Neutral/White/100'), 
                            stroke: Get_Color_value('none'),
                            effect: {
                                        default: Get_shadow('shadow-xs-down'),
                                        hover: Get_shadow('shadow-xs-down'),
                                        focus: Get_shadow('focusring-primary'),
                                        disabled: Get_shadow('shadow-xs-down'),
                                    },
                            opacity: {
                                        default: '100%',
                                        hover: '100%',
                                        focus: '100%',
                                        disabled: '40%',
                                    }
                        };
            break;
        case 'Alpha_Light':
            data_styles = {
                            colors_state: Get_Colors({
                                                        default: 'Neutral/White/20',
                                                        hover: 'Neutral/White/30',
                                                        focus: 'Neutral/White/20',
                                                        disabled: 'Neutral/White/20',
                                                    }),
                            colors_badge: Get_Color_value('none'),
                            colors_text:  Get_Color_value('none'),
                            colors_icons: Get_Color_value('Neutral/White/100'), 
                            stroke: Get_Color_value('none'),
                            effect: {
                                        default: Get_shadow('shadow-xs-down'),
                                        hover: Get_shadow('shadow-xs-down'),
                                        focus: Get_shadow('focusring-primary'),
                                        disabled: Get_shadow('shadow-xs-down'),
                                    },
                            opacity: {
                                        default: '100%',
                                        hover: '100%',
                                        focus: '100%',
                                        disabled: '40%',
                                    }
                        };
            break;
        default:
            console.log("error l38 Get_styles.tsx : size was not found, default to Primary");
    }
    return(
        data_styles
    )
}
