import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.tearm} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchResults results={results} />
    </>
  );
}

export default Search;

export const getServerSideProps = async (context) => {
  const useDummyData = false;
  const startIndex = context.query.start || 0;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.tearm}&start=${startIndex}`
      ).then((response) => response.json());
  // after the SERVER side has rendered... pass the result to thhe client...
  return {
    props: {
      results: data,
    },
  };
};
