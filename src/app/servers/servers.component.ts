import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  isServerCreated=false;

  serverCreationStatus='No server is created';

  serverName='Rajasthan Server';
  serverNames=['Ajmer Server','Jaipur server']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreationServer(){
    this.isServerCreated=true;
    this.serverNames.push(this.serverName);
    this.serverCreationStatus='Server is created and name is :- '+this.serverName;
  }

  onUpdateServerName(event:Event){  
    console.log(event)
    this.serverName=(<HTMLInputElement>event.target).value; //Strong typing by Event so TS. 

  }

  // onUpdateServerName(event:any){
  //   console.log(event)
  //   this.serverName=event.target.value;  //JS

  // }

}
