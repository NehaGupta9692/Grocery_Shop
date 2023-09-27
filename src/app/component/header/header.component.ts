import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone:true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
