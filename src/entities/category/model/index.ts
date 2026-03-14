export interface ICategory {
    id: number;
    name: string;
    slug: string;
    parentId?: number;
    description?: string;
    position?: number;
    imageUrl?: string;
    dishSlugs?: string[];
}
