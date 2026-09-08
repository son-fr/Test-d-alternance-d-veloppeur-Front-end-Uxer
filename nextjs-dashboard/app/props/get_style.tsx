
export default function Get_style(size: 'Primary' | 'Secondary' | 'Ghost' | 'Destructive' | 'Alpha_Dark' | 'Alpha_Light' | undefined) {

    let Style: string = 'Styles_Primary';
    switch (size) {
        case 'Primary':
            break;
        case 'Secondary':
            Style = 'Styles_Secondary';
            break;
        case 'Ghost':
            Style = 'Styles_Ghost';
            break;
        case 'Destructive':
            Style = 'Styles_Destructive';
            break;
        case 'Alpha_Dark':
            Style = 'Styles_Alpha_Dark';
            break;
        case 'Alpha_Light':
            Style = 'Styles_Alpha_Light';
            break;
        default:
            console.log("error l38 Get_styles.tsx : size was not found, default to Primary");
    }
    return(
        Style
    )
}
