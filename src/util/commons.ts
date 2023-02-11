import { toast } from "react-toastify";

export function handleCopyToClipboard(text: string) {
  const notify = () => toast.success("Copied Successfully", { theme: "dark" });
  navigator.clipboard.writeText(text).then(
    function () {
      notify();
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    },
  );
}

export function splitStringOnSlash(str: string) {
  const indexOfSlash = str.indexOf("/");
  if (indexOfSlash !== -1) {
    return [str.slice(0, indexOfSlash), str.slice(indexOfSlash + 1)];
  } else {
    return [null, null];
  }
}
