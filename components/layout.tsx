import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Head>
                <title>Fah Sujitra</title>
                <meta name="description" content="Fah Sujitra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-row">
                <Navbar />
                <main className="grow bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
}