import { useContext } from 'react'
import CodeBlock from '../../components/syntax-highlighter'
import { Context } from '../../context'
import React from 'react'

export default function LeftContainer() {

  const state = useContext(Context)

  const rule1: string = `console.log("Merhaba, dünya!");
let x = 10;
console.log("x değeri:", x);`

  const rule2: string = `console.error("Bir hata oluştu!");`

  const rule3: string = `console.warn("Bu bir uyarı!");`

  const rule4: string = `console.info("Bu bir bilgi mesajı.");`

  const rule5: string = `console.group("Ana Grup");
console.log("İçerik 1");
console.log("İçerik 2");
console.groupEnd();`

  const rule6: string = `let kullanici = { ad: "Ali", yas: 30 };
console.table(kullanici);`

  const rule7: string = `console.time("İşlem Süresi");
// İşlem yapılacak
console.timeEnd("İşlem Süresi");`

  const rule8: string = `let x = 5;
console.assert(x === 10, "x değeri 10 olmalı.");`


  return (
    <React.Fragment>
      <CodeBlock codeString={rule1} language='javascript' theme={state?.theme} row='1' />
      <CodeBlock codeString={rule2} language='javascript' theme={state?.theme} row='2' />
      <CodeBlock codeString={rule3} language='javascript' theme={state?.theme} row='3' />
      <CodeBlock codeString={rule4} language='javascript' theme={state?.theme} row='4' />
      <CodeBlock codeString={rule5} language='javascript' theme={state?.theme} row='5' />
      <CodeBlock codeString={rule6} language='javascript' theme={state?.theme} row='6' />
      <CodeBlock codeString={rule7} language='javascript' theme={state?.theme} row='7' />
      <CodeBlock codeString={rule8} language='javascript' theme={state?.theme} row='8' />
    </React.Fragment>
  )
}