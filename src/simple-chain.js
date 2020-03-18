let chainArr = [];
const chainMaker = {
  //chain: [],
  //chainOutput: '',
  getLength() {
    return chainArr.length;
  },
  addLink(value) {
    //console.log(value);
    chainArr.push(value);
    //console.log(chainArr);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position % 1 !== 0) {
      chainArr.length = 0;
      throw new Error;
    } else if (position <= 0 || position > chainArr.length) {
      chainArr.length = 0;
      throw new Error;
    }
    chainArr.splice(position - 1, 1);
    //console.log(chainArr);
    return this;
  },
  reverseChain() {
    chainArr.reverse();
    //console.log(chainArr);
    return this;
  },
  finishChain() {
    let chainOutput = '';
    for (let i = 0; i < chainArr.length - 1; i++) {
      chainOutput += '( ' + chainArr[i] + ' )' + '~~';
    }
    chainOutput += '( ' + chainArr[chainArr.length - 1] + ' )';
    //console.log(chainOutput);
    chainArr.length = 0;
    return chainOutput;
  }
};

module.exports = chainMaker;
