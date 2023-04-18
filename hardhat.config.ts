import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const compilerSettings = {
    optimizer: {
        runs: 200,
        enabled: true,
    },
};

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.13",
                settings: compilerSettings,
            },
            {
                version: "0.8.9",
                settings: compilerSettings,
            },
            {
                version: "0.8.6",
                settings: compilerSettings,
            },
            {
                version: "0.7.6",
                settings: compilerSettings,
            },
            {
                version: "0.7.0",
                settings: compilerSettings,
            },
            {
                version: "0.6.12",
                settings: compilerSettings,
            },
        ],
    },
};

export default config;
