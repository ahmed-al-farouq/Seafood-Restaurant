import { countComments } from '../src/components/popup.js';

// Arrange

const commentArray = [
  {
    creation_date: '14/10/2021',
    username: 'Francis Ugorji',
    comment: 'This is Yummy and tasty',
  },
  {
    creation_date: '14/10/2021',
    username: 'Ahmed Al-Farooq',
    comment: 'I have to order this for dinner',
  },
];

describe('Test if countComments function works', () => {
  test('Does the function return length of array', () => {
    // Act
    const testVariable = countComments(commentArray);

    // Assert
    expect(testVariable).toEqual(2);
  });
  test('If you add comment, does it update the number of comments', () => {
    // Act
    commentArray.push({
      creation_date: '14/10/2021',
      username: 'Ben Mukebo',
      comment: 'I am licking my lips here',
    });
    const newVariable = countComments(commentArray);

    // Assert
    expect(newVariable).toEqual(3);
    expect(newVariable).not.toBe(2);
  });
});