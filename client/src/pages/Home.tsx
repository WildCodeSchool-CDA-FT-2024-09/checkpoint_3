import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_COUNTRY, GET_COUNTRIES, GET_CONTINENTS } from "../schema/schema";
import List from "../components/CountriesList";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Home() {
  const [formData, setFormData] = useState({ name: "", emoji: "", code: "" });
  const [continent, setContinent] = useState<string>("");

  const { data: continents } = useQuery(GET_CONTINENTS);
  const [addCountry] = useMutation(ADD_COUNTRY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeContinent = (event: SelectChangeEvent) => {
    setContinent(event.target.value as string);
  };

  const handleSubmit = async () => {
    await addCountry({
      variables: {
        data: {
          name: formData.name,
          code: formData.code,
          emoji: formData.emoji,
          continent: continent,
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Continent</InputLabel>
            <Select
              labelId="continent-select-label"
              id="continent-select"
              value={continent}
              label="Continent"
              onChange={handleChangeContinent}
            >
              {continents &&
                continents.continents.map(
                  (continent: { id: number; name: string }) => (
                    <MenuItem key={continent.id} value={continent.id}>
                      {continent.name}
                    </MenuItem>
                  ),
                )}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Add
        </Button>
      </Box>
      <List />
    </div>
  );
}

export default Home;
