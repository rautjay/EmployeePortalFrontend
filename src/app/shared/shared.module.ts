import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from 'primeng/tabview';
import {InputNumberModule} from 'primeng/inputnumber';

import {FieldsetModule} from 'primeng/fieldset';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    ToolbarModule,
    SidebarModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    DialogModule,
    TableModule,
    MessagesModule,
    ToastModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    MenubarModule,
    FileUploadModule,
    PanelModule,
    FieldsetModule,
    AccordionModule,
    TabViewModule,
    InputNumberModule


    
    

    
  
    
  ],
  exports:[
    ButtonModule,
    RouterModule,
    ToolbarModule,
    SidebarModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    TableModule,
    MessagesModule,
    ToastModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    MenubarModule,
    FileUploadModule,
    PanelModule,
    FieldsetModule,
    AccordionModule,
    TabViewModule,
    InputNumberModule
    
  ]
})
export class SharedModule { }
