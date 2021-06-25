const chai = require('chai');
const expect = chai.expect;
const { generateBoard, queenThreat } = require('../queen_threat_detector');

const whiteQueen = [0, 5];
const blackQueen = [5, 0];

describe('Generate board', function () {
  it('should return an array of length 8', function () {
    expect(generateBoard(whiteQueen, blackQueen).length).to.equal(8);
  });

  it('should return an array of length 8', function () {
    expect(generateBoard(whiteQueen, blackQueen)[0].length).to.equal(8);
  });

  it(`should contain 1 at the position of the whiteQueen [${whiteQueen[0]}, ${whiteQueen[1]}]`, function () {
    expect(
      generateBoard(whiteQueen, blackQueen)[whiteQueen[0]][whiteQueen[1]]
    ).to.equal(1);
  });

  it(`should contain 1 at the position of the blackQueen [${blackQueen[0]}, ${blackQueen[1]}]`, function () {
    expect(
      generateBoard(whiteQueen, blackQueen)[blackQueen[0]][blackQueen[1]]
    ).to.equal(1);
  });
});

describe('Queen threat', function () {
  it('should detect a threat if queens are in the same row', function () {
    const board = generateBoard([0, 0], [0, 5]);
    expect(queenThreat(board)).to.be.true;
  });

  it('should detect a threat if queens are in the same column', function () {
    const board = generateBoard([0, 4], [7, 4]);
    expect(queenThreat(board)).to.be.true;
  });

  it('should detect a threat if queens are in the same diagonal', function () {
    const board = generateBoard(whiteQueen, blackQueen);
    expect(queenThreat(board)).to.be.true;
  });
});
