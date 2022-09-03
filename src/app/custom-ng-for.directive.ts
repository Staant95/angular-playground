import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngCustomFor]'
})
export class CustomNgForDirective implements OnInit {
  @Input('ngCustomForFrom') items: any[] | undefined;

  constructor(
    private templateRef: TemplateRef<{ $implicit: any; index: number }>,
    private viewContainerRef: ViewContainerRef
  ) {}

   /*

    The name of the input should be directive name + the name of
    word BEFORE the array name, in this case 'from'.

                      @Input() ngCustomForFrom
                                |
                    Context     |
                       |        |
    *ngCustomFor="let val from values; let customIndex = index"


    The Context may be set to anything but should be set as an element
    during iteration along values (given array).

    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: { name: 'asd' }, // set the context with anything you like (object, string, number, etc.)
      index: 0, // index of the element in the array
    });

    * $implicit key manipulates value for val in our expression
    * index will set the current index of iteration

  */
  ngOnInit(): void {
    this.items?.forEach((item, index) =>
    this.viewContainerRef.createEmbeddedView(
      this.templateRef,
      {
        $implicit: item,
        index
      }
    )
    );
  }

}
