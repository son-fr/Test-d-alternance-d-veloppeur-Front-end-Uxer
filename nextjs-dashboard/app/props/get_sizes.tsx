
export type Sizes = {
    button_height?: 40 | 36 | 34;
    icons_size?: 20 | 20 | 16;
    text_size?: 20 | 20 | 18;
    gap?: 8 | 8 | 4;
    horizontal_padding?: 12 | 12 | 8;
    vertical_padding?: 8 | 8 | 8;
    badge_size?: 20 | 20 | 16;
    badge_text_size?: 16 | 16 | 14;
}

export default function Get_sizes(size: 'M' | 'S' | 'XS' | undefined) {

    let data_sizes: Sizes = {
                                button_height: 40, 
                                icons_size: 20, 
                                text_size: 20, 
                                gap: 8, 
                                horizontal_padding:12, 
                                vertical_padding: 8,
                                badge_size: 20,
                                badge_text_size: 16,
                            }
    switch (size) {
    case 'M':
        break;
    case 'S':
        data_sizes = {
                        button_height: 36, 
                        icons_size: 20, 
                        text_size: 20, 
                        gap: 8, 
                        horizontal_padding:12, 
                        vertical_padding: 8,
                        badge_size: 20,
                        badge_text_size: 16,
                    };
        break;
    case 'XS':
        data_sizes = {
                        button_height: 34, 
                        icons_size: 16, 
                        text_size: 18, 
                        gap: 4, 
                        horizontal_padding: 8, 
                        vertical_padding: 8,
                        badge_size: 16,
                        badge_text_size: 14,
                    };
        break;
    default:
        console.log("error l53 Get_size.tsx : size was not found, default to M");
    }
    return(
        data_sizes
    )
}