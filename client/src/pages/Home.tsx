import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY, GET_COUNTRIES } from "../schema/schema";
import List from "../components/CountriesList";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";

function Home() {
  const [formData, setFormData] = useState({ name: "", emoji: "", code: "" });
  const [addCountry] = useMutation(ADD_COUNTRY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    await addCountry({
      variables: {
        data: {
          name: formData.name,
          code: formData.code,
          emoji: formData.emoji,
        },
      },
      refetchQueries: [{ query: GET_COUNTRIES }],
      onCompleted: () => {},
    });

    setFormData({ name: "", emoji: "", code: "" });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Emoji"
          name="emoji"
          value={formData.emoji}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Code"
          name="code"
          value={formData.code}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Add
        </Button>
      </Box>
      <List />
    </div>
  );
}

export default Home;
