import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      hello jay
    </div>
  )
}

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age:number, gender:string){
    this.name = name;
    this.age = age;
    this.gender = gender
  }  
}

// interface Human {
//   name:string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name:"jay",
//   age: 24,
//   gender: "male",
  
// }

const jay = new Human("jay",24,"male");
const sayHi = (person:Human): string => {
  return `Hello ${person.name}, you wanna be ${person.age}, you are a ${person.gender}!`;
};


console.log(sayHi(jay));

export default Home
