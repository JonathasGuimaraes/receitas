<!DOCTYPE html>
<html>
<head>
  <title>Ordenando</title>
  <script src="ordenando.js"></script>
</head>
<body>
  <h1>Ordenando</h1>
  <script>
    // Coloque aqui o código JavaScript para testar as funções
    // Função para trocar os valores de duas posições em um vetor
const swap = (array, pos1, pos2) => {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (array, swaps) => {
  const length = array.length;
  for (let i = 0; i < swaps; i++) {
    const pos1 = Math.floor(Math.random() * length);
    const pos2 = Math.floor(Math.random() * length);
    swap(array, pos1, pos2);
  }
};

// Função de ordenação Bubble Sort
const bubble_sort = (array) => {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

// Função de ordenação Selection Sort
const selection_sort = (array) => {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }
};

// Função de ordenação Quick Sort (recursivo)
const quick_sort = (array, start = 0, end = array.length - 1) => {
  if (start < end) {
    const pivotIndex = particionamento(array, start, end);
    quick_sort(array, start, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, end);
  }
};

// Função de apoio ao Quick Sort para particionamento
const particionamento = (array, start, end) => {
  const pivot = array[end];
  let i = start - 1;
  for (let j = start; j <= end - 1; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, end);
  return i + 1;
};

  </script>
</body>
</html>
