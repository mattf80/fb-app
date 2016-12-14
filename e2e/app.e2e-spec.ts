import { FbAppPage } from './app.po';

describe('fb-app App', function() {
  let page: FbAppPage;

  beforeEach(() => {
    page = new FbAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
