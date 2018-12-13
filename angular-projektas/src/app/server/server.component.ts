import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'isjungtas';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Ijungtas' : 'Isjungtas';
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Ijungtas' ? 'green' : 'red';
  }

}
