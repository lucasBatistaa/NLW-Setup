import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface Props {
    style?: string
    text: string
    checked: boolean
    disabled: boolean
}

export function CheckBox({ style = "", text, checked, disabled }: Props) {

    return (
        <Checkbox.Root
            className='flex items-center gap-3 group'
            checked={checked}
            disabled={disabled}
        >
            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                    <Check size={20} className="text-white" />
                </Checkbox.Indicator>

            </div>

            <span
                className={`${style} text-white leading-tight`}
            >
                {text}
            </span>
        </Checkbox.Root>
    )
}