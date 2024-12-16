import { Paper, Button, Box } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_COUNTRIES, GET_CONTINENTS } from "../graphql/queries";
import { ADD_COUNTRY } from "../graphql/mutations";
import { Continent } from "../types/country";

export default function AddCountryForm() {
  const [formData, setFormData] = useState({
    name: "",
    emoji: "",
    code: "",
    continentId: null as number | null,
  });

  const { data: continentsData } = useQuery<{ continents: Continent[] }>(
    GET_CONTINENTS
  );
  const [addCountry] = useMutation(ADD_COUNTRY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addCountry({
        variables: {
          data: {
            name: formData.name,
            emoji: formData.emoji,
            code: formData.code.toUpperCase(),
            continent: { id: formData.continentId }, // Doit être un entier
          },
        },
        refetchQueries: [{ query: GET_COUNTRIES }],
      });
      setFormData({ name: "", emoji: "", code: "", continentId: null });
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  const inputStyle = {
    display: "block",
    marginTop: "4px",
    height: "32px",
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 3,
          mb: 4,
          backgroundColor: "rgba(0, 0, 0, 0.02)",
          width: "auto",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="emoji">Emoji</label>
            <input
              id="emoji"
              type="text"
              value={formData.emoji}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, emoji: e.target.value }))
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="code">Code</label>
            <input
              id="code"
              type="text"
              value={formData.code}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, code: e.target.value }))
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="continent">Continent</label>
            <select
              id="continent"
              value={formData.continentId ?? ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  continentId: parseInt(e.target.value, 10),
                }))
              }
              style={inputStyle}
            >
              <option value="">Select a continent</option>
              {continentsData?.continents.map((continent) => (
                <option key={continent.id} value={continent.id}>
                  {continent.name}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            variant="contained"
            sx={{ px: 4, alignSelf: "end" }}
          >
            Add
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
