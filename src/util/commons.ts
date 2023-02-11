export function handleCopyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(
    function () {
      // onNotification({
      //   mess: `Copying to clipboard was successful!`,
      //   key: "success",
      // });
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    },
  );
}
