'use client'

import styles from "@/src/ui/styles.module.scss"

type Draw_Icons_Props = {
    icon?: any
    size?: number
}

export default function Draw_Icons({ icon, size }: Draw_Icons_Props) {
    let Icon : any = icon;
        if (icon != 'none' && icon != undefined && Icon != null) {
            return(
            <Icon className={`${styles["Icon"]}`} size={size}/>
            )
        }
        return(
            null
        )
    }
