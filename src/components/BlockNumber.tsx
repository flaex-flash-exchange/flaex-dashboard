import styled from "styled-components";
import { useBlockNumber } from "wagmi";

export const BlockNumberView = () => {
  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });
  return blockNumber ? (
    <div>
      <WrappBlockNumber>
        <span
          style={{
            padding: "8px 8px 8px 15px",
          }}
        >
          {blockNumber}
        </span>
      </WrappBlockNumber>
    </div>
  ) : null;
};

const WrappBlockNumber = styled.div`
  color: whitesmoke;
  font-size: 14px;
  background-color: #151924;
  border-radius: 5px;
  &::after {
    content: "";
    width: 7px;
    height: 7px;
    position: absolute;
    top: 0;
    left: 3px;
    bottom: 0;
    background-color: green;
    border-radius: 100%;
    margin: auto 0;
  }
`;
