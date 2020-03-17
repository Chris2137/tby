import { Component, OnInit , Input} from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    display : boolean;
    displayModal : boolean;
    ngOnInit(): void {
    }

    public showDialog(){
      this.display = true;
    }

    showModalDialog() {
            this.displayModal = true;
        }
}
