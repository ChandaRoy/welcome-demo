import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {SettingsComponent} from './settings/settings.component';
import { AuthComponent } from './auth/auth.component';
import { AgendaComponent} from './agenda/agenda.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const appRoutes: Routes = [
    {
        path:'',
        component: IndexComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
      path:'login',
      component:AuthComponent
    },
    {
      path:'context',
      component:AgendaComponent
    },
    {
      path:'upload',
      component:FileUploadComponent
    }
];

export const RoutingComponent: ModuleWithProviders = RouterModule.forRoot(appRoutes);
