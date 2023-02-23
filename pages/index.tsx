// import Head from "next/head";
import Image from "next/image";
import axios from "axios";

// import Nav from "@/components/Nav";
import { PT_Serif } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const myFont = PT_Serif({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return <div>Welcome to Next.js!</div>;
}
