'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Option = { label: string; value: string };

interface ISelectProps {
  placeholder: string;
  options: Option[];
  value: string[];
  onValueChange: (values: string[]) => void;
}
const MultiSelect = ({
  placeholder,
  options: values,
  value: selectedItems,
  onValueChange: setSelectedItems,
}: ISelectProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [buttonRef.current]);

  const handleSelectChange = (value: string) => {
    if (!selectedItems.includes(value)) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };

  const isOptionSelected = (value: string): boolean =>
    selectedItems.includes(value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          ref={buttonRef}
          className="w-full px-3 flex items-center justify-between border-gray-200"
        >
          {selectedItems.length > 0 ? (
            <span className="data-[value=false]:text-gray-300 text-gray-950">
              {selectedItems.join(', ')}
            </span>
          ) : (
            <span className="text-gray-300">{placeholder}</span>
          )}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="relative"
        style={{ width: buttonWidth }}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {values.map((option, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            checked={isOptionSelected(option.value)}
            onCheckedChange={() => handleSelectChange(option.value)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MultiSelect;
