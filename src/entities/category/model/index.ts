export interface ICategory {
    id: number | string;
    name: string;
    slug: string;
    parentId?: number | string;
    description?: string;
    position?: number;
    imageUrl?: string;
    dishSlugs?: string[];
}

export type Category = ICategory;
