async function do() {
    const a = await doA();
    const b = await doB(a);
    const c = await doC(b);
   }