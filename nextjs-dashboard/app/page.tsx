import Button, {Button_icon, ButtonGroup, } from "./component/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-col gap-25 py-15 px-15 bg-[#f5f5f5] w-full md:w-auto flex-wrap" >
        <div className="flex flex-row gap-5 flex-wrap">
          <Button size="M" style='Primary' text="Valider" badge='3' icons={{leading_icon: 'Check'}} />
          <Button size="M" style='Secondary' text="Filtrer" badge='3' icons={{leading_icon: 'SlidersHorizontal'}} />
          <ButtonGroup size="M" text="Supprimer" style="Destructive" addon_icon="GearSix"/>
          <Button_icon icon="Trash" style="Secondary"/>

        </div>
        <div className="flex flex-row gap-5 flex-wrap">
          <Button size="M" style='Primary' text="Valider" badge='3' icons={{leading_icon: 'Golf', trailing_icon: 'Archive'}} />
          <Button size="XS" style='Primary' text="Valider" badge='3' icons={{leading_icon: 'Golf', trailing_icon: 'Archive'}} />
          <Button size="S" style='Primary' text="Valider" badge='3' icons={{leading_icon: 'Golf', trailing_icon: 'Archive'}} />

        </div>
        <div className="flex flex-row gap-5 flex-wrap">
          <Button_icon icon="Ticket" style="Primary"/>
        </div>

        <div className="flex flex-row gap-5 flex-wrap">
          <ButtonGroup size="M" text="button" style="Primary" icons={{leading_icon: 'Barcode', trailing_icon: 'Camera'}} badge="1" addon_icon="Archive"/>
        </div>
      </main>
    </div>
  );
}
