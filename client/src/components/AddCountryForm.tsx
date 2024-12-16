import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import {
  useAddCountryMutation,
  useContinentsQuery,
  useAddContinentMutation,
} from "../types/graphql-types";

const AddCountryAndContinent: React.FC = () => {
  // États pour le formulaire d'ajout de pays
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");
  const [continent, setContinent] = useState<string | "">("");

  // États pour le formulaire d'ajout de continent
  const [newContinentName, setNewContinentName] = useState("");

  // GraphQL queries et mutations
  const {
    data: continentsData,
    loading: continentsLoading,
    error: continentsError,
  } = useContinentsQuery();
  const [addCountry, { loading: addCountryLoading, error: addCountryError }] =
    useAddCountryMutation();
  const [
    addContinent,
    { loading: addContinentLoading, error: addContinentError },
  ] = useAddContinentMutation();

  // Soumission du formulaire d'ajout de pays
  const handleAddCountry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !code || !emoji || !continent) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addCountry({
        variables: {
          data: {
            name,
            code,
            emoji,
            continent: {
              id: parseInt(continent, 10),
            },
          },
        },
      });

      // Réinitialisation des champs
      setName("");
      setCode("");
      setEmoji("");
      setContinent("");
    } catch (err) {
      console.error(err);
    }
  };

  // Soumission du formulaire d'ajout de continent
  const handleAddContinent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContinentName.trim()) {
      alert("Please provide a continent name.");
      return;
    }

    try {
      await addContinent({
        variables: {
          data: { name: newContinentName },
        },
      });

      // Réinitialisation du champ
      setNewContinentName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box>
      {/* Formulaire pour ajouter un pays */}
      <Typography variant="h5" gutterBottom>
        Add New Country
      </Typography>
      <form onSubmit={handleAddCountry}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Emoji"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          fullWidth
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Continent</InputLabel>
          <Select
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
            label="Continent"
          >
            {continentsLoading ? (
              <MenuItem disabled>
                <CircularProgress size={24} />
              </MenuItem>
            ) : continentsError ? (
              <MenuItem disabled>Error loading continents</MenuItem>
            ) : (
              continentsData?.continents?.map((cont) => (
                <MenuItem key={cont.id} value={cont.id}>
                  {cont.name}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={addCountryLoading || !name || !code || !emoji || !continent}
        >
          {addCountryLoading ? "Adding Country..." : "Add Country"}
        </Button>
      </form>

      {addCountryError && (
        <Typography color="error">{addCountryError.message}</Typography>
      )}

      <Box my={4}>
        <hr />
      </Box>

      {/* Formulaire pour ajouter un continent */}
      <Typography variant="h5" gutterBottom>
        Add New Continent
      </Typography>
      <form onSubmit={handleAddContinent}>
        <TextField
          label="Continent Name"
          value={newContinentName}
          onChange={(e) => setNewContinentName(e.target.value)}
          fullWidth
          margin="normal"
          disabled={addContinentLoading}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={addContinentLoading || !newContinentName.trim()}
        >
          {addContinentLoading ? "Adding Continent..." : "Add Continent"}
        </Button>
      </form>

      {addContinentError && (
        <Typography color="error">{addContinentError.message}</Typography>
      )}
    </Box>
  );
};

export default AddCountryAndContinent;
