import React from "react";

const InputType = React.memo(({ types, ...props }: any) => {
  switch (types) {
    case "textarea":
      return <textarea {...props} />;

    default:
      return <input {...props} type={types as string} />;
  }
});

export default InputType;
