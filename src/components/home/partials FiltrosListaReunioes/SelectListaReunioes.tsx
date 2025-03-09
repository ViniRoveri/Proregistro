import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SelectOption from "@/domain/types/SelectOption"
import { Dispatch, SetStateAction } from "react"

type Props = {
   label: string
   options: SelectOption[]
   setValue: Dispatch<SetStateAction<string>>
   value: string
}

export default function SelectListaReunioes(props: Props){
   return (
      <Select onValueChange={v => props.setValue(v)} value={props.value}>
         <SelectTrigger>
            <SelectValue placeholder={props.label} />
         </SelectTrigger>
         <SelectContent style={{backgroundColor: 'var(--cinzaClaro)'}}>
            {props.options.map(option => 
               <SelectItem key={option.value} value={option.value}>{option.text}</SelectItem>
            )}
         </SelectContent>
      </Select>
   )
}