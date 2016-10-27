import { SpotifyApiPage } from './app.po';

describe('spotify-api App', function() {
  let page: SpotifyApiPage;

  beforeEach(() => {
    page = new SpotifyApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
