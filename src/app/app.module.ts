import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { DynamicFormQuestionComponent } from "./dynamic-form-question/dynamic-form-question.component";
import { QuestionContainerComponent } from "./question-container/question-container.component";
import { UserNewComponent } from "./user-new/user-new.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";
import { AcceptDeclineComponent } from './accept-decline/accept-decline.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    QuestionContainerComponent,
    UserNewComponent,
    UserEditComponent,
    UserListComponent,
    AcceptDeclineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    AcceptDeclineComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
