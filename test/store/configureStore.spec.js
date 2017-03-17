import { expect } from 'chai';
import configureStore from '../../src/store/configureStore';
import { initialState } from '../../src/reducers';

describe('Configure Store', () => {
  it('should create store', () => {
    const store = configureStore(initialState);

    expect(store.getState()).to.eql(initialState);
  });
});
