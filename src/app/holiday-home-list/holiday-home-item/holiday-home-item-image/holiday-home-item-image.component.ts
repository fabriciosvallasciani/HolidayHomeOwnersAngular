import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ImageModel } from 'src/app/models/image.model';

@Component({
  selector: 'app-holiday-home-item-image',
  templateUrl: './holiday-home-item-image.component.html',
  styleUrls: ['./holiday-home-item-image.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HolidayHomeItemImageComponent implements OnInit {
  @Input() imageList: ImageModel[];
  @Input() showRemoveButton: boolean;

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
  }

  addImage(newAltText: HTMLInputElement, newUrl: HTMLInputElement){
    let newImage = new ImageModel();
    newImage.setModel(null, newAltText.value, newUrl.value);
    this.imageList.push(newImage);

    return false;
  }

  removeImage(){
    let indexToRemove = this.indexOfClassNameToFind("carousel-item", "active");
    this.imageList.splice(indexToRemove,1);

    return false;
  }

  private indexOfClassNameToFind(collectionClassName: string, classNameToFind: string): number {
    let collection = document.getElementsByClassName(collectionClassName);
    let nodeToFind = document.getElementsByClassName(collectionClassName + ' ' + classNameToFind)[0];
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] === nodeToFind) {
        return i;
      }
    }
    return -1;
  }
}
