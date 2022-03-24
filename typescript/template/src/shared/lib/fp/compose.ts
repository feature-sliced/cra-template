function compose<A> (): (arg: A) => A
function compose<A, B> (fn: (arg: A) => B): (arg: A) => B
function compose<A, B, C> (fn0: (arg: B) => C, fn1: (arg: A) => B): (arg: A) => C
function compose<A, B, C, D> (fn0: (arg: C) => D, fn1: (arg: B) => C, fn2: (arg: A) => B): (arg: A) => D
function compose<A, B, C, D, E> (fn0: (arg: D) => E, fn1: (arg: C) => D, fn2: (arg: B) => C, fn3: (arg: A) => B): (arg: A) => E
function compose<A, B, C, D, E, F> (fn0: (arg: E) => F, fn1: (arg: D) => E, fn2: (arg: C) => D, fn3: (arg: B) => C, fn4: (arg: A) => B): (arg: A) => F
function compose<A, B, C, D, E, F, G> (fn0: (arg: F) => G, fn1: (arg: E) => F, fn2: (arg: D) => E, fn3: (arg: C) => D, fn4: (arg: B) => C, fn5: (arg: A) => B): (arg: A) => G
function compose<A, B, C, D, E, F, G, H> (fn0: (arg: G) => H, fn1: (arg: F) => G, fn2: (arg: E) => F, fn3: (arg: D) => E, fn4: (arg: C) => D, fn5: (arg: B) => C, fn6: (arg: A) => B): (arg: A) => H
function compose<A, B, C, D, E, F, G, H, I> (fn0: (arg: H) => I, fn1: (arg: G) => H, fn2: (arg: F) => G, fn3: (arg: E) => F, fn4: (arg: D) => E, fn5: (arg: C) => D, fn6: (arg: B) => C, fn7: (arg: A) => B): (arg: A) => I

function compose (...fns: any[]): any {
  return (initial: any) => fns.reduceRight(
      (arg, fn) => fn(arg),
      initial
  )
}

export { compose }