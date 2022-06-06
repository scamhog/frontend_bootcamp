export type Move = {
    name: string;
    url: string;
    type?: string;
    damage?: number; // power
    powerPoints?: number; // pp
    accuracy?: number;
};

export type Type = {
    name: string;
    url: string;
};