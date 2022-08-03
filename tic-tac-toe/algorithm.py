from itertools import groupby
from typing import Iterable

def init_board(n: int) -> list[list[str]]:
  return [['' for _ in range(n)] for _ in range(n)]

def check(arr: Iterable[Iterable[str]]) -> bool:
  def check_row(r: Iterable[str]) -> bool:
    g = groupby(r)
    # Return True if row' or column' elements match eacother, return False if empty spot is present
    return next(g, True) and not next(g, False) if '' not in r else False
  
  range_ = range(len(arr))

  # Check rows and colums
  for i in range_:
    column = [j[i] for j in arr]
    if check_row(column) or check_row(arr[i]): return True
  
  # Check diagonals
  first_diagonal  = [arr[i][i]      for i in range_] # ↘️
  second_diagonal = [arr[i][-1 - i] for i in range_] # ↙️
  if check_row(first_diagonal) or check_row(second_diagonal): return True
  
  return False

board = init_board(3)
