import Image from "next/image";
import Button, {ButtonGroup} from "./component/button";
import {inter, lusitana, manrope, space_grotesk, sora} from "@/app/ui/font"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between gap-25 py-32 px-16 bg-indigo-500 dark:bg-gray sm:items-start">

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <ButtonGroup>
            <Button size="M" disabled={false} button_shape= 'semi-rounded-left-to-right' text="Click Me"   position="center_center" icons={{leading_icon: 'golf', trailing_icon: 'archive'}} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Cyan/400', focus: 'Semantic/Rose/600', disabled: 'Brand/Fairway/950'}} font_param={{font:inter, weight:400, style:'normal'}} shadow='shadow-2xl-down' badge='3'/>
            <Button size="M" disabled={false} button_shape= 'semi-rounded-right-to-left' icons={{leading_icon: 'golf'}} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Yellow/600', disabled: 'Brand/Fairway/950'}}/>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <ButtonGroup>
            <Button size="S" disabled={false} button_shape="semi-rounded-left-to-right" text="Click Me" position="center_center" icons={{leading_icon: 'golf', trailing_icon: 'archive'}} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Cyan/400', focus: 'Semantic/Rose/600', disabled: 'Brand/Fairway/950'}} font_param={{font:inter, weight:400, style:'normal'}} shadow='shadow-2xl-down' badge='3'/>
            <Button size="S" disabled={false} button_shape="semi-rounded-right-to-left" icons={{leading_icon: 'golf'}} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Yellow/600', disabled: 'Brand/Fairway/950'}}/>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <ButtonGroup>
            <Button size="XS" disabled={false} button_shape="semi-rounded-left-to-right" text="Click Me"   position="center_center" icons={{leading_icon: 'golf', trailing_icon: 'archive'}} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Cyan/400', focus: 'Semantic/Rose/600', disabled: 'Brand/Fairway/950'}} font_param={{font:inter, weight:400, style:'normal'}} shadow='shadow-2xl-down' badge='3'/>
            <Button size="XS" disabled={false} button_shape="semi-rounded-right-to-left" icons={{leading_icon: 'golf'}} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Yellow/600', disabled: 'Brand/Fairway/950'}}/>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button border={1} button_shape="semi-rounded" color={{default: 'Brand/Fairway/600', hover: 'Brand/Fairway/800', focus: 'Brand/Fairway/600'}} icons={{leading_icon: 'check'}} text="Valider" />
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button border={1} button_shape="semi-rounded" color={{default: 'Neutral/Grey/100', hover: 'Neutral/Grey/500', focus: 'Neutral/Grey/100'}} icons={{leading_icon: 'sliders-horizontal'}} text="Filtrer" badge="3"/>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <ButtonGroup>
            <Button border={1} button_shape="semi-rounded-left-to-right" color={{default: 'Brand/Hazard/600', hover: 'Brand/Hazard/700', focus: 'Brand/Hazard/800'}} text="Supprimer" />
            <Button border={1} button_shape="semi-rounded-right-to-left" color={{default: 'Brand/Hazard/600', hover: 'Brand/Hazard/700', focus: 'Brand/Hazard/800'}} icons={{leading_icon: 'gear-six'}} />
          </ButtonGroup>        
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button border={1} button_shape="semi-rounded" color={{default: 'Neutral/Grey/100', hover: 'Neutral/Grey/500', focus: 'Neutral/Grey/100'}} icons={{leading_icon: 'trash'}} />
        </div>
        
      </main>
    </div>
  );
}
