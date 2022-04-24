describe('searchCandies', () => {
    it('you can search for candies with a certain price', () => {
     expect(searchCandies('ma', 10)).toEqual (['Mars', 'Maltesers'])
    });

    it('you can search for candies with a certain price', () => {
        expect(searchCandies('Ma', 10)).toEqual (['Mars', 'Maltesers'])
       });
});

const searchCandies = require('./searchCandies')