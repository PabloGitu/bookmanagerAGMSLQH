import { NgModule } from '@angular/core';

import { BookmanageragmsqlhSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BookmanageragmsqlhSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BookmanageragmsqlhSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BookmanageragmsqlhSharedCommonModule {}
