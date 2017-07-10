import { Component } from '@angular/core';
import * as io from 'socket.io-client'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    var socket = io.connect('http://localhost');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
    setInterval(this.simulateSocket, 1000, this);
  }

  title = 'app';
  selectedRowTable: any[] = [];
  showRowOne = false;
  showRowTwo = false;

  data = [{
    name: "Mani",
    age: "23",
    sex: "Female",
    val1: "Value 1",
    val2: "Value 2",
    val3: "Value 3",
    val4: "Value 4",
    val5: "Value 5",
    val6: "Value 6",
    table: [
    ]
  }, {
    name: "Teja",
    age: "25",
    sex: "Male",
    val1: "Value a",
    val2: "Value b",
    val3: "Value c",
    val4: "Value d",
    val5: "Value e",
    val6: "Value f",
    table: []
  }];

  simulateSocket(_this) {
    // Connect to socket
    _this.data.map(row => {
      row.table.push(Math.random());
    });
  }

  toggleRowOne(event, i) {
    console.log(i);
    this.selectedRowTable = this.data[i].table;
    this.showRowOne = !this.showRowOne;
    if (!this.showRowOne) {
      this.showRowTwo = false;
    }
  }

  toggleRowTwo(event) {
    this.showRowTwo = !this.showRowTwo;
  }

}
