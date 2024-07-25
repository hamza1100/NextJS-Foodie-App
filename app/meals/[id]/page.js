export default function Home({params}) {
  console.log('params :', params);
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Hello world! {params.id}
      </h1>
    </main>
  );
}
