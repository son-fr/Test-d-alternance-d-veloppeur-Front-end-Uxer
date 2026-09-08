
export default function Get_sizes(size: 'M' | 'S' | 'XS' | undefined) {

    let sizes: string = 'Size_M'
    switch (size) {
    case 'M':
        break;
    case 'S':
        sizes = 'Size_S'
        break;
    case 'XS':
        sizes = 'Size_XS'
        break;
    default:
        console.log("error l53 Get_size.tsx : size was not found, default to M");
    }
    return(
        sizes
    )
}
