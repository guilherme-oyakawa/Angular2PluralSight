import { PluralSightPage } from './app.po';

describe('plural-sight App', () => {
  let page: PluralSightPage;

  beforeEach(() => {
    page = new PluralSightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
