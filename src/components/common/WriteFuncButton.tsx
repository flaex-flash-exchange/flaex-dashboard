import { BounceLoader } from "react-spinners";
import BaseButton from "./BaseButton";

const WriteFuncButton = ({
  lableButton,
  func,
  isLoading,
  isSuccess,
  isTxDone = false,
  isLoadingLable =`Waiting for signing`,
  isSuccessLable =`Waiting for network`,
  moreClass,
}: {
  lableButton: string;
  func: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isTxDone: boolean;
  moreClass: string;
  isLoadingLable?: string;
  isSuccessLable?: string;
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
          {`${isLoadingLable} `}
          <BounceLoader size={24} color={"#fafafa"} />
        </>
      )}
      {isSuccess && !isTxDone && (
        <>
          {`${isSuccessLable} `}
          <BounceLoader size={24} color={"#fafafa"} />
        </>
      )}
      {isLoading && isSuccess && <BounceLoader size={24} color={"#fafafa"} />}
    </BaseButton>
  );
};
export default WriteFuncButton;
