
/*const page = () => {
  //throw new Error('Not Implemented');
  return (
    <div>
        <h1>About</h1>
    </div>
  )
}

export default page*/

async function Home()
{
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums: { id: number; title: string }[] = await response.json() as { id: number; title: string }[];

  return (
    <div className = "grid grif cols-1 sm:grid-cols-2 md:grid-cols">
      {albums.map((album: {id: number, title: string}) => ( 
        <div key = {album.id}
      className = "bg-white shadow-mdrounded-lg p-4 transition t.."
      >
        <h3 className = "text-lg front bold b-2">{album.title}</h3>
        <p className = "text-gray-600">Album ID: {album.id} </p>
        </div>
      ))}
      </div>
  );
}
export default Home;

