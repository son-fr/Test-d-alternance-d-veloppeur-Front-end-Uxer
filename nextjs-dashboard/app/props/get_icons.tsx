import Image from "next/image";

export type Icons_name = 'none' | 'archive' | 
            'arrow-counter-clockwise' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-square-in' | 'arrow-up-right' | 'arrow-up' | 
            'at' | 'barcode' | 'basket' | 'bell-simple' | 'book-bookmark' | 'building-apartment' | 'building-office' | 'building' | 'buildings' | 
            'calendar-dots' | 'camera-slash' | 'camera' | 
            'caret-down' | 'caret-left' | 'caret-right' | 'caret-up-down' | 'caret-up' | 
            'chart-bar' | 'chart-pie' | 'chat-text' | 'chats' | 
            'check-circle-fill' | 'check-circle' | 'check' | 'checks' | 
            'clock-counter-clockwise' | 'clock' | 'compass-tool' | 'credit-card' | 
            'database' | 'dots-three-vertical' | 'dots-three' | 'download-simple' | 
            'envelope' | 'export' | 'eye-slash' | 'eye' | 
            'file-text' | 'flag-banner-fold' | 'flag-banner' | 'flag-checkered' | 'flag-pennant' | 'flag' | 
            'gauge' | 'gear-six' | 'gift' | 'globe' | 'golf' | 'gps-fix' | 'gps' | 
            'heart' | 'house' | 
            'identification-card' | 'info' | 
            'lifebuoy' | 'lightning' | 'link' | 'list-bullets' | 'list' | 
            'magnifying-glass' | 'map-pin-area' | 'map-pin' | 'minus-circle' | 'minus' | 
            'notches' | 'notepad' | 
            'package' | 'paper-plane-tilt' | 'paperclip' | 'password' | 
            'pencil-simple' | 'phone' | 'Placeholder icon' | 'plus-circle' | 'plus' | 
            'printer' | 'prohibit-inset' | 'prohibit' | 'pulse' | 
            'question' | 
            'receipt' | 'rows' | 
            'scales' | 'scan' | 'shield-check' | 'shopping-cart' | 'sidebar-simple' | 
            'sign-in' | 'sign-out' | 'sliders-horizontal' | 'sliders' | 'sparkle' | 'stack-simple' | 'stack' | 'star-fill' | 'star' | 'suitcase' | 
            'table' | 'tag-chevron' | 'tag-simple' | 'tag' | 
            'text-align-left' | 'text-b' | 'text-italic' | 'text-underline' | 
            'ticket' | 'traffic-cone' | 'trash' | 'trend-down' | 'trend-up' | 'trophy' | 
            'upload-simple' | 'user' | 'users-three' | 'users' | 
            'warning-circle-fill' | 'warning-circle' | 'warning-diamond' | 'warning-octagon' | 'warning' | 
            'x-circle-fill' | 'x-circle-fill' | 'x-circle' | 'x';

export default function Draw_Icons(icon: Icons_name | undefined, width: number | undefined, height: number | undefined) {
    const Icon_path : string = '/icons/' + icon + '.svg'
    const Icon_alt : string = icon + 'icon'

    if (icon != 'none' && icon != undefined) {
        return(
        <Image
            src= {Icon_path}
            alt= {Icon_alt}
            width={width}
            height={height}
        />
        )
    }
    return(
        null
    )
}