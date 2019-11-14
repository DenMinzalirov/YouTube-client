import AppModel from './AppModel';

describe('AppModel.extract*', () => {
  it('Shold be an instance of Function', () => {
    expect(AppModel.extractIdVideo).toBeInstanceOf(Function);
    expect(AppModel.extractClipData).toBeInstanceOf(Function);
  });
});
