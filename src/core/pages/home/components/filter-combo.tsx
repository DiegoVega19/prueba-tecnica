"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/core/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/core/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/components/ui/popover";
import { cn } from "@/lib/tw-merge/utils";
import { countries } from "@/common/utilities/constants";
import { ComboProps } from "../models/definitions/components_definitions";
import { useAppSelector } from "@/lib/redux/hooks";
import { getCountryState } from '../features/select_country_selector';

export function FilterCombo({ onSelect }: ComboProps) {
  const [open, setOpen] = React.useState(false);
  const { country } = useAppSelector(getCountryState);
  const handleSelect = (currentValue: string) => {
    const selectedValue = currentValue;
    setOpen(false);
    onSelect(selectedValue);
  };

  return (
    <div className="mr-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[220px] justify-between"
          >
            {country
              ? countries.find((countries) => countries.value == country)?.label
              : "Seleccione un pais..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Busca un pais..." />
            <CommandList>
              <CommandEmpty>No se encontro.</CommandEmpty>
              <CommandGroup>
                {countries.map((countryItem) => (
                  <CommandItem
                    key={countryItem.value}
                    value={countryItem.value}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        country === countryItem.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {countryItem.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
