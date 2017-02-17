/*
Task
  Consider a sequence of numbers a0, a1, ..., an, in which an element is equal
  to the sum of squared digits of the previous element. The sequence ends once
  an element that has already been in the sequence appears again.
  Given the first element a0, find the length of the sequence.


Example
For a0 = 16, the output should be 9
Here's how elements of the sequence are constructed:

a0 = 16

a1 = 12 + 62 = 37

a2 = 32 + 72 = 58

a3 = 52 + 82 = 89

a4 = 82 + 92 = 145

a5 = 12 + 42 + 52 = 42

a6 = 42 + 22 = 20

a7 = 22 + 02 = 4

a8 = 42 = 16, which has already occurred before (a0)

Thus, there are 9 elements in the sequence.
For a0 = 103, the output should be 4
The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.

*/

function squareDigitsSequence(a0) {
   var items = [], count = 1, value = a0;

   while (items.indexOf(value) == -1){
     items.push(value);
     value =  value.toString().split('').reduce(function(total, item){
        total += item * item;
        return total;
     }, 0);
     count++;
   }
   console.log(count);
   return count;
}



/*
describe("squareDigitsSequence", function() {

  it('A sequence of numbers 16, count - 9', function() {
    assert.equal(squareDigitsSequence(16), 9)
  })

  it('A sequence of numbers 103, count - 4', function() {
    assert.equal(squareDigitsSequence(103), 4)
  })

  it('A sequence of numbers 1, count - 2', function() {
    assert.equal(squareDigitsSequence(1), 2)
  })

  it('A sequence of numbers 430, count - 13', function() {
    assert.equal(squareDigitsSequence(430), 13)
  })

  it('A sequence of numbers 394, count - 11', function() {
    assert.equal(squareDigitsSequence(394), 11)
  })

});

*/
