import { Socket.AppPage } from './app.po';

describe('socket.app App', () => {
  let page: Socket.AppPage;

  beforeEach(() => {
    page = new Socket.AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
