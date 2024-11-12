interface IFncall<Other> {
  <RETURNTYPE>(fn: (name: Other) => RETURNTYPE, age: number): RETURNTYPE
}

const foo: IFncall<string> = (fn, age) => {
  console.log(fn, age)
  return fn('foo')
}
foo<string>(() => {
  return 'foo'
}, 20)
