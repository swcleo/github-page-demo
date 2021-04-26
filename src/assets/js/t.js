var __$performace__ = {
  data: {},

  time(tag) {
    this.data[tag] = window.performance.now();
  },

  timeEnd(tag) {
    if(this.data[tag]) {
      this.data[tag] = window.performance.now() - this.data[tag];
      return this.data[tag];
    }
  }
};


__$performace__.time('main')
