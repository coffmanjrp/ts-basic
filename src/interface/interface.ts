export default function interfaceSample() {
  // interface
  interface Bread {
    calories: number;
  }

  interface Bread {
    type: string;
  }

  const frenchBread: Bread = {
    calories: 300,
    type: 'hard',
  };

  // type alias
  type MapoTofu = {
    calories: number;
    spicyLevel: number;
  };

  type Rice = {
    calories: number;
    gram: number;
  };

  type MapoBowl = MapoTofu & Rice;

  const mapoBowl: MapoBowl = {
    calories: 500,
    spicyLevel: 10,
    gram: 350,
  };

  // Inheriting Interface
  interface Book {
    page: number;
    title: string;
  }

  interface Magazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly' | 'yearly';
  }

  const jump: Magazine = {
    page: 300,
    title: 'Weekly Jump',
    cycle: 'weekly',
  };

  type BookType = {
    page: number;
    title: string;
  };

  interface HandBook extends BookType {
    theme: string;
  }

  const cotrip: HandBook = {
    page: 120,
    title: 'Cotrip',
    theme: 'travel',
  };

  // Implement interface to class
  class Comic implements Book {
    page: number;
    title: string;

    constructor(page: number, title: string, private publishYear: string) {
      this.page = page;
      this.title = title;
    }

    getPublishYear() {
      return `First issue of ${this.title} was released on ${this.publishYear}`;
    }
  }

  const popularComic = new Comic(200, 'DRAGON BALL', '1984');
  console.log('interfaceSample 01', popularComic.getPublishYear());
}
