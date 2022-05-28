import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../CSS/projects.css'
import Sportsbros from '../CSS/website-images/sportsbros.png'
import Nuddge from '../CSS/website-images/nuddge.png'
import Oceanair from '../CSS/website-images/oceanair.png'

export default class Projects extends Component {
  render() {
    return (
      <div className="projectsContainer">
          <Card className="cardContainer">
      <CardMedia
        component="img"
        height=""
        image={Sportsbros}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sport Bros
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A sports news app that gives you up-to-date information. Used the ESPN API to supply the news articles, scores, etc.
        Technologies used are Javascript, HTML, CSS, and Bootstrap. Sport Bros was deployed using Surge.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://sportsbros.surge.sh/#" target="_blank" rel="noopener noreferrer">Website</Button>
        <Button size="small" href="https://github.com/DerekDunlap/SportsNews" target="_blank" rel="noopener noreferrer">Github</Button>
      </CardActions>
    </Card>
    <Card className="cardContainer">
      <CardMedia
        component="img"
        height=""
        image={Nuddge}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nuddge
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Nuddge is a web app that allows you to reward yourself by completing goals. Created an entire user database using SQL. Technologies being used are Javascript, SQL, Mustache, CSS, HTML,  Bootstrap, Bcrypt, Express, Postman, and Node.js. The app was deployed using Heroku
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://nuddge-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Website</Button>
        <Button size="small" href="https://github.com/Zkellogg/nuddge-app" target="_blank" rel="noopener noreferrer">Github</Button>
      </CardActions>
    </Card>
    <Card className="cardContainer">
      <CardMedia
        component="img"
        height=""
        image={Oceanair}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Visit Ocean Air
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Visit Ocean air was the final project of my coding bootcamp from Digitalcrafts.
         This was a an app that me and my other team memebers created for the company that is Ocean Air. We used the guesty API to take Airbnb out of the picture for them. Technologies that were Javascript, Node.js, React.Js, Redux, Prisma, HTML, Bootstrap, Postman, and JWT. The site was deployed using Hostgator. It is now a wordpress site for ease of use for the owners.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://visitoceanair.com/" target="_blank" rel="noopener noreferrer">Website</Button>
        <Button size="small" href="https://github.com/Zkellogg/OceanAir" target="_blank" rel="noopener noreferrer">Github</Button>
      </CardActions>
    </Card>
      </div>
    )
  }
}
