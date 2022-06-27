const { I } = inject();

module.exports = {
    fields: {
        beginnersPageTitle: '.basic-widget__props-item:nth-child(1) > .row > .col-6:nth-child(1) > .basic-widget__prop-text > span:nth-child(2)',
    },
    async getTitleBeginnersPage () {
        const text = await I.grabTextFrom(this.fields.beginnersPageTitle);
        return text;
    }
  // insert your locators and methods here
}
