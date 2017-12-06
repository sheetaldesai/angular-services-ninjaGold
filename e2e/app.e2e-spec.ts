import { NinjaGoldPage } from './app.po';

describe('ninja-gold App', function() {
  let page: NinjaGoldPage;

  beforeEach(() => {
    page = new NinjaGoldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
