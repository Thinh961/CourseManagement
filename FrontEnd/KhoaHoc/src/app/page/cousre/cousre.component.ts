import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cousre',
  templateUrl: './cousre.component.html',
  styleUrls: ['./cousre.component.css'],
})
export class CousreComponent implements OnInit {
  listCoures: any = [
    {
      id: '1',
      name: 'Thiết kế minh họa với illustrator',
      teacher: 'Thầy Nguyễn Đức Việt',
      price: 150.0,
      image: '../../../assets/images/thietkeminhhoa.jpg',
      sale: 20,
    },
    {
      id: '2',
      name: 'FRONT-END-05 Kĩ thuật javascripts nâng cao',
      teacher: 'Thầy Nguyễn Đức Việt',
      price: 650.0,
      image: '../../../assets/images/khoaJS.png',
      sale: 25,
    },
    {
      id: '3',
      name: 'Lập trình Fullstack với angular 1 và mySQL',
      teacher: 'Thầy Nguyễn Đức Việt',
      price: 550.0,
      image: '../../../assets/images/fullstackangularmysql.jpg',
      sale: 10,
    },
    {
      id: '4',
      name: 'Học Jquery từ cơ bản đến nâng cao',
      teacher: 'Thầy Nguyễn Đức Việt',
      price: 350.0,
      image: '../../../assets/images/jquery.jpg',
      sale: 15,
    },
    {
      id: '5',
      name: 'học phần 2-01 Kĩ thuật cơ bản với photoshop',
      teacher: 'Thầy Nguyễn Đức Việt',
      price: 250.0,
      image: '../../../assets/images/thietkedohoa.jpg',
      sale: 30,
    },

    {
      id: '6',
      name: 'KĨ THUẬT NÂNG CAO VỚI PHOTOSHOP',
      teacher: 'Thầy Nguyễn Đức Việt',
      price: 450.0,
      image: '../../../assets/images/photoshopnangcao.jpg',
      sale: 15,
    },
    {
      id: '7',
      name: 'Kĩ thuật tán gái nâng cao với giáo án 3 đời',
      teacher: 'Thầy Ngô Xuân Diệu',
      price: 450,
      image: '../../../assets/images/tangai.jfif',
      sale: 15,
    },
  ];
  private _routerService: any;
  onSelectDetail(courseID: number){
    this._routerService.navigate(['/course', courseID]);
  }
  constructor() {}

  ngOnInit(): void {}
}
