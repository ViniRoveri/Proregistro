import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import conversoes from "@/domain/utility/conversoes"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Dispatch, SetStateAction } from "react"

type Props = {
   label: string
   setValue: Dispatch<SetStateAction<Date | null>>
   value: Date | null
}

export default function DataListaReunioes(props: Props){
   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button>
               <i className="ri-calendar-line"></i>
               {props.value ? conversoes.dataParaString(props.value) : <span>{props.label}</span>}
            </Button>
         </PopoverTrigger>
         <PopoverContent style={{backgroundColor: 'var(--cinzaClaro)'}}>
            <Calendar id="seletorDataReunioes" initialFocus mode="single" onDayClick={props.setValue} selected={props.value || new Date()}/>
         </PopoverContent>
      </Popover>
   )
}