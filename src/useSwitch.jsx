import { useState } from "react";

function useSwitch(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState((prevState) => !prevState);

  return [state, toggle];
}

export default useSwitch;
