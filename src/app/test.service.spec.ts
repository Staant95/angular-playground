import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService],
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should error', () => {
    service.willError().subscribe({
      next: () => fail('should have failed'),
      error: () => expect(true).toBeTruthy(),
    });
  });

  it('should not error', () => {
    service.willNotError().subscribe({
      next: () => expect(true).toBeTruthy(),
      error: () => fail('should not have failed'),
    });
  });
});
