"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface JobSkill {
  skill: string;
  weight: string;
}

interface FormData {
  title: string;
  education: string;
  language: string;
  yearsOfExperience: string;
  jobDescription: string;
  jobSkills: JobSkill[];
}

export default function Home() {
  const initialFormData = {
    title: "",
    education: "",
    language: "",
    yearsOfExperience: "",
    jobDescription: "",
    jobSkills: [{ skill: "", weight: "" }],
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
const [data, setData] = useState<{id:number; title:string}[]>([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/tech-skill");
      const fetchedData = await response.json();
      setData(fetchedData);
      console.log(fetchedData);
    };

    fetchData();
  }, [formData]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3001/tech-skill');
      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateJobSkillSelection = (
    e: SelectChangeEvent<string>,
    index: number
  ) => {
    const updatedJobSkills = [...formData.jobSkills];
    updatedJobSkills[index] = {
      ...updatedJobSkills[index],
      skill: e.target.value,
    };
    setFormData((prev) => ({
      ...prev,
      jobSkills: updatedJobSkills,
    }));
  };

  const handleUpdateJobWeightSelection = (
    e: SelectChangeEvent<string>,
    index: number
  ) => {
    const updatedJobSkills = [...formData.jobSkills];
    updatedJobSkills[index] = {
      ...updatedJobSkills[index],
      weight: e.target.value,
    };
    setFormData((prev) => ({
      ...prev,
      jobSkills: updatedJobSkills,
    }));
  };

  const handleAddNewSkill = () => {
    setFormData((prev) => ({
      ...prev,
      jobSkills: [...prev.jobSkills, { skill: "", weight: "" }],
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const response = await fetch('http://localhost:3001/tech-skill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Assuming JSON data
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });
  
      if (response.ok) {
        // Handle successful submission
        console.log('Job opening created successfully!',formData);
        setFormData(initialFormData);
      
        // You might want to clear form data or display a success message
      } else {
        // Handle error
        console.error('Submission failed:', response.statusText);
        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error during submission:', error);
      // Handle network errors or other issues
    }

  };

  const handleDeleteJobSkill = (index: number) => {
    const updatedJobSkills = [...formData.jobSkills];
    updatedJobSkills.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      jobSkills: updatedJobSkills,
    }));
  };

  return (
    <main>
      <Container component="main" maxWidth="sm">
        <Box sx={{ my: 8, bgcolor: "background.paper", p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create Job Opening
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Years of Experience"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Job Description"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  rows={8}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h5" gutterBottom>
                  Technical Skills
                </Typography>
                <Button onClick={handleAddNewSkill}>Add new skill</Button>
              </Grid>
              {formData.jobSkills.map((js, index) => (
                <>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Skill
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={js.skill}
                        label="Skill"
                        onChange={(e) =>
                          handleUpdateJobSkillSelection(e, index)
                        }
                      >
                        {data.map((item) => (
                          <MenuItem key={item.id} value={item.title}>
                            {item.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Level
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={js.weight} // Store the selected value in a state variable
                        onChange={(e) =>
                          handleUpdateJobWeightSelection(e, index)
                        }
                        sx={{ width: "100%" }}
                        label="Level"
                      >
                        <MenuItem value={1}>Low</MenuItem>
                        <MenuItem value={2}>Moderate</MenuItem>
                        <MenuItem value={3}>High</MenuItem>
                        <MenuItem value={4}>Critical</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    {index != 0 && (
                      <IconButton
                        onClick={() => handleDeleteJobSkill(index)}
                        aria-label="Close"
                      >
                        <Close />
                      </IconButton>
                    )}
                  </Grid>
                </>
              ))}
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
          </form>
        </Box>
      </Container>
    </main>
  );
}
