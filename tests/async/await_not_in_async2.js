// note: currently, await-within-async enforcement is a
// done by the parser, which bails after a single error.

function f(x) { return x; }

f(await 1);
