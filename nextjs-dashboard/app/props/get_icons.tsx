'use client'
import {
    Archive, ArrowCounterClockwise, ArrowDown, ArrowLeft, ArrowRight, ArrowSquareIn, ArrowUpRight, ArrowUp,
    At, Barcode, Basket, BellSimple, BookBookmark, BuildingApartment, BuildingOffice, Building, Buildings,
    CalendarDots, CameraSlash, Camera,
    CaretDown, CaretLeft, CaretRight, CaretUpDown, CaretUp,
    ChartBar, ChartPie, ChatText, Chats,
    CheckCircle, Check, Checks,
    ClockCounterClockwise, Clock, CompassTool, CreditCard,
    Database, DotsThreeVertical, DotsThree, DownloadSimple,
    Envelope, Export, EyeSlash, Eye,
    FileText, FlagBannerFold, FlagBanner, FlagCheckered, FlagPennant, Flag,
    Gauge, GearSix, Gift, Globe, Golf, GpsFix, Gps,
    Heart, House,
    IdentificationCard, Info,
    Lifebuoy, Lightning, Link, ListBullets, List,
    MagnifyingGlass, MapPinArea, MapPin, MinusCircle, Minus,
    Notches, Notepad,
    Package, PaperPlaneTilt, Paperclip, Password,
    PencilSimple, Phone, Placeholder, PlusCircle, Plus,
    Printer, ProhibitInset, Prohibit, Pulse,
    Question,
    Receipt, Rows,
    Scales, Scan, ShieldCheck, ShoppingCart, SidebarSimple,
    SignIn, SignOut, SlidersHorizontal, Sliders, Sparkle, StackSimple, Stack, Star,
    Suitcase, Table, TagChevron, TagSimple, Tag,
    TextAlignLeft, TextB, TextItalic, TextUnderline,
    Ticket, TrafficCone, Trash, TrendDown, TrendUp, Trophy,
    UploadSimple, User, UsersThree, Users,
    WarningCircle, WarningDiamond, WarningOctagon, Warning,
    XCircle, X,
} from "@phosphor-icons/react";

import styles from "@/src/ui/styles.module.scss"

    export type Icons_name = 'none' | 'Archive' | 
                'ArrowCounterClockwise' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowSquareIn' | 'ArrowUpRight' | 'ArrowUp' | 
                'At' | 'Barcode' | 'Basket' | 'BellSimple' | 'BookBookmark' | 'BuildingApartment' | 'BuildingOffice' | 'Building' | 'Buildings' | 
                'CalendarDots' | 'CameraSlash' | 'Camera' | 
                'CaretDown' | 'CaretLeft' | 'CaretRight' | 'CaretUpDown' | 'CaretUp' | 
                'ChartBar' | 'ChartPie' | 'ChatText' | 'Chats' | 
                'CheckCircle' | 'Check' | 'Checks' | 
                'ClockCounterClockwise' | 'Clock' | 'CompassTool' | 'CreditCard' | 
                'Database' | 'DotsThreeVertical' | 'DotsThree' | 'DownloadSimple' | 
                'Envelope' | 'Export' | 'EyeSlash' | 'Eye' | 
                'FileText' | 'FlagBannerFold' | 'FlagBanner' | 'FlagCheckered' | 'FlagPennant' | 'Flag' | 
                'Gauge' | 'GearSix' | 'Gift' | 'Globe' | 'Golf' | 'GpsFix' | 'Gps' | 
                'Heart' | 'House' | 
                'IdentificationCard' | 'Info' | 
                'Lifebuoy' | 'Lightning' | 'Link' | 'ListBullets' | 'List' | 
                'MagnifyingGlass' | 'MapPinArea' | 'MapPin' | 'MinusCircle' | 'Minus' | 
                'Notches' | 'Notepad' | 
                'Package' | 'PaperPlaneTilt' | 'Paperclip' | 'Password' | 
                'PencilSimple' | 'Phone' | 'Placeholder' | 'PlusCircle' | 'Plus' | 
                'Printer' | 'ProhibitInset' | 'Prohibit' | 'Pulse' | 
                'Question' | 
                'Receipt' | 'Rows' | 
                'Scales' | 'Scan' | 'ShieldCheck' | 'ShoppingCart' | 'SidebarSimple' | 
                'SignIn' | 'SignOut' | 'SlidersHorizontal' | 'Sliders' | 'Sparkle' | 'StackSimple' | 'Stack' | 'Star' | 'Suitcase' | 
                'Table' | 'TagChevron' | 'TagSimple' | 'Tag' | 
                'TextAlignLeft' | 'TextB' | 'TextItalic' | 'TextUnderline' | 
                'Ticket' | 'TrafficCone' | 'Trash' | 'TrendDown' | 'TrendUp' | 'Trophy' | 
                'UploadSimple' | 'User' | 'UsersThree' | 'Users' | 
                'WarningCircle' | 'WarningDiamond' | 'WarningOctagon' | 'Warning' | 
                'XCircle' | 'X';

type Draw_Icons_Props = {
    icon?: Icons_name
    size?: number
}

