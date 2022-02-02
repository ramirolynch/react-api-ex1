export interface FameResponse {
    complete: CompleteFame[];
    tiny: TinyFame[];
}

export interface CompleteFame {
    firstName: string;
    lastName: string;
    innovation: string;
    year: number;
}

export interface TinyFame {
    name: string;
    invented : string;
    year: number;
}