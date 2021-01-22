export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllBooks = async () => {
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const example = await this.getResource(`/books/${id}`);
        return this._transformBook(example);
    }

    getAllHouses = async () => {
        const res = await this.getResource('/houses');
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const family = await this.getResource(`/houses/${id}`);
        return this._transformHouse(family);
    }

    isSet(prop) {
        if (prop) {
            return prop;
        } else {
            return 'no data :(';
        }
    }

    _extractId = (item) => {
        const regid = /[0-9]*$/;
        return item.url.match(regid);
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died), 
            culture: this.isSet(char.culture)
        };
    }

    // _getOverlordName = async (url) => {
    //     if (url) {
    //         const reg = /\/houses\/[0-9]*$/;
    //         const overlord = await this.getResource(url.match(reg));
    //         const name = overlord.name;
    //         console.log(name);
    //         return name;
    //     } else {
    //         return 'no data:(';
    //     }
    // }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: house.overlord,
            ancestralWeapons: this.isSet(house.ancestralWeapons)
        };
    }

    _transformBook = (book) => {
        
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released.replace(/t.*$/gi, ''))
        };
    }
}

