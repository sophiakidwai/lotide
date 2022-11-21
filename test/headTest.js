const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([]), 5);
assertEqual(head([9, 8, 7, 6]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");