import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "./Name.module.css";
import { useEffect, useState } from "react";
import { Collapse } from "@nextui-org/react";

export default function Henry({ data }) {
  const src = data.band.logo;
  const srcCredit = data.band.logoCredits;
  const router = useRouter();

  const url = "http://localhost:8080/schedule/";
  const [stageData, setData] = useState([]);
  //FETCH
  useEffect(() => {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  // console.log(data1.Vanaheim.fri.find((e) => e.act == data.band.name));

  return (
    <>
      <Head>
        <title>{data.band.name}</title>
      </Head>
      <div className={styles.main}>
        <a className={styles.back} onClick={() => router.back()}>
          Go back ↩
        </a>
        <h1 className={styles.headline}>{data.band.name}</h1>
        <div className={styles.grid}>
          <div className={styles.image}>
            {src.startsWith("http") ? (
              <Image src={src} alt={srcCredit} className={styles.theImage} width={500} height={500} />
            ) : (
              <Image src={"http://localhost:8080/logos/" + src} alt={srcCredit} className={styles.theImage} width={500} height={500} />
            )}
            {!srcCredit ? null : <p className={styles.credits}>{srcCredit}</p>}
          </div>
          <Collapse.Group bordered className="collapsegroup">
            <Collapse title="BIO" expanded>
              <div className={styles.bio}>
                <p className={styles.text}>{data.band.bio}</p>
              </div>
            </Collapse>
            <Collapse title="MEMBERS">
              <div className={styles.members}>
                {data.band.members.map((members, i) => (
                  <p className={styles.member}>{members}</p>
                ))}
              </div>
            </Collapse>
            <Collapse title="GENRE">
              <div className={styles.members}>
                <div className={styles.member}>{data.band.genre}</div>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </>
  );
}

// // Fetching each route from the paths-array
// export async function getStaticProps(context) {
//   const slug = context.params.slug;
//   const res = await fetch("http://localhost:8080/bands/" + slug);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
// {
// }
// // Creating an array of slugs/paths to be built
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:8080/bands");
//   const data = await res.json();
//   const jatak = entry[i].name.toLowerCase().trim().replaceAll(" ", "-");
//   const paths = data.map((entry, i) => {
//     return { params: { slug: jatak } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticProps(context) {
  const name = context.params.name;
  const res = await fetch("http://localhost:8080/bands/" + name);

  // If no succes, return a 404 redirect
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/bands/");
  const data = await res.json();

  const paths = data.map((obj) => {
    return { params: { name: obj.name.toLowerCase().split(" ").join("_") } };
  });

  console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
}
