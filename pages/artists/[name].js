import Head from "next/head";
import Image from "next/image";

export default function Henry({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>{data.band.name}</title>
      </Head>
      <h1>{data.band.name}</h1>
      <p>{data.band.bio}</p>
      {/* <Image
        src={data.content.image.src}
        alt={data.content.image.alt}
        width={data.content.image.width}
        height={data.content.image.height}
        priority
        sizes="(max-width: 700px) 100vw,
        700px"
      /> */}
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
