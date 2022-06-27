const { I } = inject();

module.exports = {
    fields: {
        wishlistTitle: '.d-flex > .d-none > .breadcrumb > .active > span',
    },
    async getTitleWishlistPage () {
        const text = await I.grabTextFrom(this.fields.wishlistTitle);
        return text;
    }
  // insert your locators and methods here
}
