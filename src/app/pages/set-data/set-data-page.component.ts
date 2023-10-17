import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JSONHandlerService } from './services/json-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-data-page',
  templateUrl: './set-data-page.component.html',
  styleUrls: ['./set-data-page.compoent.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetDataPageComponent implements OnInit, OnDestroy {

  public form!: FormGroup;

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private handler: JSONHandlerService,
    private router: Router
    ) {}


  public ngOnInit(): void {
    this.form = this.fb.group({
      JSONField: [null, [Validators.required]],
    });
  }

  public onSetData(): void {
    const data = this.form.value.JSONField;
    if (!this.handler.checkJSONStruct(data)) {
      this.form.controls['JSONField'].setErrors({ 'invalidJSON': true });
    } else if (this.handler.checkIfObjectExists(data)) {
      this.form.controls['JSONField'].setErrors({ 'duplicatedId': true });
    } else {
      this.handler.setJSONData(this.form.value.JSONField);
      this.router.navigate(['/pages/projects']);
    }
  }

  public ngOnDestroy(): void {

  }
}
