'use client'

import styles from "@/src/ui/styles.module.scss"
import sizes from "@/src/ui/sizes.module.scss"

type Draw_Icons_Props = {
    icon?: any
    size?: number
}

export default function Draw_Icons({ icon }: Draw_Icons_Props) {
    let Icon : any = icon;
        if (icon != null && Icon != null) {
            return(
            <Icon className={`${styles["Icon"]} ${sizes["Icon"]}`} size={20}/>
            )
        }
        return(
            null
        )
    }
