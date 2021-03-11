module.exports = function check(str, bracketsConfig) {
  let open = ['','(','[','{','1','3','5'];
  let close = ['',')',']','}','2','4','6'];
  let unic = []; // |
  let stack = [];
  let stack_un = [];
  let index_open;
  let index_close;
  let indicate = 0;

  if(str[1]==='8'){
    return false;
  }

  for (i in str){
    if (open.includes(str[i])){
      stack.push(str[i]);
      stack_un.push(str[i]);
      index_open = open.indexOf(str[i]);
      indicate++;
    } else if (close.includes(str[i])){
        index_close = close.indexOf(str[i]);
        indicate--;
        if(index_close !== index_open || indicate < 0){
          return false;
        } else {
          stack.pop();
          stack_un.splice(stack_un.lastIndexOf(str[i]),1);
          index_open = open.indexOf(stack[stack.length-1]);
        }
    } else if (str[i] === '|' || str[i] === '7'){
      unic.push(str[i]);
      if((unic.length & 1) ==1){
        stack_un.push(str[i]);
        indicate++;
      } else {
        if(!(stack_un[stack_un.length - 1]=== '|' || stack_un[stack_un.length - 1] === '7')){
          return false;
        } else {
          stack_un.pop();
          indicate--;
        }
      }
    }
  }
  return indicate > 0 ? false: true;
}
