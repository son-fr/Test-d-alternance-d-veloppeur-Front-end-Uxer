import Image from "next/image";
import Button, {ButtonGroup} from "./component/button";
import {inter, lusitana, manrope, space_grotesk, sora} from "@/app/ui/font"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-indigo-500 dark:bg-gray sm:items-start">

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/at.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <ButtonGroup>
            <Button button_shape="rectangle" disabled={false} text="Click Me" height={50} width={400} position="center_center" text_size={[25, 25, 25, 20]} icons={['golf', 'archive']} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Cyan/400', focus: 'Semantic/Rose/600', disabled: 'Brand/Fairway/950'}} font_param={{font: manrope, weight: 700}} shadow='shadow-2xl-down' badge='3'/>
            <Button button_shape="rectangle" height={50} width={67} text_size={[25]} icons={['golf']} border={1} color={{default: 'Neutral/Grey/50',hover: 'Semantic/Cyan/400'}}/>
          </ButtonGroup>
        </div>
      </main>
    </div>
  );
}
