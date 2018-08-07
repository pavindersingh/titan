import { NgModule } from '@angular/core';

import { TitanSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TitanSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TitanSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TitanSharedCommonModule {}
