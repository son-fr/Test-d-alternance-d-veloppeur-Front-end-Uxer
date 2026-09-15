'use client'
import ButtonComponent from "./component/button";

import first_page from "@/src/ui/first_page.module.scss"
import {CheckIcon, SlidersHorizontalIcon, GearSixIcon, TrashIcon} from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className={`${first_page["first_page"]}`}>
      <main className={`${first_page["main"]}`} >
        <div className={`${first_page["button_list"]}`}>
          <ButtonComponent aria_label="button Valider" size="M" style='Primary' text="Valider" badge='3' icons={{leading_icon: CheckIcon}} />
          <ButtonComponent aria_label="button Filtrer" size="M" style='Secondary' text="Filtrer" badge='3' icons={{leading_icon: SlidersHorizontalIcon}} />
          <ButtonComponent aria_label="button Supprimer" size="M" text="Supprimer" style="Destructive" addon_icon={GearSixIcon}/>
          <ButtonComponent aria_label="button Corbeille" icon={TrashIcon} style="Secondary"/>
        </div>
      </main>
    </div>
  );
}
