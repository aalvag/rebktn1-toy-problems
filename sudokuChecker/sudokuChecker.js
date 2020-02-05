/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // Your code here.
  var SplittedBoard = board.split('\n');
  for (var i=0;i<SplittedBoard.length;i++) {
  	SplittedBoard[i]=SplittedBoard[i].split('')
  }
  console.log(SplittedBoard)
  function checkSubGrid(subgrid) {
  	var count = 0
  	for(var number = 1;number<10;number++) {
  		for(var i = 0;i<subgrid.length;i++) {
  			if(subgrid[i].includes(''+number)) {
  				count++
  			}
  		}
  	}
  	return count===9
  	
  }
  function checkRow(row) {
  	for(var i = 1;i<9;i++)  {
  		if(!row.includes(''+i)) {
  			return false
  		}
  	}
  	return true

  }
  function checkColumn(column) {
  	for(var i = 1;i<9;i++)  {
  		if(!row.includes(''+i)) {
  			return false
  		}
  	}
  	return true

  }
  //check rows 
  var result = true
  for(var i=0;i<SplittedBoard.length;i++) {
  	result = checkRow(SplittedBoard[i])
  	if(!result) {
  		return result
  	}
  }
  //check columns
   for(var i=0;i<SplittedBoard.length;i++) {
   	for(var j=0;j<SplittedBoard.length;j++) {
   		var column =[]
   		column.push(SplittedBoard[i][j])
   			
  	}
  	result = checkColumn(column)
  	if(!result) {
  		return result
   	}
  
  }
  //check subgrids
  for(var i=0;i<SplittedBoard.length;i+=3) {
  	for(var j=0;j<SplittedBoard.length;j+=3) {
  		var subgrid = []
  	}
  	

  }



  
}
