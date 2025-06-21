import {
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { urls } from './interceptor';

export const appHttpInterceptor = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const { url, method } = request;

  for (const mock of urls) {
    const urlMatch = url.includes(mock.url);
    const methodMatch = method === (mock.method || 'GET');

    if (urlMatch && methodMatch) {
      console.log(`[Mock Interceptor] Matched ${method} ${url}`);

      return of(null).pipe(
        delay(mock.delay ?? 0),
        mergeMap(() => {
          if (mock.simulateError) {
            console.warn('[Mock Interceptor] Simulated error:', url);
            return throwError(
              () =>
                new HttpErrorResponse({
                  status: mock.status || 500,
                  statusText: 'Simulated Error',
                  url,
                  error: mock.json,
                }),
            );
          }

          return of(
            new HttpResponse({
              status: mock.status || 200,
              body: mock.json,
              url,
            }),
          );
        }),
      );
    }
  }

  // Si no hay match, pasa al backend real
  return next(request);
};
