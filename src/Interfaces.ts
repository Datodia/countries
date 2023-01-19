export interface countries {
    name: string;
    capital: string;
    flags: {
        svg: string;
    };
    population: number;
    region: string;
    nativeName?: string;
    subregion?: string;
    topLevelDomain?: string;
    currencies: Currency[];
    languages: Language[];
    borders: string[];
}

export interface darkIntFace {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    name: string
}

export interface Theme {
    text: string;
    header: string;
    body: string;
    svg: string;
}