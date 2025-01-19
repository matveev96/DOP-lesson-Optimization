import {memo} from "react";

//Second method (memo)
export const SlowComponentMemo = memo(() => {
  console.log('SlowComponent re-render...');

  let now = performance.now();

  while (performance.now() - now < 1000) {
    // Artificial delay -- do nothing for 100ms
  }

  return <p>I am a very slow component tree.</p>;
});
