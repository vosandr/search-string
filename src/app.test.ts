import searchIndexes from './app'

test('Search Indexes', () => {
  expect(searchIndexes('Hello ll', 'llo'))
  .toEqual([2, 4]);
})