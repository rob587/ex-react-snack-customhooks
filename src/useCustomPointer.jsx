import { useEffect, useState } from "react";

function useCustomPointer(pointerContent) {
  const [state, setState] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setState({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translate(${state.x}px, ${state.y}px)`,
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {pointerContent}
    </div>
  );
}

export default useCustomPointer;
