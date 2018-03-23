'use strict';

/**
 * Like Object.assign, but let you alter some keys
 * @param {Object} obj source object
 * @param {Object|any} fnObj {key:function} with (key, value, obj)=>newValue
 */
function assignMap(obj, fnObj={}){
  if(!obj) return obj
  const {keys, assign} = Object;
  const ret = {};
  const valArr = [ret];
  const keyArr = keys(obj);
  const fnArr = keys(fnObj);
  for(let i=0;i<keyArr.length;i++){
    let k = keyArr[i];
    if(fnArr.indexOf(k)<0) ret[k] = obj[k];
  }
  for(let i=0;i<fnArr.length;i++){
    let k = fnArr[i];
    valArr.push(fnObj[k](obj[k], k, obj));
  }
  return assign.apply(null, valArr)
}

module.exports = assignMap;
