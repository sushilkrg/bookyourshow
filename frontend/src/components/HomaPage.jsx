import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Box, Button, Typography } from "@mui/material"
import MovieItem from './Movies/MovieItem'
import { getAllMovies } from '../api-helpers/api-helpers'

const HomaPage = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getAllMovies()
            .then((data) => setMovies(data.movies))
            .catch((err) => console.log(err))
    }, []);
    console.log(movies);

    return (
        <Box width={"100%"} height={"100%"} marginTop={2} margin={"auto"} >
            <Box margin={"auto"} width={"90%"} height={"40vh"} padding={2}>
                <img src="https://www.livemint.com/lm-img/img/2023/09/13/1600x900/Jawan_1689069088718_1694577440298.jpg" alt="jawan" width={"100%"} height={"100%"} />
            </Box>
            <Box padding={5} margin={"auto"} >
                <Typography variant='h4' textAlign={"center"}>Latest Released</Typography>
            </Box>
            <Box display={"flex"} width={"80%"} justifyContent={"center"} margin={"auto"} flexWrap={'wrap'} >
                {movies && movies.slice(0, 4).map((movie, index) => (
                    <MovieItem key={index} id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} />
                ))}
            </Box>
            <Box display={"flex"} padding={5} margin={"auto"}>
                <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{ margin: "auto", color: "#2b2d42" }}>View All Movies</Button>
            </Box>

        </Box>
    )
}

export default HomaPage