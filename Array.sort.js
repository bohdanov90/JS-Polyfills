// -------------------------------- 13. Array.sort() -> sorts array elements from smallest to biggest ------------------------------------ //

// -------------------------- Bubble Sort -------------------------- //

let numbers = [78,45,98,21,5,6,8,12,39,54,96,21,45,78,87,1,2,98,75,3,65,4,5,4,5,4,41];
function bubbleSorting(array) {
  let n = array.length;
  for (let i=0; i<n; i++) {
    let first = array[i];
    let second = array[i+1];
    if (array[i] > array[i+1]) {
      array[i] = second;
      array[i+1] = first;
    }
  }
  for (let j=0; j<n; j++) {
    if (array[j] > array[j+1]) bubbleSorting(array);
  }
  return array;
}
console.log(bubbleSorting(numbers));

// --------------------------- Selection Sort ---------------------------- //

let numbers = [78,45,98,21,5,6,8];
function selectionSorting(array) {
  let n = array.length;
  let min, minIndex;
  let arrayNew = [];
  for (let i=0; i<n; i++) {
    min = Math.min(...array);
    arrayNew.push(min);
    minIndex = array.indexOf(min);
    array.splice(minIndex, 1)
  }
  array = arrayNew;
  return array;
}
console.log(selectionSorting(numbers));

// --------------------------- Insertion Sort --------------------------- //

let numbers = [4,99,45,78,11,55,0,5,98,45,3,87,21];
function insertionSorting(array) {
  let n = array.length;
  for (let i=1; i<n; i++) { // начинаем со второго элемента массива
    if (array[i] < array[i-1]) { // сравниваем этот элемент с предыдущим, если он меньше, то ...
      for (let j=i; j>=0; j--) { // сравниваем его со всеми предыдущими элементами и меняем местами если он меньше
        if (array[j] < array[j-1]) {
          let first = array[j-1];
          let second = array[j];
          array[j-1] = second;
          array[j] = first;
        }
      }
    }
  }
  return array;
}
console.log(insertionSorting(numbers));