import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  adoptionForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.adoptionForm = this.fb.group({
      nameCtrl: ['', Validators.required]
    });
  }

}
