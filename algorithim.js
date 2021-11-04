array = [6,8,7,11,156,85,69,77];

function insertionSort(array){
  var current;
  var previous;
  for(var i = 1; i < array.length; i++){
    current = array[i];
    previous = i-1;
    while(previous > -1 && current < array[previous]){
      array[previous+1] = array[previous];
      previous--
    }
    array[previous+1] = current;
  }
  console.log(array);
}


insertionSort(array);

insertion-sort
