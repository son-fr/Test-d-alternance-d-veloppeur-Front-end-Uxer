

export type Shadows =   'none' | 
                        'shadow-xs-down' | 'shadow-s-down' | 'shadow-m-down' | 'shadow-l-down' | 'shadow-xl-down' | 'shadow-2xl-down' | 
                        'shadow-xs-up' | 'shadow-s-up' | 'shadow-m-up' | 'shadow-l-up' | 'shadow-xl-up' | 'shadow-2xl-up' |
                        'focusring-primary'

export default function Get_shadow(shadow: Shadows) {
    const list_shadows = [ 
                        [ 'none' ,
                        'shadow-xs-down' , 'shadow-s-down' , 'shadow-m-down' , 'shadow-l-down' , 'shadow-xl-down' , 'shadow-2xl-down' , 
                        'shadow-xs-up' , 'shadow-s-up' , 'shadow-m-up' , 'shadow-l-up' , 'shadow-xl-up' , 'shadow-2xl-up' ,
                        'focusring-primary'],
                        ['0px 0px 0px 0px #000000',
                        '0px 1px 2px 0px #000000', '0px 1px 2px -1px #000000, 0px 1px 3px 0px #000000', '0px 2px 4px -2px #000000, 0px 4px 6px -1px #000000', '0px 2px 2px -1px #000000, 0px 4px 6px -2px #000000, 0px 12px 16px -4px #000000', '0px 3px 3px -1.5px #000000, 0px 8px 8px -4px #000000, 0px 20px 24px -4px #000000', '0px 4px 4px -2px #000000, 0px 24px 48px -12px #000000',
                        '0px -1px 2px 0px #000000', '0px -1px 2px -1px #000000, 0px -1px 3px 0px #000000', '0px -2px 4px -2px #000000, 0px -4px 6px -1px #000000', '0px -2px 2px -1px #000000, 0px -4px 6px -2px #000000, 0px -12px 16px -4px #000000', '0px -3px 3px -1.5px #000000, 0px -8px 8px -4px #000000, 0px -20px 24px -4px #000000', '0px -4px 4px -2px #000000, 0px -24px 48px -12px #000000',
                        '0px 0px 0px 3px #000000']]
    let shadow_value: string = ''

    for (let i = 0; i != list_shadows[0].length; i++) {
        if (list_shadows[0][i] === shadow) {
            shadow_value = list_shadows[1][i];
            break;
        }
    }
    return(
        shadow_value
    )
}