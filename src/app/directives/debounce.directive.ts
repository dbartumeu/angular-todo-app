import { Directive, ElementRef, Input, Renderer, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][debounce]',
})
export class DebounceDirective {
  @Output()
  public onDebounce = new EventEmitter<any>();

  @Input('debounce')
  public debounceTime: number = 500;


  private modelValue = null;

  constructor(public model: NgControl, el: ElementRef, renderer: Renderer)
  {

  }

  ngOnInit()
  {
    this.modelValue = this.model.value;

    if (!this.modelValue)
    {
      var firstChangeSubs = this.model.valueChanges.subscribe(v =>
      {
        this.modelValue = v;
        firstChangeSubs.unsubscribe()
      });
    }

    this.model.valueChanges
      .debounceTime(this.debounceTime)
      .distinctUntilChanged()
      .subscribe(mv =>
      {
        if (this.modelValue != mv)
        {
          this.modelValue = mv;
          this.onDebounce.emit(mv);
        }
      });
  }
}
