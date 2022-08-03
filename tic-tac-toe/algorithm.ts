

const init_board = (n: number): string[][] => {
  const board: string[][] = []
  
  for (let i = 0; i < n; i++) {
    board.push([])
    for (let j = 0; j < n; j++) board[i].push('')
  }
  
  return board
}

const check = (arr: string[][]): boolean => {
  const range: number = arr.length
  const check_arr = (arr: string[]): boolean => {
    return arr.every(e => e === arr[0]) && !arr.includes('')
  }

  for (let i = 0; i < range; i++) {
    const column: string[] = []
    for (let j = 0; j < range; j++) column.push(arr[j][i])
    if (check_arr(column) || check_arr(arr[i])) return true
  }

  const first_diag: string[] = []
  const second_diag: string[] = []
  for (let i = 0; i < range; i++) {
    first_diag.push(arr[i][i])
    second_diag.push(arr[i][range - 1 - i])
  }
  if (check_arr(first_diag) || check_arr(second_diag)) return true
  
  return false
}

const board = init_board(3)
