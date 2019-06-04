import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardLinkComponent } from './card-link/card-link.component';
import { CardLinksComponent } from './card-links/card-links.component';

@NgModule({
  declarations: [
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardContainerComponent,
    CardLinkComponent,
    CardLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardContainerComponent,
    CardLinkComponent,
    CardLinksComponent
  ]
})
export class CardModule { }
