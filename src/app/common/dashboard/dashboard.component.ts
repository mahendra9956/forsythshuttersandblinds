import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {




  public carousel=[
    {
      img:"unnamed (1).jpg",
      alt: "Img-1"
    },
    {
      img:"unnamed (2).jpg",
      alt: "Img-2"
    },
    {
      img:"unnamed (3).jpg",
      alt: "Img-3"
    },
    {
      img:"unnamed (4).png",
      alt: "Img-4"
    },
    {
      img:"unnamed (9).jpg",
      alt: "Img-5"
    },
    {
      img:"unnamed.jpg",
      alt: "Img-6"
    }
  ]






  slides = [
    { image: './assets/gallery/unnamed (1).jpg', thumbnail: './assets/gallery/unnamed (1).jpg', caption: 'Woods' },
    { image: './assets/gallery/unnamed (2).jpg', thumbnail: './assets/gallery/unnamed (2).jpg', caption: 'Wood Blind'},
    { image: './assets/gallery/unnamed (3).jpg', thumbnail: './assets/gallery/unnamed (3).jpg', caption: 'The Woods' },
    { image: './assets/gallery/unnamed (4).jpg', thumbnail: './assets/gallery/unnamed (4).jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/unnamed (5).jpg', thumbnail: './assets/gallery/unnamed (5).jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/unnamed (6).jpg', thumbnail: './assets/gallery/unnamed (6).jpg', caption: 'Wood Blind'},
    { image: './assets/gallery/unnamed (7).jpg', thumbnail: './assets/gallery/unnamed (7).jpg', caption: 'The Woods' },
    { image: './assets/gallery/unnamed (8).jpg', thumbnail: './assets/gallery/unnamed (8).jpg', caption: 'Wood Blind'},
    { image: './assets/gallery/images (1).jpg', thumbnail: './assets/gallery/images (1).jpg', caption: 'Wood Blind' },
    { image: './assets/img/unnamed (1).jpg', thumbnail: './assets/img/unnamed (1).jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/images (1).jpg', thumbnail: './assets/gallery/images (1).jpg', caption: 'Wood Blind'},   
    { image: './assets/gallery/images (2).jpg', thumbnail: './assets/gallery/images (2).jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/images (3).jpg', thumbnail: './assets/gallery/images (3).jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/images (4).jpg', thumbnail: './assets/gallery/images (4).jpg',caption: 'Wood Blind'},
    { image: './assets/gallery/images (5).jpg', thumbnail: './assets/gallery/images (5).jpg', caption: 'Wood Blind' },   
    { image: './assets/gallery/images (6).jpg', thumbnail: './assets/gallery/images (6).jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/images (7).jpg', thumbnail: './assets/gallery/images (7).jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/images.jpg', thumbnail: './assets/gallery/images.jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/images (3).jpg', thumbnail: './assets/gallery/images (3).jpg', caption: 'Wood Blind' },
    { image: './assets/gallery/unnamed (7).jpg', thumbnail: './assets/gallery/unnamed (7).jpg', caption: 'The Woods' }
  ];

  currentSlideIndex = 0;

  changeSlide(step: number) {
    this.currentSlideIndex = (this.currentSlideIndex + step + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

}
