import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // ✅ Importação necessária
import { AppRoutingModule } from './app-routing.module'; // ✅ Confirme que este arquivo existe

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // ✅ Deve estar aqui!
    RouterModule // ✅ Garante que o roteamento funciona
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

export const routes: Routes = [];
