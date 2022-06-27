const { I } = inject();

module.exports = {
    // fields: {
    //     collection: '#username',
    //     btnAdd: '#password',
    //     btnCart: ''
    // },
    button: {
        btnPopupEmail: '#body > .sp-form-outer > #sp-form-167389 > .sp-form-fields-wrapper > .sp-btn-close',
        btnPopupAge: '.disclaimer-popup__overlay > .disclaimer-popup > .disclaimer-popup__wrapper > .disclaimer-popup__accept > .pseudo-checkbox',
        collection: '.row > .col-12 > .desktop-links > .desktop-links__list > .desktop-links__item:nth-child(2)',
        btnAdd: '.category-item__container:nth-child(2) > .category-item__inner > .category-item__product-list-price > .product-list-price > .quick-buy-btn',
        btnCart: '.col-12 > .header__top-container > .header-btns > #topline_basket_btn > svg',

        linkBeginnersPage: '.row > .d-none:nth-child(1) > .list-unstyled > .footer-menu__item:nth-child(2) > a',

        btnAddToWishlist: '.glide__slide--active > .products-carousel__item-inner > .action-buttons > .bookmarks__link > svg',
        btnOpenWishlist: '.col-12 > .header__top-container > .header-btns > .header-btns__item > .js-bookmarks-count',

        btnAddToCompare: '.products-widgets__container:nth-child(2) > .widget__container:nth-child(2) > .products-carousel__container:nth-child(1) > .products-carousel__glide-track:nth-child(1) > .products-carousel__glide-slides:nth-child(1) > .products-carousel__item:nth-child(3) > .products-carousel__item-inner:nth-child(1) > .action-buttons:nth-child(2) > .compare__link:nth-child(2) > svg:nth-child(1)',
        btnOpenCompare: '.col-12 > .header__top-container > .header-btns > .header-btns__item:nth-child(3) > svg',

        btnOpenCatalog: '.row > .col-12 > .desktop-links > .desktop-links__list > .desktop-links__item:nth-child(4)',
    },
    async addCart () {
        I.click(this.button.btnPopupAge);
        //I.waitForClickable(this.button.btnPopupEmail)
       // I.click(this.button.btnPopupEmail);
        I.click(this.button.collection);
        I.click(this.button.btnAdd);
        //I.waitForElement(this.button.btnCart, 30);
        I.wait(5);
        I.click(this.button.btnCart);
    },
    async openBeginnersPage () {
        I.click(this.button.btnPopupAge);
        I.wait(3);
        I.click(this.button.linkBeginnersPage);
    },
    async addToWishlist () {
        I.click(this.button.btnPopupAge);
        I.wait(3);
        I.click(this.button.btnAddToWishlist);
        I.click(this.button.btnOpenWishlist);
    },
    async addToCompare () {
        I.click(this.button.btnPopupAge);
        I.click(this.button.btnAddToCompare);
        I.click(this.button.btnOpenCompare);
    },
    async openCatalog () {
        I.click(this.button.btnPopupAge);
        I.click(this.button.btnOpenCatalog);
    }
  // insert your locators and methods here
}
