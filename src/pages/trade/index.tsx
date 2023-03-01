import BottomInfo from "components/pages/trade/BottomInfo";
import Mainbar from "components/pages/trade/Mainbar";
import Topbar from "components/pages/trade/Topbar";
import TradingViewWidget from "components/pages/trade/TradingViewWidget";
import { TradeContextProvider } from "context/TradeContext";
import { BigNumber, utils } from "ethers";
import { useLongShortData } from "hooks/useLongShortData";
import type { NextPage } from "next";

import { useEffect } from "react";
import { BigNumberToReadableAmount } from "util/commons";

const Index: NextPage = () => {
  useEffect(() => {
    const mockdata = {
      to: "0x39E2f8d11ad50a97413EfaE1BA4707C6E59C0c2c",
      from: "0x6B2bac9205bd351c96B1a215C34b475852a848eA",
      contractAddress: null,
      transactionIndex: 178,
      gasUsed: {
        type: "BigNumber",
        hex: "0x0b2183",
      },
      logsBloom:
        "0x00000000004008000282000000000000000000000000000000000000008000000000002000000810000000010004050000401000000020800000000000300000000000000000000810002008000220000000000000000480400000040400140000000001020000004000000000001a00000002000000000000000210000800000000000480000020800000040800000400000000804000080400000000000000020000010000000800000020800040000000004000002000000000000000410002000002000001000000002040000000000000000000040400000000020020000010400000000000000000100001000140002200000001000021400000006000",
      blockHash:
        "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
      transactionHash:
        "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
      logs: [
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x61D6aF87F88dd282b07eA7E1de69e27C6ac18Adb",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x0000000000000000000000006b2bac9205bd351c96b1a215c34b475852a848ea",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
          ],
          data: "0x00000000000000000000000000000000000000000000003da1e8d73fcc838000",
          logIndex: 270,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x61D6aF87F88dd282b07eA7E1de69e27C6ac18Adb",
          topics: [
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "0x0000000000000000000000006b2bac9205bd351c96b1a215c34b475852a848ea",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
          ],
          data: "0xffffffffffffffffffffffffffffffffffffffffffffffc25e1728c0337c7fff",
          logIndex: 271,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x61D6aF87F88dd282b07eA7E1de69e27C6ac18Adb",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x00000000000000000000000073af06dfba6842de7e44612e3172416ab509b41b",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
          ],
          data: "0x00000000000000000000000000000000000000000000007be199214a79cae000",
          logIndex: 272,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0xB106a95156d6CC5D79de9033D7d9Cb51a1aAa48A",
          topics: [
            "0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a",
            "0x00000000000000000000000061d6af87f88dd282b07ea7e1de69e27c6ac18adb",
          ],
          data: "0x000000000000000000000000000000000000000000000462766c5101c563917b000000000000000000000000000000000000000000385670df56ca6afd0cb3c9000000000000000000000000000000000000000000085daadc66e81f42af0e170000000000000000000000000000000000000000033b2e3ca59c646e66232f490000000000000000000000000000000000000000033b2e47ae72a5d540673999",
          logIndex: 273,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x61D6aF87F88dd282b07eA7E1de69e27C6ac18Adb",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
            "0x0000000000000000000000002ac3f7860ad2f4624961aa903cd3b219859cb7d6",
          ],
          data: "0x0000000000000000000000000000000000000000000000b98381f88a464e6000",
          logIndex: 274,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x61D6aF87F88dd282b07eA7E1de69e27C6ac18Adb",
          topics: [
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
            "0x000000000000000000000000b106a95156d6cc5d79de9033d7d9cb51a1aaa48a",
          ],
          data: "0xfffffffffffffffffffffffffffffffffffffffffffff870303bc4d1722f7876",
          logIndex: 275,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x2AC3f7860ad2f4624961Aa903cd3b219859Cb7D6",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
          ],
          data: "0x0000000000000000000000000000000000000000000000b98381f88a464e6000",
          logIndex: 276,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x2AC3f7860ad2f4624961Aa903cd3b219859Cb7D6",
          topics: [
            "0x458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b86196",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
          ],
          data: "0x0000000000000000000000000000000000000000000000b98381f88a464e600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033b2e3ca59c646e66232f49",
          logIndex: 277,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0xB106a95156d6CC5D79de9033D7d9Cb51a1aAa48A",
          topics: [
            "0x00058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f2",
            "0x00000000000000000000000061d6af87f88dd282b07ea7e1de69e27c6ac18adb",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
          ],
          data: "0x",
          logIndex: 278,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0xB106a95156d6CC5D79de9033D7d9Cb51a1aAa48A",
          topics: [
            "0x2b627736bca15cd5381dcf80b0bf11fd197d01a037c52b927a881a10fb73ba61",
            "0x00000000000000000000000061d6af87f88dd282b07ea7e1de69e27c6ac18adb",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          ],
          data: "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c0000000000000000000000000000000000000000000000b98381f88a464e6000",
          logIndex: 279,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x1B80724fC3AB8Ced6D99FDd30E28B9d20A462DE3",
          topics: [
            "0xda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
            "0x0000000000000000000000001d2708636ea8e69f8c3766b973be331d175172ab",
          ],
          data: "0xffffffffffffffffffffffffffffffffffffffffffffffffd8a120dc755d44d1",
          logIndex: 280,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x1B80724fC3AB8Ced6D99FDd30E28B9d20A462DE3",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
          ],
          data: "0x000000000000000000000000000000000000000000000000128b44461482bf43",
          logIndex: 281,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x1B80724fC3AB8Ced6D99FDd30E28B9d20A462DE3",
          topics: [
            "0x458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b86196",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
          ],
          data: "0x000000000000000000000000000000000000000000000000128b44461482bf4300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033b2e4790d586905900743d",
          logIndex: 282,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0xB106a95156d6CC5D79de9033D7d9Cb51a1aAa48A",
          topics: [
            "0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a",
            "0x0000000000000000000000001d2708636ea8e69f8c3766b973be331d175172ab",
          ],
          data: "0x00000000000000000000000000000000000000000000005437118381ae95439300000000000000000000000000000000000000000038414b78df040cefaa5d170000000000000000000000000000000000000000000847688b7d09d7349861fd0000000000000000000000000000000000000000033b2e3ca0372e43b50f35740000000000000000000000000000000000000000033b2e4790d586905900743d",
          logIndex: 283,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x1D2708636EA8E69f8c3766B973be331D175172aB",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000a73f96862397de3ae181f770c8ff37437678d479",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
          ],
          data: "0x000000000000000000000000000000000000000000000000128b44461482bf43",
          logIndex: 284,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0xB106a95156d6CC5D79de9033D7d9Cb51a1aAa48A",
          topics: [
            "0xb3d084820fb1a9decffb176436bd02558d15fac9b0ddfed8c465bc7359d7dce0",
            "0x0000000000000000000000001d2708636ea8e69f8c3766b973be331d175172ab",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          ],
          data: "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c000000000000000000000000000000000000000000000000128b44461482bf4300000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000847688b7d09d7349861fd",
          logIndex: 285,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x1D2708636EA8E69f8c3766B973be331D175172aB",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
            "0x000000000000000000000000d7a2ebca23400ae2924918bfd48e7d577ddfafbb",
          ],
          data: "0x00000000000000000000000000000000000000000000000000025f58b1d761b6",
          logIndex: 286,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0xD7a2EBCA23400AE2924918Bfd48e7d577ddFAFbB",
          topics: [
            "0x338dc6cc2a8d5e8b271210fbedded38a5cc4ebc1854aa5bdb415bef2ca260767",
          ],
          data: "0x0000000000000000000000001d2708636ea8e69f8c3766b973be331d175172ab00000000000000000000000000000000000000000000000000025f58b1d761b60000000000000000000000000000000000000000000000000000000000000001",
          logIndex: 287,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x1D2708636EA8E69f8c3766B973be331D175172aB",
          topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
            "0x00000000000000000000000073af06dfba6842de7e44612e3172416ab509b41b",
          ],
          data: "0x0000000000000000000000000000000000000000000000001288e4ed62ab5d8d",
          logIndex: 288,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x73aF06dfBa6842de7E44612e3172416AB509b41B",
          topics: [
            "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
            "0x00000000000000000000000039e2f8d11ad50a97413efae1ba4707c6e59c0c2c",
          ],
          data: "0x0000000000000000000000000000000000000000000000001288e4ed62ab5d8dffffffffffffffffffffffffffffffffffffffffffffff841e66deb58635200000000000000000000000000000000000000000296cf187ca60e9026f39c36c9d00000000000000000000000000000000000000000000bbdec9d1ed03bc0e07d700000000000000000000000000000000000000000000000000000000000122f1",
          logIndex: 289,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
        {
          transactionIndex: 178,
          blockNumber: 8576556,
          transactionHash:
            "0x65f88a53728d517cb7adaf241fd12571409d654c7b49b997a63556ced02f59f9",
          address: "0x39E2f8d11ad50a97413EfaE1BA4707C6E59C0c2c",
          topics: [
            "0x872de1e6963fb377a332171ac2de21045002168ff0927ee42d67e69c4b11cdc1",
            "0x0000000000000000000000006b2bac9205bd351c96b1a215c34b475852a848ea",
          ],
          data: "0x00000000000000000000000061d6af87f88dd282b07ea7e1de69e27c6ac18adb0000000000000000000000001d2708636ea8e69f8c3766b973be331d175172ab00000000000000000000000000000000000000000000003da1e8d73fcc8380000000000000000000000000000000000000000000000000000000000000004e840000000000000000000000000000000000000000000000b98381f88a464e6000000000000000000000000000000000000000000000000000128b44461482bf43",
          logIndex: 290,
          blockHash:
            "0x9d090013daee14121985f3846bab53889c7798ea12c2938faf963feec7b3c492",
        },
      ],
      blockNumber: 8576556,
      confirmations: 1,
      cumulativeGasUsed: {
        type: "BigNumber",
        hex: "0x019a3d05",
      },
      effectiveGasPrice: {
        type: "BigNumber",
        hex: "0x108fa489e4",
      },
      status: 1,
      type: 2,
      byzantium: true,
    };
    const testing = () => {
      const signatureOpen =
        "OrderOpened(address,address,address,uint256,uint256,uint256,uint256)";
      return utils.keccak256(utils.toUtf8Bytes(signatureOpen));
    };

    const result = mockdata.logs.find((item) => {
      return item?.topics[0] === testing();
    });
    if (result) {
      const dataParser = utils.defaultAbiCoder.decode(["uint256"], result.data);
      console.log("dataParser", dataParser[0]);
    }
    console.log({ result });
  }, []);

  const { fetchLongShortData, longShortData: tableData } = useLongShortData();
  useEffect(() => {
    fetchLongShortData();
  }, [fetchLongShortData]);

  return (
    <>
      <TradeContextProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 xl:grid-cols-7 2xl:grid-cols-7 gap-3">
          <div className="col-span-5 flex flex-col justify-center">
            <Topbar
              amount={1227.5}
              currency={1226.9}
              change={-4.59}
              high={1226.9}
              low={1226.9}
            />
            <div className="mt-2 border rounded h-full">
              <TradingViewWidget />
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2 xl:col-span-2 2xl:col-span-2 h-full">
            <Mainbar fetchLongShortData={fetchLongShortData} />
          </div>
        </div>
        <BottomInfo tableData={tableData} />
      </TradeContextProvider>
    </>
  );
};

export default Index;
