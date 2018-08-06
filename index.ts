

interface Query {
  column: string,
  min: number,
  max: number
}
interface Grade {
  grade: number,
  students: number,
}

const test: Grade[] = [
  { grade: 3, students: 10 },
  { grade: 2, students: 2 },
  { grade: 4, students: 10 },
  { grade: 4, students: 11 },
  { grade: 4, students: 11 },
  { grade: 4, students: 11 },
]

const query: Query[] = [
  {
    column: 'grade',
    min: 1,
    max: 6,
  },
  {
    column: 'students',
    min: 0,
    max: 30,
  }
]

function coutingSort<T>(queries: Query[], array: Array<T>): Array<T> {
  const indexes = [];
  let result = [];
  for (let i = query[0].min; i <= query[0].max; i++) {
    indexes[i] = 0;
  }
  array.forEach(item => {
    indexes[item[query[0].column]]++
  })
  indexes.forEach((item, index) => {
    if (index < indexes.length - 1) {
      indexes[index + 1] += item;
    }

  })
  array.forEach((item, index) => {
    let value = item[query[0].column];
    if (indexes[value] > 0) {
      result[indexes[value] - 1] = item;
    }
    indexes[value]--;
  })
  result = result.sort((a, b) => {
    if (a[query[0].column] === b[query[0].column]) {
      return a[query[1].column] - b[query[1].column]
    } else {
      return 0;
    }
  })
  return result
}


console.log(coutingSort<Grade>(query, test));