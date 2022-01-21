import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as CryptoJS from "crypto-js";

class Block {

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block) : boolean => 
    typeof aBlock.index === "number" && 
    typeof aBlock.hash === "string" && 
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
    ){
      this.index=index;
      this.hash=hash;
      this.previousHash=previousHash;
      this.data=data;
      this.timestamp=timestamp;
    }
}

const genesisBlock:Block = new Block(0,"564231121", "", "hello", 2123);

let blockchain: Block[] = [genesisBlock];

const getBlockchanin = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length -1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string) : Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex : number = previousBlock.index + 1;
  const newTimestamp : number = getNewTimeStamp();
  const newHash : string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
    const newBlock : Block = new Block(
      newIndex, 
      newHash, 
      previousBlock.hash, 
      data, 
      newTimestamp
      );
      addBlock(newBlock);
      return newBlock;
};

const getHashforBlock = (aBlock: Block) : string => 
Block.calculateBlockHash(
  aBlock.index, 
  aBlock.previousHash, 
  aBlock.timestamp, 
  aBlock.data
  );

//console.log(createNewBlock("hello"), createNewBlock("bye bye"));

const isBlockValid = (candidateBlock : Block, previousBlock: Block) : boolean => {
  if(!Block.validateStructure(candidateBlock)) {
    return false;
  } else if(previousBlock.index +1 !== candidateBlock.index){
    return false;
  } else if(previousBlock.hash !== candidateBlock.previousHash){
    return false;
  } else if(getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  }else {
    return true;
  }
};

const addBlock = (candidateBlock: Block) : void => {
  if(isBlockValid(candidateBlock, getLatestBlock())){
    blockchain.push(candidateBlock);
  }
}

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
createNewBlock("5 block");
createNewBlock("6 block");
createNewBlock("7 block");
createNewBlock("8 block");
createNewBlock("9 block");
createNewBlock("10 block");
createNewBlock("11 block");
createNewBlock("12 block");
createNewBlock("13 block");



console.log(blockchain);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      hello jay
    </div>
  )
}


export default Home
