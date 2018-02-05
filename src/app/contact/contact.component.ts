import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( res => console.log(res.contactNumber));
  }

  ngOnInit() {
  }

  goToHomes(){
    this.router.navigate(['']);
  }

}
