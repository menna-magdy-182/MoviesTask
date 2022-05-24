export interface Category {
    id:Number;
    name: string;
    movies: Movie[]
}
export interface Movie {
    id:Number;
    name:string;
    description:string;
    rate:string;
}