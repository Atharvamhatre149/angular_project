import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() cardData: any;
    showFullTitle = false;

    handleImageError(event:Event){
        const imgElement=event.target as HTMLImageElement;
        imgElement.src="../../assets/no-poster.png";
    }
}
