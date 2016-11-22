import { EngineeringOssPortalPage } from './app.po';

describe('engineering-oss-portal App', function() {
  let page: EngineeringOssPortalPage;

  beforeEach(() => {
    page = new EngineeringOssPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
