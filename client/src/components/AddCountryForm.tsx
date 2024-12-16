// src/components/AddCountryForm.tsx
import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { useAddCountryMutation, useCountriesQuery } from "../types/graphql-types";

const AddCountryForm: React.FC = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");
  const [addCountry, { loading, error }] = useAddCountryMutation();

  const { refetch } = useCountriesQuery();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addCountry({ variables: { data: { name, code, emoji } } });
      setName("");
      setCode("");
      setEmoji("");
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Add New Country
      </Typography>
      <form onSubmit={handleSubmit}>
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Country"}
        </Button>
      </form>
      {error && <Typography color="error">{error.message}</Typography>}
    </Box>
  );
};

export default AddCountryForm;
