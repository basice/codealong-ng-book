import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
// tslint:disable-next-line:max-line-length
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
// tslint:disable-next-line:max-line-length
import { DemoFormWithValidationsShorthandComponent } from './demo-form-with-validations-shorthand/demo-form-with-validations-shorthand.component';
import { DemoFormWithCustomValidationComponent } from './demo-form-with-custom-validation/demo-form-with-custom-validation.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { RouterModule, Routes } from '@angular/router';
import { ExampleDef } from './example.model';

/*
 * Here's the master list of our examples for this chapter.
 */
export const examples: ExampleDef[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {
    label: 'Sku',
    name: 'DemoFormSku',
    path: 'sku',
    component: DemoFormSkuComponent
  },
  {
    label: 'Sku (with Builder)',
    name: 'DemoFormSkuWithBuilder',
    path: 'sku-builder',
    component: DemoFormSkuWithBuilderComponent
  },
  {
    label: 'Validation Explicit',
    name: 'DemoFormValidationsExplicit',
    path: 'validations-explicit',
    component: DemoFormWithValidationsExplicitComponent
  },
  {
    label: 'Validation Shorthand',
    name: 'DemoFormValidationsShorthand',
    path: 'validations-shorthand',
    component: DemoFormWithValidationsShorthandComponent
  },
  {
    label: 'Custom Validation',
    name: 'DemoFormWithCustomValidation',
    path: 'custom-validation',
    component: DemoFormWithCustomValidationComponent
  },
  {
    label: 'Events',
    name: 'DemoFormWithEvents',
    path: 'events',
    component: DemoFormWithEventsComponent
  },
  {
    label: 'NgModel',
    name: 'DemoFormNgModel',
    path: 'ng-model',
    component: DemoFormNgModelComponent
  }
];

const routes: Routes = [
  {path: '', component: IntroComponent, pathMatch: 'full'},
  {path: 'sku', component: DemoFormSkuComponent, pathMatch: 'full'},
  {
    path: 'sku-builder',
    component: DemoFormSkuWithBuilderComponent,
    pathMatch: 'full'
  },
  {
    path: 'validations-explicit',
    component: DemoFormWithValidationsExplicitComponent,
    pathMatch: 'full'
  },
  {
    path: 'validations-shorthand',
    component: DemoFormWithValidationsShorthandComponent,
    pathMatch: 'full'
  },
  {
    path: 'custom-validation',
    component: DemoFormWithCustomValidationComponent,
    pathMatch: 'full'
  },
  {path: 'events', component: DemoFormWithEventsComponent, pathMatch: 'full'},
  {path: 'ng-model', component: DemoFormNgModelComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithValidationsShorthandComponent,
    DemoFormWithCustomValidationComponent,
    DemoFormWithEventsComponent,
    DemoFormNgModelComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: 'ExampleDefs', useValue: examples}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
