import { SisyphusAdventurePage } from './app.po';

describe('sisyphus-adventure App', function() {
  let page: SisyphusAdventurePage;

  beforeEach(() => {
    page = new SisyphusAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
