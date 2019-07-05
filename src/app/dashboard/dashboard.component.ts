import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  modalData = '';
  constructor() {

    this.hideAndShowNavBarAnimatation();
  }

  ngOnInit() {

    this.smooothScrolingToSectionPage();


  }

  smooothScrolingToSectionPage(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  }
  hideAndShowNavBarAnimatation() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainNav").style.top = "0";
      } else {
        document.getElementById("mainNav").style.top = "-110px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  onPortFolioModalClicked(data){
    this.modalData = data;
    console.log('modal data is: ', this.modalData);
    
  }
}
