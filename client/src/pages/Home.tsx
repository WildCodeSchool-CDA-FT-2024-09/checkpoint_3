import Card from "../components/Card";
import { useGetAllCountriesQuery } from "../generated/graphql-types";

export default function Home() {
    const { data, loading, error } = useGetAllCountriesQuery();
    console.log("%c⧭", "color: #ff0000", data);

    if (loading) return <p>chargement</p>;
    if (error) return <p>erreur...</p>;

    return (
        <main>
            <form action="">
                <label htmlFor="">
                    <p>Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="">
                    <p>Emoji</p>
                    <input
                        type="text"
                        placeholder="Emoji"
                    />
                </label>
                <label htmlFor="">
                    <p>code</p>
                    <input
                        type="text"
                        placeholder="code"
                    />
                </label>

                <button>add</button>
            </form>

            <section className="section-card">
                {data?.countries?.map((e) => (
                    <Card
                        key={e.id}
                        data={e}
                    />
                ))}
            </section>
        </main>
    );
}
