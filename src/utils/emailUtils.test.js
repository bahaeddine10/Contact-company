import { extractUniqueEmails } from './emailUtils';

describe('extractUniqueEmails', () => {
  it('returns unique non-empty emails from accepted demands', () => {
    const demands = [
      { email: '  user1@example.com  ' },
      { email: 'user2@example.com' },
      { email: 'user1@example.com' },
      { email: '' },
      { email: null },
      { email: undefined },
    ];

    expect(extractUniqueEmails(demands)).toEqual([
      'user1@example.com',
      'user2@example.com',
    ]);
  });

  it('ignores invalid input and keeps the order of first appearance', () => {
    expect(extractUniqueEmails([])).toEqual([]);
    expect(extractUniqueEmails([{ wrong: 'x' }, { email: '  a@b.com  ' }])).toEqual(['a@b.com']);
  });
});
