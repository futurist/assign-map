import test from 'ava'
import lib from '../dist'

test('', t=>{
  const ret = lib(
    {a:1,b:2},
    {
      a:v=>({c:3}),
      x:(v,k)=>({x:v, k, d: 1234})
    }
  )
  const expect = {
    b: 2,
    c: 3,
    x: undefined,
    k: 'x',
    d: 1234
  }
  t.deepEqual(ret, expect)
})

