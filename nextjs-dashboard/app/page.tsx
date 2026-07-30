import Image from "next/image";
import Button, {ButtonGroup} from "./component/button";
import {inter, lusitana, manrope, space_grotesk, sora} from "@/app/ui/font"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-indigo-500 dark:bg-gray sm:items-start">

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <ButtonGroup>
            <Button button_shape="left-to-right" disabled={false} text="Click Me" height={50} width={250} position="center_center" items_size={{left_icon: 25, font_size: 25, right_icon: 25, badge: 20}} icons={{left_icon: 'golf', right_icon: 'archive'}} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Cyan/400', focus: 'Semantic/Rose/600', disabled: 'Brand/Fairway/950'}} font_param={{font:manrope, weight:700, style:'normal'}} shadow='shadow-2xl-down' badge='3'/>
            <Button button_shape="right-to-left" height={50} width={65} items_size={{left_icon: 25}} icons={{left_icon: 'golf'}} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Cyan/400'}}/>
          </ButtonGroup>
          <Button button_shape="rounded" color={{default: 'Brand/Fairway/600'}}/>
        </div>
      </main>
    </div>
  );
}
