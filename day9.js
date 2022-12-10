const testData = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
const testArr = testData.split('\n');

const data = `D 2
R 2
U 2
D 2
L 1
D 1
L 1
D 1
U 1
R 2
U 2
D 2
R 2
D 2
R 2
U 2
D 1
R 2
L 2
R 2
L 2
D 2
R 1
U 1
L 2
D 1
R 1
D 2
U 1
L 2
R 1
U 1
R 1
U 1
L 2
U 1
L 2
R 2
U 1
D 2
R 2
U 2
L 1
R 1
U 1
D 1
U 1
D 2
U 1
R 2
L 1
D 1
U 2
D 2
U 1
R 2
U 1
L 2
R 2
D 1
R 1
U 1
D 1
R 1
U 2
D 2
R 2
D 2
R 1
L 2
D 1
L 2
D 2
U 2
D 1
U 1
L 2
U 2
R 2
D 1
L 1
D 2
L 1
U 2
D 2
R 1
U 1
D 2
R 1
U 1
R 2
L 2
U 1
L 2
R 1
L 1
D 2
R 1
D 2
L 1
R 1
L 1
U 2
R 1
L 1
U 2
D 2
R 2
D 1
L 1
D 2
L 3
R 2
U 2
R 1
U 1
R 2
L 2
D 2
R 3
L 2
R 3
U 3
D 3
U 2
R 1
U 3
D 1
U 3
D 1
U 1
D 1
R 1
L 2
D 3
R 2
U 1
R 1
U 2
D 3
L 2
D 2
R 1
U 2
D 1
R 2
L 3
D 2
L 3
U 2
R 2
U 3
L 2
R 1
U 3
L 1
D 2
R 3
U 3
D 3
R 3
D 3
L 3
D 2
L 1
U 1
R 2
U 3
L 2
R 1
L 2
R 3
L 1
R 2
L 1
D 3
U 3
L 1
R 3
D 3
L 2
U 1
D 1
L 3
D 3
L 2
D 1
U 2
D 2
L 1
U 2
L 3
D 1
U 1
R 3
U 2
L 3
U 3
L 2
R 1
U 2
D 1
R 3
D 1
U 1
L 2
D 1
R 3
D 3
U 2
D 3
U 3
R 2
L 2
R 3
L 2
R 2
D 3
R 2
U 1
D 1
R 3
U 3
L 2
U 1
R 3
U 4
L 4
D 4
U 2
L 2
D 3
L 2
R 2
L 4
U 3
R 1
U 2
R 4
L 2
U 3
R 3
L 1
R 1
U 4
L 2
R 1
U 4
L 4
U 1
D 1
U 1
R 2
L 2
D 1
U 3
D 2
U 4
R 4
L 2
U 4
R 4
D 1
R 1
U 2
L 3
R 3
D 2
L 1
U 4
R 3
D 1
U 2
D 3
R 4
U 3
D 3
R 1
L 2
D 4
L 2
R 2
D 4
U 4
D 4
L 4
U 4
D 4
L 2
R 3
L 3
R 3
L 4
R 1
L 1
U 2
D 4
L 4
R 1
D 1
R 3
L 2
U 3
R 4
U 4
R 2
D 4
R 3
U 4
R 4
L 1
D 4
U 3
R 3
D 3
U 3
R 3
U 3
L 3
D 2
R 3
L 1
R 4
D 1
R 3
D 4
L 4
U 4
R 1
D 3
U 4
R 1
D 2
R 4
D 5
U 2
L 2
U 3
R 4
L 2
U 3
L 4
U 3
D 3
R 3
D 3
L 3
U 1
R 3
L 4
R 1
U 3
R 1
L 4
D 5
U 3
D 2
R 2
U 2
D 4
R 4
U 2
R 1
L 3
D 1
L 3
R 4
L 5
D 4
R 2
L 5
R 5
U 1
D 4
R 2
D 5
R 1
L 3
R 1
U 3
D 2
R 1
L 2
R 1
D 5
U 3
L 3
U 4
L 3
D 2
L 4
U 2
D 4
U 2
L 4
R 1
D 1
U 1
D 1
U 2
L 3
R 1
U 1
L 2
D 2
R 3
L 3
R 1
U 4
R 2
L 1
D 2
R 4
L 5
D 1
R 2
U 1
L 2
U 5
D 3
U 3
D 1
U 2
D 4
U 1
L 2
R 4
L 5
U 4
D 3
U 1
D 2
L 5
U 5
D 2
L 2
D 2
U 4
R 5
D 1
R 2
L 2
D 1
R 2
L 6
U 3
R 1
D 6
U 1
D 4
R 6
U 3
L 6
U 3
L 2
U 3
R 4
U 5
D 4
R 5
D 6
U 1
R 2
U 1
D 5
R 4
L 3
D 4
U 5
L 5
U 5
L 4
U 1
D 6
R 6
L 4
R 4
D 1
R 1
L 5
U 2
D 3
U 5
D 6
R 3
L 6
U 6
D 4
U 4
D 3
L 5
D 6
U 5
R 3
U 6
D 4
U 1
R 2
D 1
L 3
R 2
U 5
R 2
L 6
D 3
R 2
U 2
R 5
U 6
R 4
U 4
D 4
U 2
R 6
U 3
L 3
D 1
R 2
L 5
D 5
U 6
D 5
R 1
D 1
U 6
D 4
R 3
U 6
L 5
U 5
D 1
U 6
L 2
D 2
U 6
L 5
U 6
L 2
D 1
R 5
U 4
R 6
D 5
R 1
L 1
U 2
L 1
R 1
D 6
L 6
R 4
D 4
L 3
D 1
U 2
L 3
R 4
D 6
U 5
D 3
L 4
R 6
L 7
U 4
R 4
L 6
U 1
R 4
L 5
D 2
L 2
D 3
R 6
U 6
R 5
D 2
U 5
L 7
R 6
L 3
U 7
R 4
D 7
R 5
U 7
R 6
U 5
R 7
U 4
D 4
L 1
R 2
D 5
L 3
R 6
D 3
R 6
D 4
U 4
L 6
U 5
D 3
U 5
D 5
R 2
L 4
D 1
L 4
U 4
L 4
D 2
R 7
D 2
L 6
R 5
L 7
U 5
R 4
L 2
R 1
U 7
R 6
D 7
L 6
D 2
L 5
D 1
U 6
L 2
D 4
L 6
D 1
L 5
R 6
D 6
L 4
D 4
R 5
L 4
D 2
U 5
D 2
L 7
R 1
D 5
R 3
L 4
D 7
U 2
R 3
U 1
L 1
U 3
D 7
L 7
D 2
U 5
D 2
U 3
L 3
U 5
L 1
U 4
L 1
D 2
U 1
D 7
R 5
U 4
L 2
D 7
U 6
D 3
U 8
L 6
R 1
U 7
D 8
R 5
D 2
L 3
D 7
U 3
D 2
R 4
L 1
U 6
D 4
R 2
U 7
L 6
U 3
L 6
D 3
L 5
U 6
L 2
R 1
D 7
R 7
L 1
D 6
U 2
R 8
D 3
R 1
U 7
D 4
U 8
R 6
L 1
D 4
U 3
L 8
D 1
R 4
D 2
U 8
D 6
L 2
U 6
R 2
U 8
D 4
R 8
D 5
U 4
D 7
U 8
L 2
U 6
D 5
R 5
D 4
R 8
U 5
R 4
L 8
U 7
R 5
D 3
R 7
L 6
D 1
L 5
U 7
R 5
U 4
R 3
L 5
U 1
R 7
D 1
R 8
U 2
L 5
U 5
R 1
L 7
U 2
D 3
U 3
R 8
U 6
R 2
U 1
R 4
D 5
U 5
R 1
U 2
L 1
R 3
L 4
R 4
D 6
R 5
U 3
D 4
R 7
L 7
D 7
R 4
U 5
R 4
L 6
D 1
R 6
L 8
U 7
L 6
R 1
D 2
U 6
R 5
U 8
D 8
U 9
D 3
R 8
L 9
D 7
R 2
L 6
U 8
R 4
D 8
U 8
L 2
R 4
U 1
D 2
U 3
R 8
L 2
R 6
L 4
U 9
L 1
R 1
D 6
R 1
D 2
R 8
L 5
D 8
U 2
R 3
D 7
L 1
U 6
D 4
U 2
R 3
D 5
U 1
L 3
D 5
U 5
D 8
U 4
L 2
R 5
U 7
R 5
U 8
R 6
L 1
R 7
D 3
R 3
D 5
U 1
R 2
L 3
U 8
R 4
L 5
U 7
D 3
U 4
L 9
U 4
D 6
R 9
L 6
D 6
R 6
U 1
R 2
D 2
U 9
L 1
D 6
U 3
D 5
U 7
R 9
L 2
U 8
L 3
U 5
R 8
D 6
R 4
L 8
R 8
L 5
R 7
U 7
L 9
R 4
U 3
R 7
U 2
L 2
D 5
U 10
D 4
R 4
U 6
L 3
R 5
U 7
D 10
U 7
D 8
L 1
R 6
L 3
U 8
L 7
R 5
L 9
D 5
R 3
L 6
R 8
D 4
L 4
U 5
L 7
R 1
U 8
R 3
D 3
R 2
D 3
U 3
R 3
U 6
R 5
U 8
L 7
U 2
D 2
L 3
D 9
L 2
D 3
R 5
L 6
U 1
L 7
U 10
R 2
L 5
D 5
U 1
L 2
R 6
D 8
U 7
L 4
R 6
U 8
D 1
R 5
D 8
U 3
R 1
D 6
R 4
L 10
D 4
U 4
D 4
R 3
U 2
D 1
R 4
L 1
D 4
L 7
D 2
U 7
D 8
L 10
R 7
L 9
D 2
R 4
D 7
L 9
U 9
R 1
L 4
U 1
D 8
U 2
L 7
R 1
L 3
U 3
D 3
L 4
U 10
L 4
U 1
R 4
D 5
L 4
R 5
D 8
L 6
D 1
U 3
R 8
L 7
D 9
L 4
D 4
U 6
D 6
L 4
R 7
U 8
D 10
U 7
L 5
R 2
L 8
D 7
U 8
L 6
R 5
L 7
R 11
U 1
R 4
D 6
L 4
R 5
L 4
D 3
L 7
R 3
D 2
U 10
R 6
D 3
U 4
R 1
D 11
U 3
D 2
U 10
L 7
U 1
R 3
L 1
R 1
D 5
U 3
L 5
D 3
U 8
L 2
D 7
U 5
L 3
D 6
L 6
D 9
U 1
R 11
U 11
R 6
U 1
R 9
U 6
R 6
D 9
L 6
D 8
U 6
D 10
R 10
D 11
R 2
L 10
D 4
U 6
D 6
R 9
D 6
U 7
L 2
D 9
U 10
D 5
L 11
R 4
U 5
L 10
R 5
U 9
R 3
U 6
L 8
R 8
D 6
L 5
U 4
D 8
L 11
D 5
R 8
U 8
R 1
U 3
R 5
U 4
D 8
R 8
U 2
R 2
U 6
L 2
D 1
R 1
D 5
R 11
U 7
R 10
L 4
U 10
R 3
U 1
D 11
R 9
U 6
L 3
D 12
L 7
D 4
L 5
U 7
D 11
R 11
U 1
R 2
U 6
R 7
L 9
U 5
L 7
D 9
R 12
D 12
R 8
U 8
D 6
R 10
D 3
U 1
D 1
L 10
R 4
D 5
R 10
D 3
U 7
D 6
L 9
R 10
D 3
R 9
L 3
D 5
L 5
R 1
D 10
U 11
R 1
D 1
R 11
D 4
L 11
R 6
L 2
R 4
D 4
R 9
D 9
L 3
U 2
R 5
L 1
R 3
D 12
L 9
D 8
U 7
D 2
R 4
L 1
D 9
U 11
D 9
L 6
D 4
U 6
R 8
D 1
L 4
U 8
D 4
L 2
R 1
L 11
R 4
D 5
L 9
R 11
U 1
D 12
U 9
L 8
R 5
D 1
R 9
L 3
R 5
D 3
U 4
R 11
L 4
R 3
U 12
D 1
U 8
R 5
U 10
L 9
R 10
D 4
L 9
U 6
D 4
U 7
L 12
D 7
R 9
U 6
L 4
D 1
U 11
L 3
D 4
U 9
D 10
U 5
D 13
R 9
D 8
L 7
D 11
U 12
R 2
L 12
R 10
D 13
L 6
U 8
R 9
L 7
R 7
U 2
L 5
R 4
D 10
L 4
D 5
U 4
D 13
R 4
D 4
U 9
R 3
D 12
R 2
U 2
R 9
D 10
U 3
L 12
U 9
L 11
U 6
L 3
U 7
R 10
U 13
L 12
D 1
R 6
D 13
U 5
R 2
L 11
D 7
U 1
D 9
L 11
D 6
R 3
D 2
U 5
L 1
R 9
U 7
D 11
U 6
R 2
U 6
L 13
R 4
L 11
D 10
L 1
U 7
L 10
D 1
U 12
L 2
U 5
D 10
U 12
R 13
U 12
R 10
D 13
R 8
U 6
D 11
L 4
R 7
D 6
L 12
U 6
L 8
R 7
D 5
R 7
D 8
L 14
R 10
U 14
L 6
U 14
R 11
U 5
R 1
L 8
U 7
L 3
D 13
R 11
L 14
U 14
R 5
D 9
R 11
U 12
R 13
L 12
D 6
U 7
L 3
U 10
R 13
D 13
U 10
R 12
D 12
U 4
D 12
U 9
L 9
U 13
D 9
R 13
D 13
R 12
D 7
R 4
L 2
R 12
L 8
U 8
L 1
U 4
R 9
U 9
D 13
R 9
L 10
R 12
D 14
R 6
D 9
L 11
R 4
D 6
R 3
L 11
U 9
R 3
U 6
L 2
D 3
L 9
D 9
R 5
D 13
U 14
R 12
U 8
L 12
D 4
L 8
R 13
D 13
L 11
R 6
U 10
D 7
U 12
R 7
L 1
U 2
R 4
L 11
R 6
L 11
R 14
D 7
R 6
L 13
R 8
D 8
R 1
L 3
R 10
U 3
L 5
U 5
D 3
L 4
D 7
R 5
L 6
U 14
D 11
L 13
R 9
D 12
L 2
D 11
U 6
D 14
R 7
U 5
R 5
U 2
L 4
U 12
D 12
L 3
R 6
L 14
R 10
D 13
U 5
R 7
L 6
U 2
D 1
U 5
R 11
U 8
R 2
L 5
R 8
U 5
R 15
D 14
L 7
R 4
U 14
L 13
U 8
L 8
U 4
D 5
L 7
R 9
U 5
L 11
U 3
R 2
U 1
D 13
L 4
U 5
L 13
R 8
U 13
D 15
L 5
U 9
D 1
L 7
U 5
R 9
L 9
D 14
R 7
U 14
R 8
D 1
R 14
D 13
L 15
D 6
U 10
L 10
R 8
U 13
R 12
U 4
R 13
D 2
R 13
U 13
L 6
D 5
R 10
L 5
R 3
D 3
R 15
D 9
U 2
R 7
U 12
D 3
R 8
D 12
U 1
L 13
D 15
L 9
R 15
U 10
R 16
D 5
R 8
L 1
R 7
D 11
U 4
R 10
L 4
D 8
U 8
D 12
U 12
L 7
U 2
R 13
L 14
D 7
U 15
R 2
D 15
L 15
D 10
U 1
R 5
L 9
R 6
L 15
D 6
U 11
L 14
U 10
R 2
L 9
R 4
U 12
D 5
R 7
U 15
D 12
R 1
U 8
L 14
U 8
D 13
U 1
R 3
U 10
L 12
D 9
L 7
D 5
R 7
D 15
L 13
U 2
D 11
L 13
U 14
L 14
D 10
U 9
L 13
U 15
D 5
U 14
R 8
U 8
R 4
L 10
U 13
R 10
U 5
R 12
D 1
L 10
R 11
D 9
L 14
U 15
D 16
R 10
D 14
U 8
D 5
U 7
D 1
R 12
D 10
L 10
D 15
U 8
L 5
R 16
U 13
R 3
L 8
D 11
L 15
U 2
R 12
L 15
D 8
U 14
L 13
U 10
L 14
R 11
U 4
L 1
R 1
U 10
D 8
U 4
D 5
L 8
R 12
U 6
D 16
L 11
U 14
L 5
D 4
R 11
D 5
R 5
L 3
D 5
R 4
D 10
U 13
L 1
R 1
D 5
R 2
U 10
R 12
L 15
R 3
L 13
U 11
D 16
R 6
D 10
L 16
R 9
U 12
D 6
R 16
U 6
L 9
D 10
L 2
U 11
L 5
D 14
R 17
D 9
R 15
U 17
R 12
L 17
R 9
L 14
R 6
D 3
U 12
D 17
U 16
D 7
U 11
D 3
L 5
U 13
R 6
U 16
D 12
R 6
U 1
L 4
R 15
L 13
D 16
L 17
U 1
D 4
R 12
U 1
L 5
U 13
L 12
U 11
D 5
R 15
L 4
R 7
U 6
D 17
R 14
L 16
D 15
R 15
U 7
R 5
U 10
R 5
L 3
U 9
L 6
U 17
L 15
R 14
D 6
U 13
R 11
L 12
R 16
U 4
D 2
U 4
R 17
D 9
R 9
D 7
R 12
L 9
R 16
D 14
U 1
R 12
U 11
D 10
L 10
D 12
R 12
U 7
D 12
U 9
D 15
R 7
U 1
R 4
U 11
R 18
L 6
D 12
U 14
R 12
D 2
R 6
D 9
L 4
U 11
L 13
D 14
L 5
R 13
L 12
U 17
L 11
R 8
L 3
D 6
U 4
R 16
D 14
U 10
R 12
L 7
R 6
L 9
D 13
U 6
D 15
R 17
L 1
D 7
L 6
R 16
D 13
L 5
R 16
U 5
D 2
R 17
L 17
U 18
L 10
D 14
U 9
D 9
U 1
L 8
R 5
D 5
U 12
D 1
L 8
U 13
R 6
D 12
R 6
D 2
L 8
U 11
L 14
R 6
L 17
D 1
R 1
D 3
U 11
D 14
R 8
U 2
R 1
U 17
L 14
U 15
D 17
L 15
U 11
L 7
D 2
L 16
D 7
L 14
U 14
D 5
R 4
U 7
D 4
R 12
L 11
D 4
U 19
L 16
R 13
L 1
R 13
U 12
R 12
U 10
L 7
R 9
U 15
D 3
R 12
U 8
L 5
R 14
U 4
D 2
L 2
U 8
L 6
D 10
L 18
U 4
D 8
R 15
D 11
R 14
D 16
R 14
D 4
R 9
U 14
L 2
R 2
U 16
R 2
U 18
D 6
R 16
U 2
L 7
U 6
D 4
L 9
U 18
R 10
L 17
R 12
U 7
L 10
U 5
D 15
U 6
L 14
U 17
R 11
U 2
R 6
L 5
D 2
U 15
D 6
U 4
R 16
D 7
L 15
R 9
D 6
R 15
L 1
R 2
L 5
U 19
L 6
U 15
R 16
L 12
D 9
U 15
D 7
L 10
U 9
D 15
L 13
R 1
L 17
R 14
D 14
U 19
D 4
U 15
D 1
R 12
L 1
D 14
U 13
L 4
R 15
L 1
R 17
L 9
D 10
L 9
U 2
L 17
U 4
D 7
R 3`
const dataArr = data.split('\n')

