// import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { TextBoxComponent } from "./text-box/text-box.component";
import { HighLightDirective } from "./high-light/high-light.directive";
import { ButtonComponent } from "./button/button.component";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [TextBoxComponent, HighLightDirective, ButtonComponent],
  exports: [
    TextBoxComponent,
    HighLightDirective,
    ButtonComponent,
    // BrowserAnimationsModule
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule
  ],
  providers: []
})
export class CommonComponentModule {}
