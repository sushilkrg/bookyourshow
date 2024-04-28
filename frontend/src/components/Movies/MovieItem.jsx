import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const MovieItem = ({title, releaseDate, posterUrl, id}) => {
    return (
        <Card sx={{ width: 250, height: 320,margin: 2, borderRadius: 5, ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>
            <img height={"50%"} width={"100%"} src={posterUrl} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {new Date(releaseDate).toDateString()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                variant='contained'
                fullwidth="true"
                LinkComponent={Link}
                to={`/booking/${id}`}
                sx={{ margin: "auto", bgcolor:"#2b2d42" }} size="small">Book</Button>
            </CardActions>
        </Card>
    )
}

export default MovieItem