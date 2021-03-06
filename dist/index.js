'use strict';

/**
 * Map object key/value into new object
 * but let you alter/delete some keys using functions
 * @param {Object} obj source object
 * @param {Object|any} fnObj {key:function} with (key, value, obj)=>newValue
 */
var keys = Object.keys;
var assign = Object.assign;
function mapValue(obj, fnObj){
  if ( fnObj === void 0 ) fnObj={};

  if(!obj) { return obj }
  var ret = {};
  var valArr = [ret];
  var keyArr = keys(obj);
  var fnArr = keys(fnObj);
  var i, k, fn, val, temp;
  for(i=0;i<keyArr.length;i++){
    k = keyArr[i];
    if(fnArr.indexOf(k)<0) { ret[k] = obj[k]; }
  }
  for(i=0;i<fnArr.length;i++){
    k = fnArr[i];
    fn = fnObj[k];
    if(typeof fn==='function') {
      val = fn(obj[k], k, obj);
      if(typeof val!=='object'||val===null) {
        temp = {};
        temp[k] = val;
        val = temp;
      }
      valArr.push(val);
    }
  }
  return assign.apply(null, valArr)
}

module.exports = mapValue;
