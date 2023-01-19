export interface countries {
    name: string;
    capital: string;
    flags: {
        svg: string
    };
    population: number;
    region: string;

}

export interface darkIntFace {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}