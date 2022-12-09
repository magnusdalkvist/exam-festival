import Head from "next/head";
import Image from "next/image";

export default function Henry({ data }) {
  console.log(data);
  const src = data.band.logo;

  return (
    <>
      <Head>
        <title>{data.band.name}</title>
      </Head>
      <h1>{data.band.name}</h1>
      <p>{data.band.bio}</p>
      {data.band.members.map((e, i) => (
        <p>{e}</p>
      ))}
      {src.startsWith("http") ? (
        <Image
          src={src}
          alt={data.band.logo.credit}
          width={500}
          height={500}
          priority
          sizes="(max-width: 500px) 100vw,
      500px"
        />
      ) : (
        <Image
          src={"http://localhost:8080/logos/" + src}
          alt={data.band.logo.credit}
          width={500}
          height={500}
          priority
          sizes="(max-width: 500px) 100vw,
      500px"
        />
      )}
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
