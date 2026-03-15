export interface ICategory {
    id: number;
    name: string;
    slug: string;
}

export type TCategoryData = Omit<ICategory, "id">;
