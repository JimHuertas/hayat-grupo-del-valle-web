import { useState } from "react";

export const selectedOption = (initialSelectedIndex: number | null = null) => {
    const [selectedButton, setSelectedButton] = useState<number | null>(initialSelectedIndex);
    
    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };

    return { selectedButton, handleButtonClick };
}