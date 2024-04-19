export interface Superhero {
    id?: number;
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    comics: {
        available: number;
    };
    series: {
        available: number;
    };
    stories: {
        available: number;
    };
}
