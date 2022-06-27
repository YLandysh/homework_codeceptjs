const assert = require ('assert');
Feature('Add Seed To Cart');

Before(({I}) => {
    I.amOnPage('/');
});

Scenario('user can add seed to cart', async ({ I, mainPage, currentPage }) => {
    await mainPage.addCart();
    const title = await currentPage.getCartTitle();
    assert.deepStrictEqual(title, 'Shopping cart', 'семя добавлено в корзину');
});

Scenario('user can see page for beginners', async ({ I, mainPage, beginnersPage }) => {
    await mainPage.openBeginnersPage();
    const r = await beginnersPage.getTitleBeginnersPage();
    assert.deepStrictEqual(r, 'Good for beginners', 'открыта страница для начинающих');
});

Scenario('user can see add seed to wishlist', async ({ I, mainPage, wishlistPage}) => {
    await mainPage.addToWishlist();
    const s = await wishlistPage.getTitleWishlistPage();
    assert.deepStrictEqual(s, 'Wishlist', 'семя добавлено в избранное');
});

Scenario('user can see add seed to compare', async ({ I, mainPage, comparePage}) => {
    await mainPage.addToCompare();
    const k = await comparePage.getTitleComparePage();
    assert.deepStrictEqual(k, 'Compare & Choose the Best', 'семя добавлено в сравнение');
});

Scenario('user can open catalog', async ({ I, mainPage, catalogPage}) => {
    await mainPage.openCatalog();
    const y = await catalogPage.getTitleCatalog();
    assert.deepStrictEqual(y, 'Catalog', 'открыта страница каталога');
});