import { Ng2HnPage } from './app.po';

describe('ng2-hn App', function() {
  let page: Ng2HnPage;

  beforeEach(() => {
    page = new Ng2HnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
