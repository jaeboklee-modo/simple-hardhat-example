import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "dotenv/config";

import { HardhatUserConfig } from "hardhat/types"

const config: HardhatUserConfig = {
    solidity: {
        version: "0.7.4",
    },
    networks: {
        ropsten: {
            url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: [process.env.ADMIN || ''],
            chainId: 3,
          },
    }
};

export default config;