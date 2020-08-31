import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX';
  totalSpaceXLaunches:Array<any>=[];
  constructor(private http: HttpClient) { }
  ngOnInit() {      
    // Simple GET request with response type <any>
    this.http.get<any>('https://api.spacexdata.com/v3/launches?limit=100').subscribe(data => {
      console.log(data);
        this.totalSpaceXLaunches = data;
        
    })
}
filterlaunchSuccess(launchSuccess){
  this.http.get<any>(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${launchSuccess}`).subscribe(data => {
    console.log(data);
      this.totalSpaceXLaunches = data;
      
  })
  
}
}
