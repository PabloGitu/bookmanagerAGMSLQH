import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IComment } from 'app/shared/model/comment.model';
import { CommentService } from './comment.service';
import { IBook } from 'app/shared/model/book.model';
import { BookService } from 'app/entities/book';
import { LoginModalService, AccountService, Account } from 'app/core';

@Component({
    selector: 'jhi-comment-update',
    templateUrl: './comment-update.component.html'
})
export class CommentUpdateComponent implements OnInit {
    account: Account;
    comment: IComment;
    isSaving: boolean;

    books: IBook[];

    constructor(
        private accountService: AccountService,
        protected jhiAlertService: JhiAlertService,
        protected commentService: CommentService,
        protected bookService: BookService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.accountService.identity().then((account: Account) => {
            this.account = account;
        });
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ comment }) => {
            this.comment = comment;
        });
        this.bookService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IBook[]>) => mayBeOk.ok),
                map((response: HttpResponse<IBook[]>) => response.body)
            )
            .subscribe((res: IBook[]) => (this.books = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.comment.id !== undefined) {
            this.subscribeToSaveResponse(this.commentService.update(this.comment));
        } else {
            this.comment.userName = this.account.login;
            this.subscribeToSaveResponse(this.commentService.create(this.comment));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IComment>>) {
        result.subscribe((res: HttpResponse<IComment>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackBookById(index: number, item: IBook) {
        return item.id;
    }
}
