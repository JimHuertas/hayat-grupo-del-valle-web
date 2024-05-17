import { Typography } from "@mui/material";

interface TextImageProps{
    urlImage: string;
    text: string;
    backgroundPosition: string;
    fontSize?: string;
}

export const TextImage: React.FC<TextImageProps> = ({urlImage, fontSize = 'clamp(10px, 1vw, 15px)' , text, backgroundPosition}) => {

    return (
        <Typography
            variant="h3" // Elige el tipo de variante adecuada para tu caso
            sx={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: fontSize,
                backgroundSize: 'auto',
                backgroundClip: 'text',
                backgroundImage: `url(${urlImage})`,
                color: 'rgba(255, 255, 255, 0.5)',
                WebkitBackgroundClip: 'text',
                MozTextFillColor: 'transparent',
                WebkitTextFillColor: 'transparent',
                backgroundPosition: backgroundPosition,
            }}
        >
            {text}
        </Typography>
    );
}