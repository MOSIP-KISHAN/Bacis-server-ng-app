import {Component} from '@angular/core';


@Component({
    selector:"server-app",
    templateUrl:"./server.component.html",
    styleUrls:['./server.component.css']
})
export class ServerComponent{

    //serverId=10;
  serverId:number=10;
  //serverStatus:'Under construction';
  serverStatus:String=Math.random()>0.5? 'online':'offline';   //Strong typing of type script

 getServerStatus(){
     return this.serverStatus;
 }
 getColor(){
     return this.serverStatus=='online    ' ? 'green':'red'
 }
}
