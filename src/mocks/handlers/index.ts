import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json({
      id: '1',
      firstName: 'lee',
      lastName: 'joo',
    });
  }),
];
