import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Flops';
  voted: any;
  btnDisabled: any;

  movieFlops = [{
      title: 'John Carter',
      image: '../assets/john-carter.jpg',
      imageUrl: 'https://m.media-amazon.com/images/I/91RjCRa3TcL._AC_UY218_.jpg'
    },
    {
      title: 'Enders Game',
      image: '../assets/enders-game.jpg',
      imageUrl: 'https://m.media-amazon.com/images/I/81wgCjunnvL._AC_UY218_.jpg'
    },
    {
      title: 'Hansel & Gretel',
      image: '../assets/hansel-and-gretel.jpg',
      imageUrl: 'https://m.media-amazon.com/images/I/81SmWWyOYiL._AC_UY218_.jpg'
    },
    {
      title: 'Prince Of Persia',
      image: '../assets/prince-of-persia.jpg',
      imageUrl: 'https://m.media-amazon.com/images/I/A1u+txg+0XL._AC_UY218_.jpg'
    }
  ];

  vote(index: any) {
    if (this.voted[index] == 'Vote') {
      this.voted[index] = 'Unvote';
    } else {
      this.voted[index] = 'Vote';
    }
    this.movieFlops.forEach((value, i) => {
      if (i === index) {
        this.btnDisabled[i] = false;
      } else {
        this.btnDisabled[i] = true;
      }

      if (this.voted[index] === 'Vote') {
        this.btnDisabled[i] = false;
      }
    })
  }

  ngOnInit(): void {
    this.voted = Array.from({ length: this.movieFlops.length }).fill('Vote');
    this.btnDisabled = Array.from({ length: this.movieFlops.length }).fill(false);
  }
}
