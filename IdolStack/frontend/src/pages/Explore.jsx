import artistData from "../data/artistData";
import ArtistCard from "../components/ArtistCard";

const Explore = () => {
  return (
    <main className="explore-page">
      <h1>🎨 Explore Idols</h1>
      <section className="artist-grid">
        {artistData.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </section>
    </main>
  );
};

export default Explore;