import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { GlobalState } from '@store/states/global.state';
import { environment } from '@environments/environment';
import { StoreStorageModule } from './store-storage.module';

const MODULES: any = [
  NgxsLoggerPluginModule.forRoot(),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsStoragePluginModule.forRoot(),
  NgxsFormPluginModule.forRoot()
];

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([GlobalState], {
      developmentMode: !environment.production
    }),
    ...MODULES,
    StoreStorageModule
  ],
  exports: [...MODULES]
})
export class StateModule {}
