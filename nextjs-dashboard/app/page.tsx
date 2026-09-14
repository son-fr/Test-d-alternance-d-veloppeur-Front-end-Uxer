'use client'
import Button, {Button_icon, ButtonGroup} from "./component/button";

import {CheckIcon, SlidersHorizontalIcon, GearSixIcon, TrashIcon} from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-col gap-25 py-15 px-15 bg-[#f5f5f5] w-full md:w-auto flex-wrap" >
        <div className="flex flex-row gap-5 flex-wrap">
          <Button size="M" style='Primary' text="Valider" badge='3' icons={{leading_icon: CheckIcon}} />
          <Button size="M" style='Secondary' text="Filtrer" badge='3' icons={{leading_icon: SlidersHorizontalIcon}} />
          <ButtonGroup size="M" text="Supprimer" style="Destructive" addon_icon={GearSixIcon}/>
          <Button_icon icon={TrashIcon} style="Secondary"/>
        </div>
      </main>
    </div>
  );
}
