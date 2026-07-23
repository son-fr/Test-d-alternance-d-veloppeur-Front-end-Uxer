

export type Item_position = {
    justify : 'start' | 'center' | 'end';
    align : 'start' | 'center' | 'end';
}

export default function Get_position(
    position : 'left_up' | 'center_up' | 'right_up' | 
                'left_center' | 'center_center' | 'right_center' | 
                'left_bottom' | 'center_bottom' | 'right_bottom') {
    const item_position = position.split('_');
    const Item_position: Item_position = {
        justify: 'center',
        align: 'center'
    };
    switch (item_position[0]) {
    case "left":
        Item_position.justify = 'start';
        break;
    case "center":
        Item_position.justify = 'center';
        break;
    case "right":
        Item_position.justify = 'end';
        break;
    default:
        console.log("error l28 Get_position.tsx : position justify not found, default to center");
        Item_position.justify = 'center';
    }

    switch (item_position[1]) {
    case "up":
        Item_position.align = 'start';
        break;
    case "center":
        Item_position.align = 'center';
        break;
    case "bottom":
        Item_position.align = 'end';
        break;
    default:
        console.log("error l43 Get_position.tsx : position align not found, default to center");
        Item_position.align = 'center';
    }
    return (
        Item_position
    )
}