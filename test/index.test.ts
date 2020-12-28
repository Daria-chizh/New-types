import Movie from '../domain/Movie';
import Cart from '../service/Cart';

test ('new card should be empty', () => {
    const cart = new Cart();
    const sampleMovie = new Movie('Мстители', 'The avrngers',' https://www.kinopoisk.ru/film/263531/posters/);', 2012,'США', 'Avengers Assemble','фантастика', '137 мин');
    cart.add(sampleMovie);
    expect(cart.items).toMatchObject([{ name: 'Мстители', year: 2012, country: 'США' }]);
});
