import mockAxios from 'axios';

import {getMoviesByPopulatrity} from '../../../../client';

jest.mock('axios');

describe('API Test', () => {
  beforeEach(() => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          results: [
            {
              id: 123,
              name: 'The World!',
            },
          ],
        },
      }),
    );
  });

  it('fetches popular movies from API', async () => {
    const movies = await getMoviesByPopulatrity();

    expect(movies).toEqual({
      data: {
        results: [
          {
            id: 123,
            name: 'The World!',
          },
        ],
      },
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
