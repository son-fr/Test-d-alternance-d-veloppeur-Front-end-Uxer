
export default function Get_shape(type_shape?: string) {
    if (type_shape == 'semi-rounded') {
        return(
            '8px 8px 8px 8px'
        )
    }
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
    if (type_shape == 'left-to-right') {
        return (
            '50px 0px 0px 50px'
        )
    }
    if (type_shape == 'right-to-left') {
        return (
            '0px 50px 50px 0px'
        )
    }
    if (type_shape == 'semi-rounded-left-to-right') {
        return(
            '8px 0px 0px 8px'
        )
    }
    if (type_shape == 'semi-rounded-right-to-left') {
        return(
            '0px 8px 8px 0px'
        )
    }
    return (
        'calc(infinity * 1px)'
    )
}
