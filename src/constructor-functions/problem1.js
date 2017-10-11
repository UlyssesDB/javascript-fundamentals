// Add a function to all arrays called isNotEmpty
// isNotEmpty returns true is the array is not empty, false otherwise
Array.prototype.isNotEmpty = function() {
  if (this.length == 0) {return false;}
  if (this.length >= 0) {return true;}
}