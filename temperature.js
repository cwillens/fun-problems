var TempTracker = function() {
  this.storage = {};
  this.min = null;
  this.max = null;
  this.mode = [];
  this.mean = null;
  this.n = 0;
}

TempTracker.prototype.insert = function(temp) {
  this.n ++;
  if (this.min === null) {
    this.storage[temp] = 1;
    this.min = temp;
    this.max = temp;
    this.mode = [temp, 1];
    this.mean = temp;
  } else {
    this.storage[temp] = this.storage[temp] ? this.storage[temp] + 1 : 1;
    if (this.min > temp) {
      this.min = temp;
    }
    if (this.max < temp) {
      this.max = temp;
    }
    if (this.mode[1] < this.storage[temp]) {
      this.mode[0] = temp;
      this.mode[1] = this.storage[temp];
    }
    this.mean = ((this.mean * (this.n - 1)) + temp) / this.n;
  }
}

TempTracker.prototype.getMax = function() {
  return this.max;
}

TempTracker.prototype.getMin = function() {
  return this.min;
}

TempTracker.prototype.getMode = function() {
  return this.mode[0];
}

TempTracker.prototype.getMean = function() {
  return this.mean;
}