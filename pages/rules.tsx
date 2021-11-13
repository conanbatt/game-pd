import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

const RULES = [
  'To start a match the players must verify ownership of a GAME NFT',
  'The match lasts 7 rounds, with each round lasting one day.',
  'At the start of each round, GAME will provide a set of (provable) MetaRules.',
  'In each round, the players can lock a single GAME token.',
  'In each round, the players can choose to Confess.',
  "At the end of each round, the player's action, token, and MetaRules are taken into consideration to produce a score.",
  'At the end of the seventh round, the match ends and the player with the most points wins.'
]

function Rules() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>[Game] Prisoners Dilemma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>[GAME] PD</a>
          </Link>
          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>
      <main>
        <div className="container">
          <h1>
            [GAME] Prisoners Dilemma
          </h1>
          <h2>
            Rules
          </h2>
          <ol>
            {RULES.map((rule, i) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </div>
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }

        ol {
          text-align: left;
        }

        li {
          margin-bottom: 24px;
          font-size: 48px;
        }
      `}</style>
    </div>
  );
}

export default Rules;
