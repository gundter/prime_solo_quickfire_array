var array1 = [4, 6, 3, 2, 6, 7, 8, 9];
var array2 = [2, 5, 7, 4, 5, 3, 4, 2];
var array3 = [1, 6, 8, 5, 4, 3, 4, 7];
var array4 = [4, 7, 5, 3, 5, 4, 6, 8];
var array5 = [9, 7, 5, 6, 4, 5, 3, 4];
var array6 = [8, 4, 5, 3, 4, 2, 7, 8];

var masterArray = [array1, array2, array3, array4, array5, array6];

calculation(masterArray);

function calculation (array){
	for (var i = 0; i < array.length; i++){
		for (var j = 0; j < array[i].length; j++){
			array[i][j] = (array[i][j] + 1) * 2;
			console.log(array[i][j]);
		}
	}
}


