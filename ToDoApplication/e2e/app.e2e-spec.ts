import { ToDoAngularPage } from './app.po';

describe('to-do-angular App', function() {
  let page: ToDoAngularPage;

  beforeEach(() => {
    page = new ToDoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
