import BaseEntity from '../base.entity';

describe('Test Base Entity', () => {
  it('test entity instantiate correctly', () => {
    const baseEntity = new BaseEntity();
    expect(baseEntity).toBeDefined();
  });
});
