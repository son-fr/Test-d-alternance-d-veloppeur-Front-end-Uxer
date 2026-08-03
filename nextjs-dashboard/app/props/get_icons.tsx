    import { archive, arrow_counter_clockwise, arrow_down, arrow_left, arrow_right, arrow_square_in, arrow_up_right, arrow_up,
                at, barcode, basket, bell_simple, book_bookmark, building_apartment, building_office, building, buildings,
                calendar_dots, camera_slash, camera,
                caret_down, caret_left, caret_right, caret_up_down, caret_up,
                chart_bar, chart_pie, chat_text, chats,
                check_circle_fill, check_circle, check, checks,
                clock_counter_clockwise, clock, compass_tool, credit_card,
                database, dots_three_vertical, dots_three, download_simple,
                envelope, export_icon, eye_slash, eye,
                file_text, flag_banner_fold, flag_banner, flag_checkered, flag_pennant, flag,
                gauge, gear_six, gift, globe, golf, gps_fix, gps,
                heart, house,
                identification_card, info,
                lifebuoy, lightning, link, list_bullets, list,
                magnifying_glass, map_pin_area, map_pin, minus_circle, minus,
                notches, notepad,
                package_icon, paper_plane_tilt, paperclip, password,
                pencil_simple, phone, placeholder_icon, plus_circle, plus,
                printer, prohibit_inset, prohibit, pulse,
                question,
                receipt, rows,
                scales, scan, shield_check, shopping_cart, sidebar_simple,
                sign_in, sign_out, sliders_horizontal, sliders, sparkle, stack_simple, stack, star_fill, star, suitcase,
                table, tag_chevron, tag_simple, tag,
                text_align_left, text_b, text_italic, text_underline,
                ticket, traffic_cone, trash, trend_down, trend_up, trophy,
                upload_simple, user, users_three, users,
                warning_circle_fill, warning_circle, warning_diamond, warning_octagon, warning,
                x_circle_fill, x_circle, x } from '@/app/import/icons';

    import Image from "next/image";

    export type Icons_name = 'none' | 'archive' | 
                'arrow_counter_clockwise' | 'arrow_down' | 'arrow_left' | 'arrow_right' | 'arrow_square_in' | 'arrow_up_right' | 'arrow_up' | 
                'at' | 'barcode' | 'basket' | 'bell_simple' | 'book_bookmark' | 'building_apartment' | 'building_office' | 'building' | 'buildings' | 
                'calendar_dots' | 'camera_slash' | 'camera' | 
                'caret_down' | 'caret_left' | 'caret_right' | 'caret_up_down' | 'caret_up' | 
                'chart_bar' | 'chart_pie' | 'chat_text' | 'chats' | 
                'check_circle_fill' | 'check_circle' | 'check' | 'checks' | 
                'clock_counter_clockwise' | 'clock' | 'compass_tool' | 'credit_card' | 
                'database' | 'dots_three_vertical' | 'dots_three' | 'download_simple' | 
                'envelope' | 'export_icon' | 'eye_slash' | 'eye' | 
                'file_text' | 'flag_banner_fold' | 'flag_banner' | 'flag_checkered' | 'flag_pennant' | 'flag' | 
                'gauge' | 'gear_six' | 'gift' | 'globe' | 'golf' | 'gps_fix' | 'gps' | 
                'heart' | 'house' | 
                'identification_card' | 'info' | 
                'lifebuoy' | 'lightning' | 'link' | 'list_bullets' | 'list' | 
                'magnifying_glass' | 'map_pin_area' | 'map_pin' | 'minus_circle' | 'minus' | 
                'notches' | 'notepad' | 
                'package_icon' | 'paper_plane_tilt' | 'paperclip' | 'password' | 
                'pencil_simple' | 'phone' | 'placeholder_icon' | 'plus_circle' | 'plus' | 
                'printer' | 'prohibit_inset' | 'prohibit' | 'pulse' | 
                'question' | 
                'receipt' | 'rows' | 
                'scales' | 'scan' | 'shield_check' | 'shopping_cart' | 'sidebar_simple' | 
                'sign_in' | 'sign_out' | 'sliders_horizontal' | 'sliders' | 'sparkle' | 'stack_simple' | 'stack' | 'star_fill' | 'star' | 'suitcase' | 
                'table' | 'tag_chevron' | 'tag_simple' | 'tag' | 
                'text_align_left' | 'text_b' | 'text_italic' | 'text_underline' | 
                'ticket' | 'traffic_cone' | 'trash' | 'trend_down' | 'trend_up' | 'trophy' | 
                'upload_simple' | 'user' | 'users_three' | 'users' | 
                'warning_circle_fill' | 'warning_circle' | 'warning_diamond' | 'warning_octagon' | 'warning' | 
                'x_circle_fill' | 'x_circle' | 'x';

