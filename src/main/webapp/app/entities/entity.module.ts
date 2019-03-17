import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'author',
                loadChildren: './author/author.module#BookmanageragmsqlhAuthorModule'
            },
            {
                path: 'book',
                loadChildren: './book/book.module#BookmanageragmsqlhBookModule'
            },
            {
                path: 'comment',
                loadChildren: './comment/comment.module#BookmanageragmsqlhCommentModule'
            },
            {
                path: 'publisher',
                loadChildren: './publisher/publisher.module#BookmanageragmsqlhPublisherModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookmanageragmsqlhEntityModule {}
