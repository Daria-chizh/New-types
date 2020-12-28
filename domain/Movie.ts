export default class Movie {
    name: string;
    nameEng: string;
    image: string;
    year: number;
    country: string;
    tagline: string;
    genre: string;
    time: string;


    constructor(name: string, nameEng: string, image: string, year: number, country: string, tagline: string, genre: string, time: string) {
    this.name = name;
    this.nameEng = nameEng;
    this.image = image;
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this. time = time;
    }
}

