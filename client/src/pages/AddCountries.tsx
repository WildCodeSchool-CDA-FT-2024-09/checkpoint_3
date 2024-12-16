import React, { useState } from "react";
import {
  useAddCountryMutation,
  useGetAllCountriesQuery,
  useGetAllContinentsQuery,
} from "../generated/graphql-types";
import {
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const AddCountries = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    emoji: "",
    continent: "",
  });

  const [addCountry, { loading: adding, error }] = useAddCountryMutation();
  const { data, loading: fetching, refetch } = useGetAllCountriesQuery();
  const { data: continentData, loading: loadingContinents } =
    useGetAllContinentsQuery();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinentChange = (e: any) => {
    setFormData({ ...formData, continent: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addCountry({
      variables: {
        data: {
          name: formData.name,
          code: formData.code,
          emoji: formData.emoji,
          continent: { id: parseInt(formData.continent) },
        },
      },
    });
    setFormData({ name: "", code: "", emoji: "", continent: "" });
    refetch();
  };

  return (
    <Box>
      <Box sx={{ textAlign: "center", backgroundColor: "#F7146B", padding: 2 }}>
        <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
          Checkpoint : frontend
        </Typography>
        <Typography sx={{ color: "white" }}>Countries</Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem 0",
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              label="Code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
              inputProps={{ maxLength: 3 }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Emoji"
              name="emoji"
              value={formData.emoji}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="continent-select-label">Continent</InputLabel>
              <Select
                labelId="continent-select-label"
                value={formData.continent}
                onChange={handleContinentChange}
                required
              >
                {loadingContinents ? (
                  <MenuItem disabled>Loading...</MenuItem>
                ) : (
                  continentData?.continents.map((continent) => (
                    <MenuItem key={continent.id} value={continent.id}>
                      {continent.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#F7146B", color: "white" }}
              disabled={adding}
            >
              {adding ? <CircularProgress size={24} /> : "Add"}
            </Button>
          </Grid>
        </Grid>
      </Box>

      {error && (
        <Alert severity="error" sx={{ textAlign: "center" }}>
          {error.message}
        </Alert>
      )}

      <Grid container spacing={2} justifyContent="center">
        {fetching ? (
          <CircularProgress />
        ) : (
          data?.countries.map((country) => (
            <Grid item key={country.id} xs={12} sm={4} md={2}>
              <Card sx={{ textAlign: "center", boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h3">{country.emoji}</Typography>
                  <Typography>{country.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default AddCountries;
