import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PokemonCard = ({name,url}) => {
  const id = extractPokemonIdFromUrl(url)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          esto es una prueba
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See details</Button>
      </CardActions>
    </Card>
  )
}

const extractPokemonIdFromUrl = (url) => {
  const segments = url.split('/');
  return segments[segments.length - 2];
}

export default PokemonCard
