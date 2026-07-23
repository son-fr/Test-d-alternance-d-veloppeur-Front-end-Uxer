
export default function Get_shape(type_shape?: string) {
    if (type_shape == 'rectangle') {
        return(
            '0px 0px 0px 0px'
        )
    }
    if (type_shape == 'feather') {
        return(
            '10px 100px / 120px'
        )
    }
    return (
        'calc(infinity * 1px)'
    )
}
