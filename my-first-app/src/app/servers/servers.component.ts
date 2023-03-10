import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]', <div app-server></div>
  // selector:'.app-server, <div class="app-server"></div>
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName="TestServer"
  serverCreated=false;

  servers = ['TestServer','TestServer2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = "Server was created is "+this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:Event) {
    // console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
