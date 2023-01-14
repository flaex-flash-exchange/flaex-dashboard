import { useEffect, useRef } from "react";

export function useOutSideClick(onClickOut: () => void) {
  const componentRef = useRef<any>();
  useEffect(() => {
    const onClick = ({ target }: any) =>
      !componentRef.current.contains(target) && onClickOut?.();
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [componentRef]);

  return componentRef;
}