let tailPositions = [];

const corrections = {
  up: [0, 1],
  down: [0, -1],
  right: [1, 0],
  left: [-1, 0],
  tr: [1, 1],
  tl: [-1, 1],
  dr: [1, -1],
  dl: [-1, -1]
}

const findRopeDistance = (head, tail) => Math.sqrt( (head[0] - tail[0])**2 + (head[1] - tail[1])**2);

const findCorrection = (head, tail) => {
  let offset = [head[0] - tail[0], head[1] - tail[1]];
  
  //! Four main directions
  if(offset[0] == 0) {
    if(offset[1] == 2) return 'up'
    if(offset[1] == -2) return 'down'
  }
  if(offset[1] == 0) {
    if(offset[0] == 2) return 'right'
    if(offset[0] == -2) return 'left'
  }

  //! Diagnal movement
  if(offset[0] > 0) {
    if(offset[1] > 0) return 'tr';
    if(offset[1] < 0) return 'dr';
  }
  if(offset[0] < 0) {
    if(offset[1] > 0) return 'tl';
    if(offset[1] < 0) return 'dl';
  }
}

const moveRope = (head, tail, dir, dist) => {
  for(let i = 0; i < dist; i++) {
    switch(dir) {
      case 'R':
        head[0]++;
        break;
      case 'L':
        head[0]--;
        break;
      case 'U':
        head[1]++;
        break;
      case 'D':
        head[1]--;
        break;
      default:
        break;
    }

    //! Correct the tail
    let needToMoveTail = (findRopeDistance(head, tail) > Math.sqrt(2));
    if(needToMoveTail) {
      let correction = corrections[findCorrection(head, tail)];
      tail = [tail[0] + correction[0], tail[1] + correction[1]];
    }

    tailPositions.push(tail)
  }

  return [head, tail];
}

const partOne = (input) => {
  let head = [0,0];
  let tail = [0,0];

  for(line of input) {
    const [dir, dist] = line.split(' ');
    [head, tail] = moveRope(head, tail, dir, dist);
  }
  
  let uniqueLocations = [];
  for(position of tailPositions) {
    let isNew = true;
    for(unique of uniqueLocations) {
      if(position[0] == unique[0] && position[1] == unique[1]) isNew = false;
    }
    if(isNew) uniqueLocations.push(position);
  }

  return uniqueLocations.length
}

console.log(partOne(dataArr));