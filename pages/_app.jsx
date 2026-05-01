import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Vikram Singh | Portfolio</title>
        <meta
          name="description"
          content="Vikram Singh portfolio showcasing web development projects, full-stack applications, and creative digital experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vikram Singh | Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Vikram Singh, a BCA student and full-stack developer building modern web applications and creative digital projects."
        />
        <meta
          property="og:url"
          content="https://pixelpulse-ruby.vercel.app"
        />
        <meta
          property="og:image"
          content="https://pixelpulse-ruby.vercel.app/og-image.jpeg"
        />
        <meta property="og:site_name" content="PixelPulse Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vikram Singh | Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Vikram Singh, a BCA student and full-stack developer."
        />
        <meta
          name="twitter:image"
          content="https://pixelpulse-ruby.vercel.app/og-image.jpeg"
        />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
