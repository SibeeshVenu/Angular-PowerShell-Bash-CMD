import { Component, OnInit } from '@angular/core';
import { ReleaseService } from 'src/app/services/release.service';
import { config } from 'src/app/config';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {

  constructor(private releaseService: ReleaseService) {
  }

  ngOnInit() {
    this.getVersion();
  }

  getVersion() {
    const command = 'docker -v';
    this.releaseService.getVersion(command).then((value: any) => {
      console.log(value._body);
    });
  }
}
