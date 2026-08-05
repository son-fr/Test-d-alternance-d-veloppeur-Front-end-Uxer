

export type Shadows =   'none' | 
                        'shadow-xs-down' | 'shadow-s-down' | 'shadow-m-down' | 'shadow-l-down' | 'shadow-xl-down' | 'shadow-2xl-down' | 
                        'shadow-xs-up' | 'shadow-s-up' | 'shadow-m-up' | 'shadow-l-up' | 'shadow-xl-up' | 'shadow-2xl-up' |
                        'focusring-primary'

export type Shadows_values = '0px 0px 0px 0px rgb(0 0 0 / 0%)'|
                        '0px 1px 2px 0px rgb(0 0 0 / 5%)'| '0px 1px 2px -1px rgb(0 0 0 / 10%), 0px 1px 3px 0px rgb(0 0 0 / 10%)'| '0px 2px 4px -2px rgb(0 0 0 / 6%), 0px 4px 6px -1px rgb(0 0 0 / 10%)'| '0px 2px 2px -1px rgb(0 0 0 / 4%), 0px 4px 6px -2px rgb(0 0 0 / 3%), 0px 12px 16px -4px rgb(0 0 0 / 8%)'| '0px 3px 3px -1.5px rgb(0 0 0 / 4%), 0px 8px 8px -4px rgb(0 0 0 / 3%), 0px 20px 24px -4px rgb(0 0 0 / 8%)'| '0px 4px 4px -2px rgb(0 0 0 / 4%), 0px 24px 48px -12px rgb(0 0 0 / 18%)'|
                        '0px -1px 2px 0px rgb(0 0 0 / 5%)'| '0px -1px 2px -1px rgb(0 0 0 / 10%), 0px -1px 3px 0px rgb(0 0 0 / 10%)'| '0px -2px 4px -2px rgb(0 0 0 / 6%), 0px -4px 6px -1px rgb(0 0 0 / 10%)'| '0px -2px 2px -1px rgb(0 0 0 / 4%), 0px -4px 6px -2px rgb(0 0 0 / 3%), 0px -12px 16px -4px rgb(0 0 0 / 8%)'| '0px -3px 3px -1.5px rgb(0 0 0 / 4%), 0px -8px 8px -4px rgb(0 0 0 / 3%), 0px -20px 24px -4px rgb(0 0 0 / 8%)'| '0px -4px 4px -2px rgb(0 0 0 / 4%), 0px -24px 48px -12px rgb(0 0 0 / 18%)'|
                        '0px 0px 0px 3px rgb(0 0 0 / 12%)'

export default function Get_shadow(shadow: Shadows) {
    const list_shadows: [Shadows[], Shadows_values[]] = [ 
                        [ 'none' ,
                        'shadow-xs-down' , 'shadow-s-down' , 'shadow-m-down' , 'shadow-l-down' , 'shadow-xl-down' , 'shadow-2xl-down' , 
                        'shadow-xs-up' , 'shadow-s-up' , 'shadow-m-up' , 'shadow-l-up' , 'shadow-xl-up' , 'shadow-2xl-up' ,
                        'focusring-primary'],
                        ['0px 0px 0px 0px rgb(0 0 0 / 0%)',
                        '0px 1px 2px 0px rgb(0 0 0 / 5%)', '0px 1px 2px -1px rgb(0 0 0 / 10%), 0px 1px 3px 0px rgb(0 0 0 / 10%)', '0px 2px 4px -2px rgb(0 0 0 / 6%), 0px 4px 6px -1px rgb(0 0 0 / 10%)', '0px 2px 2px -1px rgb(0 0 0 / 4%), 0px 4px 6px -2px rgb(0 0 0 / 3%), 0px 12px 16px -4px rgb(0 0 0 / 8%)', '0px 3px 3px -1.5px rgb(0 0 0 / 4%), 0px 8px 8px -4px rgb(0 0 0 / 3%), 0px 20px 24px -4px rgb(0 0 0 / 8%)', '0px 4px 4px -2px rgb(0 0 0 / 4%), 0px 24px 48px -12px rgb(0 0 0 / 18%)',
                        '0px -1px 2px 0px rgb(0 0 0 / 5%)', '0px -1px 2px -1px rgb(0 0 0 / 10%), 0px -1px 3px 0px rgb(0 0 0 / 10%)', '0px -2px 4px -2px rgb(0 0 0 / 6%), 0px -4px 6px -1px rgb(0 0 0 / 10%)', '0px -2px 2px -1px rgb(0 0 0 / 4%), 0px -4px 6px -2px rgb(0 0 0 / 3%), 0px -12px 16px -4px rgb(0 0 0 / 8%)', '0px -3px 3px -1.5px rgb(0 0 0 / 4%), 0px -8px 8px -4px rgb(0 0 0 / 3%), 0px -20px 24px -4px rgb(0 0 0 / 8%)', '0px -4px 4px -2px rgb(0 0 0 / 4%), 0px -24px 48px -12px rgb(0 0 0 / 18%)',
                        '0px 0px 0px 3px rgb(0 0 0 / 12%)']]
    let shadow_value: Shadows_values = '0px 0px 0px 0px rgb(0 0 0 / 0%)'

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