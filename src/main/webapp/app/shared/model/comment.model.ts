import { IBook } from 'app/shared/model/book.model';

export interface IComment {
    id?: number;
    userName?: string;
    description?: string;
    book?: IBook;
}

export class Comment implements IComment {
    constructor(public id?: number, public userName?: string, public description?: string, public book?: IBook) {}
}
