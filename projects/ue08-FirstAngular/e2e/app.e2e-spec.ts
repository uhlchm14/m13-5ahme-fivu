import { Ue08FirstAngularPage } from './app.po';

describe('ue08-first-angular App', () => {
  let page: Ue08FirstAngularPage;

  beforeEach(() => {
    page = new Ue08FirstAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
