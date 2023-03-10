import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = () => (
    <main className={styles.main}>
        <div className={styles.description}>
            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>pages/index.tsx</code>
            </p>
            <div>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{" "}
                    <Image
                        src="/logo/full_logo.png"
                        alt="Vercel Logo"
                        // className={styles.vercelLogo}
                        width={200}
                        height={70}
                        priority
                    />
                </a>
            </div>
        </div>

        <div className={styles.center}>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            <div className={styles.thirteen}>
                <Image
                    src="/thirteen.svg"
                    alt="13"
                    width={40}
                    height={31}
                    priority
                />
            </div>
        </div>

        <div className={`${inter.className}`}>
            <h1 className="flex text-4xl items-center">
                NextJS Template, with: <br />
                Typescript, TailwindCSS, ESLint, Prettier, Husky
            </h1>
        </div>

        <div className={styles.grid}>
            <a
                href="https://tailwindcss.com"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    TailwindCSS <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Find in-depth information about Tailwindcss features
                    and&nbsp;API.
                </p>
            </a>

            <a
                href="https://eslint.org/"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    ESLint <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Find in-depth information about ESLint features
                    and&nbsp;API.
                </p>
            </a>

            <a
                href="https://prettier.io/"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    Prettier <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Find in-depth information about Prettier features
                    and&nbsp;API.
                </p>
            </a>

            <a
                href="https://typicode.github.io/husky/#/"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    Husky <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Find in-depth information about Husky features and&nbsp;API.
                </p>
            </a>
        </div>
    </main>
);

export default Home;
