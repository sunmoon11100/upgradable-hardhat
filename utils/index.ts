import { ethers } from "hardhat";
import { ContractFactory } from "ethers";
import { ERC20Mock__factory as ERC20MockFactory } from "../typechain-types";

export const getBigNumber = (amount: number, decimals = 18) => {
	return ethers.utils.parseUnits(amount.toString(), decimals);
};

export async function advanceBlock() {
	return ethers.provider.send("evm_mine", []);
}

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const deployContractFromName = async (
	contractName: string,
	factoryType: any,
	args: Array<any> = []
) => {
	const factory = (await ethers.getContractFactory(
		contractName
	)) as typeof factoryType;
	return factory.deploy(...args);
};

export const getContractFromAddress = async (
	contractName: string,
	factoryType: ContractFactory,
	address: string
) => {
	const factory = (await ethers.getContractFactory(
		contractName
	)) as typeof factoryType;
	return factory.attach(address);
};

export const getERC20ContractFromAddress = async (address: string) => {
	const factory = (await ethers.getContractFactory(
		"ERC20Mock"
	)) as ERC20MockFactory;
	return factory.attach(address);
};
