const {getMoviesByPopulatrity, getMoviesViaInput} = require('../client');

describe('API Testsing', () => {
  describe('getMoviesByPopulatrity', () => {
    it('Returns the first page of popular movies', async () => {
      const response = await getMoviesByPopulatrity();
      expect(response).toBeTruthy();
      expect(response.status).toEqual(200);
      expect(response.data.results.length).toEqual(20);
      expect(response.data.page).toEqual(1);
    });

    it('Return the second page popular movies', async () => {
      const response = await getMoviesByPopulatrity(2);
      expect(response.status).toEqual(200);
      expect(response.data.page).toEqual(2);
    });
  });

  describe('getMoviesViaInput', () => {
    it('Returns Just one movie when no input is passed', async () => {
      const response = await getMoviesViaInput();
      expect(response).toBeTruthy();
      expect(response.status).toEqual(200);
      expect(response.data.results.length).toEqual(1);
      expect(response.data.page).toEqual(1);
    });

    it('Return the second page popular movies', async () => {
      const response = await getMoviesViaInput('Marvel');
      expect(response).toBeTruthy();
      expect(response.status).toEqual(200);
      expect(response.data.results.length).toEqual(20);
      expect(response.data.page).toEqual(1);
      expect(response.data.results[0].title).toContain('Marvel');
    });
  });
});