function get_Icons(name: Icons_name | undefined) {
    if (!name)
        return null
    switch (name) {
        case 'archive':
            return archive
        case 'arrow_counter_clockwise':
            return arrow_counter_clockwise
        case 'arrow_down':
            return arrow_down
        case 'arrow_left':
            return arrow_left
        case 'arrow_right':
            return arrow_right
        case 'arrow_square_in':
            return arrow_square_in
        case 'arrow_up_right':
            return arrow_up_right
        case 'arrow_up':
            return arrow_up
        case 'at':
            return at
        case 'barcode':
            return barcode
        case 'basket':
            return basket
        case 'bell_simple':
            return bell_simple
        case 'book_bookmark':
            return book_bookmark
        case 'building_apartment':
            return building_apartment
        case 'building_office':
            return building_office
        case 'building':
            return building
        case 'buildings':
            return buildings
        case 'calendar_dots':
            return calendar_dots
        case 'camera_slash':
            return camera_slash
        case 'camera':
            return camera
        case 'caret_down':
            return caret_down
        case 'caret_left':
            return caret_left
        case 'caret_right':
            return caret_right
        case 'caret_up_down':
            return caret_up_down
        case 'caret_up':
            return caret_up
        case 'chart_bar':
            return chart_bar
        case 'chart_pie':
            return chart_pie
        case 'chat_text':
            return chat_text
        case 'chats':
            return chats
        case 'check_circle_fill':
            return check_circle_fill
        case 'check_circle':
            return check_circle
        case 'check':
            return check
        case 'checks':
            return checks
        case 'clock_counter_clockwise':
            return clock_counter_clockwise
        case 'clock':
            return clock
        case 'compass_tool':
            return compass_tool
        case 'credit_card':
            return credit_card
        case 'database':
            return database
        case 'dots_three_vertical':
            return dots_three_vertical
        case 'dots_three':
            return dots_three
        case 'download_simple':
            return download_simple
        case 'envelope':
            return envelope
        case 'export_icon':
            return export_icon
        case 'eye_slash':
            return eye_slash
        case 'eye':
            return eye
        case 'file_text':
            return file_text
        case 'flag_banner_fold':
            return flag_banner_fold
        case 'flag_banner':
            return flag_banner
        case 'flag_checkered':
            return flag_checkered
        case 'flag_pennant':
            return flag_pennant
        case 'flag':
            return flag
        case 'gauge':
            return gauge
        case 'gear_six':
            return gear_six
        case 'gift':
            return gift
        case 'globe':
            return globe
        case 'golf':
            return golf
        case 'gps_fix':
            return gps_fix
        case 'gps':
            return gps
        case 'heart':
            return heart
        case 'house':
            return house
        case 'identification_card':
            return identification_card
        case 'info':
            return info
        case 'lifebuoy':
            return lifebuoy
        case 'lightning':
            return lightning
        case 'link':
            return link
        case 'list_bullets':
            return list_bullets
        case 'list':
            return list
        case 'magnifying_glass':
            return magnifying_glass
        case 'map_pin_area':
            return map_pin_area
        case 'map_pin':
            return map_pin
        case 'minus_circle':
            return minus_circle
        case 'minus':
            return minus
        case 'notches':
            return notches
        case 'notepad':
            return notepad
        case 'package_icon':
            return package_icon
        case 'paper_plane_tilt':
            return paper_plane_tilt
        case 'paperclip':
            return paperclip
        case 'password':
            return password
        case 'pencil_simple':
            return pencil_simple
        case 'phone':
            return phone
        case 'placeholder_icon':
            return placeholder_icon
        case 'plus_circle':
            return plus_circle
        case 'plus':
            return plus
        case 'printer':
            return printer
        case 'prohibit_inset':
            return prohibit_inset
        case 'prohibit':
            return prohibit
        case 'pulse':
            return pulse
        case 'question':
            return question
        case 'receipt':
            return receipt
        case 'rows':
            return rows
        case 'scales':
            return scales
        case 'scan':
            return scan
        case 'shield_check':
            return shield_check
        case 'shopping_cart':
            return shopping_cart
        case 'sidebar_simple':
            return sidebar_simple
        case 'sign_in':
            return sign_in
        case 'sign_out':
            return sign_out
        case 'sliders_horizontal':
            return sliders_horizontal
        case 'sliders':
            return sliders
        case 'sparkle':
            return sparkle
        case 'stack_simple':
            return stack_simple
        case 'stack':
            return stack
        case 'star_fill':
            return star_fill
        case 'star':
            return star
        case 'suitcase':
            return suitcase
        case 'table':
            return table
        case 'tag_chevron':
            return tag_chevron
        case 'tag_simple':
            return tag_simple
        case 'tag':
            return tag
        case 'text_align_left':
            return text_align_left
        case 'text_b':
            return text_b
        case 'text_italic':
            return text_italic
        case 'text_underline':
            return text_underline
        case 'ticket':
            return ticket
        case 'traffic_cone':
            return traffic_cone
        case 'trash':
            return trash
        case 'trend_down':
            return trend_down
        case 'trend_up':
            return trend_up
        case 'trophy':
            return trophy
        case 'upload_simple':
            return upload_simple
        case 'user':
            return user
        case 'users_three':
            return users_three
        case 'users':
            return users
        case 'warning_circle_fill':
            return warning_circle_fill
        case 'warning_circle':
            return warning_circle
        case 'warning_diamond':
            return warning_diamond
        case 'warning_octagon':
            return warning_octagon
        case 'warning':
            return warning
        case 'x_circle_fill':
            return x_circle_fill
        case 'x_circle':
            return x_circle
        case 'x':
            return x
        default:
            return null
    }
}

export default function Draw_Icons(colors = '#fafafa', icon: Icons_name | undefined, size: number | undefined) {
        const Icon = get_Icons(icon);

        if (icon != 'none' && icon != undefined && Icon != null) {
            return(
            <Icon width={size} height={size} style={{ color: 'red' }} / >
            )
        }
        return(
            null
        )
    }
