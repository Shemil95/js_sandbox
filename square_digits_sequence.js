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

   return count;
}
squareDigitsSequence(16);
squareDigitsSequence(103);
squareDigitsSequence(1);