export default function Draw_Icons({ icon, size }: Draw_Icons_Props) {
    let Icon : any = undefined;
    const list_Icons : [Icons_name[], any[]] = [[
                'none' , 'Archive' , 
                'ArrowCounterClockwise' , 'ArrowDown' , 'ArrowLeft' , 'ArrowRight' , 'ArrowSquareIn' , 'ArrowUpRight' , 'ArrowUp' , 
                'At' , 'Barcode' , 'Basket' , 'BellSimple' , 'BookBookmark' , 'BuildingApartment' , 'BuildingOffice' , 'Building' , 'Buildings' , 
                'CalendarDots' , 'CameraSlash' , 'Camera' , 
                'CaretDown' , 'CaretLeft' , 'CaretRight' , 'CaretUpDown' , 'CaretUp' , 
                'ChartBar' , 'ChartPie' , 'ChatText' , 'Chats' , 
                'CheckCircle' , 'Check' , 'Checks' , 
                'ClockCounterClockwise' , 'Clock' , 'CompassTool' , 'CreditCard' , 
                'Database' , 'DotsThreeVertical' , 'DotsThree' , 'DownloadSimple' , 
                'Envelope' , 'Export' , 'EyeSlash' , 'Eye' , 
                'FileText' , 'FlagBannerFold' , 'FlagBanner' , 'FlagCheckered' , 'FlagPennant' , 'Flag' , 
                'Gauge' , 'GearSix' , 'Gift' , 'Globe' , 'Golf' , 'GpsFix' , 'Gps' , 
                'Heart' , 'House' , 
                'IdentificationCard' , 'Info' , 
                'Lifebuoy' , 'Lightning' , 'Link' , 'ListBullets' , 'List' , 
                'MagnifyingGlass' , 'MapPinArea' , 'MapPin' , 'MinusCircle' , 'Minus' , 
                'Notches' , 'Notepad' , 
                'Package' , 'PaperPlaneTilt' , 'Paperclip' , 'Password' , 
                'PencilSimple' , 'Phone' , 'Placeholder' , 'PlusCircle' , 'Plus' , 
                'Printer' , 'ProhibitInset' , 'Prohibit' , 'Pulse' , 
                'Question' , 
                'Receipt' , 'Rows' , 
                'Scales' , 'Scan' , 'ShieldCheck' , 'ShoppingCart' , 'SidebarSimple' , 
                'SignIn' , 'SignOut' , 'SlidersHorizontal' , 'Sliders' , 'Sparkle' , 'StackSimple' , 'Stack' , 'Star' , 'Suitcase' , 
                'Table' , 'TagChevron' , 'TagSimple' , 'Tag' , 
                'TextAlignLeft' , 'TextB' , 'TextItalic' , 'TextUnderline' , 
                'Ticket' , 'TrafficCone' , 'Trash' , 'TrendDown' , 'TrendUp' , 'Trophy' , 
                'UploadSimple' , 'User' , 'UsersThree' , 'Users' , 
                'WarningCircle' , 'WarningDiamond' , 'WarningOctagon' , 'Warning' , 
                'XCircle' , 'X'],
                [`none`,
                Archive, ArrowCounterClockwise, ArrowDown, ArrowLeft, ArrowRight, ArrowSquareIn, ArrowUpRight, ArrowUp,
                At, Barcode, Basket, BellSimple, BookBookmark, BuildingApartment, BuildingOffice, Building, Buildings,
                CalendarDots, CameraSlash, Camera,
                CaretDown, CaretLeft, CaretRight, CaretUpDown, CaretUp,
                ChartBar, ChartPie, ChatText, Chats,
                CheckCircle, Check, Checks,
                ClockCounterClockwise, Clock, CompassTool, CreditCard,
                Database, DotsThreeVertical, DotsThree, DownloadSimple,
                Envelope, Export, EyeSlash, Eye,
                FileText, FlagBannerFold, FlagBanner, FlagCheckered, FlagPennant, Flag,
                Gauge, GearSix, Gift, Globe, Golf, GpsFix, Gps,
                Heart, House,
                IdentificationCard, Info,
                Lifebuoy, Lightning, Link, ListBullets, List,
                MagnifyingGlass, MapPinArea, MapPin, MinusCircle, Minus,
                Notches, Notepad,
                Package, PaperPlaneTilt, Paperclip, Password,
                PencilSimple, Phone, Placeholder, PlusCircle, Plus,
                Printer, ProhibitInset, Prohibit, Pulse,
                Question,
                Receipt, Rows,
                Scales, Scan, ShieldCheck, ShoppingCart, SidebarSimple,
                SignIn, SignOut, SlidersHorizontal, Sliders, Sparkle, StackSimple, Stack, Star,
                Suitcase, Table, TagChevron, TagSimple, Tag,
                TextAlignLeft, TextB, TextItalic, TextUnderline,
                Ticket, TrafficCone, Trash, TrendDown, TrendUp, Trophy,
                UploadSimple, User, UsersThree, Users,
                WarningCircle, WarningDiamond, WarningOctagon, Warning,
                XCircle, X,
                ]]
        for (let i = 0; i != list_Icons[0].length; i++) {
            if (list_Icons[0][i] === icon) {
                Icon = list_Icons[1][i];
                break;
            }
        }
        if (icon != 'none' && icon != undefined && Icon != null) {
            return(
            <Icon className={`${styles["Icon"]}`} size={size}/>
            )
        }
        return(
            null
        )
    }
