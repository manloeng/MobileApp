const {getMoviesByPopulatrity, getMoviesViaInput} = require('../client');

describe('API Testsing', () => {
  describe('getMoviesByPopulatrity', () => {
    it('Returns a 200 Success: returns the first page of popular movies', async () => {
      const response = await getMoviesByPopulatrity();
      expect(response).toBeTruthy();
      expect(response.status).toEqual(200);
      expect(response.data.results.length).toEqual(20);
      expect(response.data.page).toEqual(1);
    });

    it('Return a 200 Sucess: returns the second page popular movies', async () => {
      const response = await getMoviesByPopulatrity(2);
      expect(response.status).toEqual(200);
      expect(response.data.page).toEqual(2);
    });

    it('Return a 400 Bad Request: when a invalid page number is entered', async () => {
      const response = await getMoviesByPopulatrity('Fail');
      expect(response.status).toEqual(400);
      expect(response.msg).toEqual('Please enter a valid page number');
    });
  });

  describe('getMoviesViaInput', () => {
    it('Returns a 200 Success: Returns Just one movie when no input is passed', async () => {
      const response = await getMoviesViaInput();
      expect(response).toBeTruthy();
      expect(response.status).toEqual(200);
      expect(response.data.results.length).toEqual(1);
      expect(response.data.page).toEqual(1);
    });

    it('Returns a 200 Success: Return movies containing Marvel', async () => {
      const response = await getMoviesViaInput('Marvel');
      expect(response).toBeTruthy();
      expect(response.status).toEqual(200);
      expect(response.data.results.length).toEqual(20);
      expect(response.data.page).toEqual(1);
      expect(response.data.results[0].title).toContain('Marvel');
    });

    it('Returns a 200 Success: Return a movie list with no movies when passed with gibberish', async () => {
      const response = await getMoviesViaInput('!@£$%');
      expect(response).toBeTruthy();
      expect(response.data.results.length).toEqual(0);
    });
  });
});
