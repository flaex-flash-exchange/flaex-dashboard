import { BounceLoader } from "react-spinners";
import BaseButton from "./BaseButton";

const WriteFuncButton = ({
  lableButton,
  func,
  isLoading,
  isSuccess,
  isTxDone = false,
  moreClass,
}: {
  lableButton: string;
  func: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isTxDone: boolean;
  moreClass: string,
}) => {
  return (
    <BaseButton
      disabled={!func || isLoading || (isSuccess && !isTxDone)}
      onButtonClick={() => func?.()}
      moreClass={moreClass}
    >
      {((!isLoading && !isSuccess) || isTxDone) && `${lableButton}`}
      {isLoading && (
        <>
          {" "}
          Waiting for signing <BounceLoader size={24} color={"#fafafa"} />
        </>
      )}
      {isSuccess && !isTxDone && (
        <>
          Waiting for network <BounceLoader size={24} color={"#fafafa"} />
        </>
      )}
      {isLoading && isSuccess && <BounceLoader size={24} color={"#fafafa"} />}
    </BaseButton>
  );
};
export default WriteFuncButton;
