import Card from "../components/Card";
import {
    useGetAllCountriesQuery,
    useAddCountryMutation,
} from "../generated/graphql-types";
import { useState } from "react";

export default function Home() {
    const { data, loading, error, refetch } = useGetAllCountriesQuery();
    const [addCountry] = useAddCountryMutation();
    const [formData, setFormData] = useState({
        name: "",
        emoji: "",
        code: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await addCountry({
                variables: {
                    name: formData.name,
                    emoji: formData.emoji,
                    code: formData.code,
                },
            });
            console.log("Pays ajouté avec succès");

            setFormData({ name: "", emoji: "", code: "" });

            await refetch();
        } catch (err) {
            console.error("Erreur lors de l'ajout du pays :", err);
        }
    };

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <p>Name</p>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="emoji">
                    <p>Emoji</p>
                    <input
                        id="emoji"
                        type="text"
                        name="emoji"
                        placeholder="Emoji"
                        value={formData.emoji}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="code">
                    <p>Code</p>
                    <input
                        id="code"
                        type="text"
                        name="code"
                        placeholder="Code"
                        value={formData.code}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add</button>
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
