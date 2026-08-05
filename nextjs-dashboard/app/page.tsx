import Image from "next/image";
import Button, {ButtonGroup, Button_icon} from "./component/button";
import {inter, lusitana, manrope, space_grotesk, sora} from "@/app/ui/font"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between gap-25 py-32 px-16 bg-[#f5f5f5]  sm:items-start">

        <div>
          <ButtonGroup>
            <Button size="M" disabled={false} button_shape= 'semi-rounded-left-to-right' text="Click Me"   position="center_center" icons={{leading_icon: 'golf', trailing_icon: 'archive'}} border={1} badge='3'/>
            <Button size="M" disabled={false} button_shape= 'semi-rounded-right-to-left' icons={{leading_icon: 'golf'}} border={1} />
          </ButtonGroup>
        </div>

        <div>
          <ButtonGroup>
            <Button size="S" disabled={false} button_shape="semi-rounded-left-to-right" text="Click Me" position="center_center" icons={{leading_icon: 'golf', trailing_icon: 'archive'}} border={1} badge='3'/>
            <Button size="S" disabled={false} button_shape="semi-rounded-right-to-left" icons={{leading_icon: 'globe'}} border={1} />
          </ButtonGroup>
        </div>

        <div>
          <ButtonGroup>
            <Button style='Primary' size="XS" disabled={false} button_shape="semi-rounded-left-to-right" text="Click Me"   position="center_center" icons={{leading_icon: 'golf', trailing_icon: 'archive'}} border={1} badge='3'/>
            <Button style='Primary' size="XS" disabled={false} button_shape="semi-rounded-right-to-left" icons={{leading_icon: 'golf'}} border={1} />
          </ButtonGroup>
        </div>

        <div>
          <Button size="M" style='Primary' border={1} button_shape="semi-rounded" icons={{leading_icon: 'check'}} text="Valider"/>
        </div>

        <div>
          <Button size="M" style='Secondary' disabled={false} border={1} button_shape="semi-rounded" icons={{leading_icon: 'sliders_horizontal'}} text="Filtrer" badge="3"/>
        </div>

        <div>
          <ButtonGroup>
            <Button size="M" style='Destructive' disabled={false} border={1} button_shape="semi-rounded-left-to-right" text="Supprimer" />
            <Button size="M" style='Destructive' disabled={false} border={1} button_shape="semi-rounded-right-to-left" icons={{leading_icon: 'gear_six'}}/>
          </ButtonGroup>        
        </div>

        <div>
          <Button_icon style='Secondary' disabled={false} button_shape="semi-rounded" icon='trash' />
        </div>
        
      </main>
    </div>
  );
}
