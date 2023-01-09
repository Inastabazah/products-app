import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatProductsComponent } from './creat-products.component';

describe('CreatProductsComponent', () => {
  let component: CreatProductsComponent;
  let fixture: ComponentFixture<CreatProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
