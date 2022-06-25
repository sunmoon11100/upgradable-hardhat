import { config as dotEnvConfig } from "dotenv";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "@openzeppelin/hardhat-upgrades";
import "solidity-coverage";

import "./tasks/accounts";
import "./tasks/balance";
import "./tasks/block-number";
import { HardhatUserConfig } from "hardhat/types";
dotEnvConfig();

const config: HardhatUserConfig = {
	defaultNetwork: "hardhat",
	networks: {
		localhost: {
			url: "http://127.0.0.1:8545",
		},
		hardhat: {},
		bscTestnet: {
			url: "https://data-seed-prebsc-1-s3.binance.org:8545",
			chainId: 97,
			gasPrice: 20000000000,
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
		bsc: {
			url: "https://bsc-dataseed.binance.org/",
			chainId: 56,
			gasPrice: 20000000000,
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
		rinkeby: {
			url: process.env.ALCHEMY_RINKEDBY_RPC_URL || "",
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
	},
	solidity: {
		compilers: [
			{
				version: "0.8.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
			{
				version: "0.6.12",
			},
		],
	},
	mocha: {
		timeout: 200000,
	},
	gasReporter: {
		enabled: process.env.REPORT_GAS !== undefined,
		currency: "USD",
	},
	etherscan: {
		apiKey: {
			mainnet:
				process.env.ETHERSCAN_API_KEY !== undefined
					? process.env.ETHERSCAN_API_KEY
					: "",
			rinkeby:
				process.env.ETHERSCAN_API_KEY !== undefined
					? process.env.ETHERSCAN_API_KEY
					: "",
			bsc:
				process.env.BSCSCAN_API_KEY !== undefined
					? process.env.BSCSCAN_API_KEY
					: "",
			bscTestnet:
				process.env.BSCSCAN_API_KEY !== undefined
					? process.env.BSCSCAN_API_KEY
					: "",
		},
	},
};

module.exports = config;
