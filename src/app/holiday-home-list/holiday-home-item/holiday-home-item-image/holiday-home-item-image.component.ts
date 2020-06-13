import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ImageModel } from 'src/app/models/image.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-holiday-home-item-image',
  templateUrl: './holiday-home-item-image.component.html',
  styleUrls: ['./holiday-home-item-image.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HolidayHomeItemImageComponent implements OnInit {
  @Input() imagesList: ImageModel[];
  @Input() showRemoveButton: boolean;
  @Output() imagesListChange: EventEmitter<ImageModel[]>; 
  
  imageForm: FormGroup;
  
  constructor(config: NgbCarouselConfig, private fb: FormBuilder) {
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

    this.imageForm = this.fb.group({
      altText: [''],
      url: ['', Validators.required]
    });

    this.imagesListChange = new EventEmitter<ImageModel[]>();
   }

  ngOnInit(): void {
  }

  addImage(){
    let newImage = new ImageModel();
    newImage.setModel(null, this.imageForm.value.altText, this.imageForm.value.url);
    this.imagesList.push(newImage);

    this.imagesListChange.emit(this.imagesList);

    return false;
  }

  removeImage(){
    let indexToRemove = this.indexOfClassNameToFind("carousel-item", "active");
    this.imagesList.splice(indexToRemove,1);

    this.imagesListChange.emit(this.imagesList);

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
