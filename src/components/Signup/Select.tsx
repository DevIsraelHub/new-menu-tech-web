"use client"
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectItem {
  value: string;
  label: string;
}

interface SelectGroup {
  label: string;
  items: SelectItem[];
}

interface CustomSelectProps {
  placeholder: string;
  groups: SelectGroup[];
  value: string;
  onChange: (value: string) => void;
}

export function CustomSelect({ placeholder, groups, value, onChange }: CustomSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger 
                    className="border-[1px] border-black/40 w-full h-10 rounded-md"
                    >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {groups.map((group, index) => (
          <SelectGroup key={index}>
            <SelectLabel>{group.label}</SelectLabel>
            {group.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
