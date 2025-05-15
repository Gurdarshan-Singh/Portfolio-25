import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ title, content, image, link }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="Card" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          href={link}
          size="small"
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold", // Makes text bold
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)", // Scale up slightly
              backgroundColor: "#f0f0f0", // Light hover background
            },
          }}
        >
          Explore More
        </Button>
      </CardActions>
    </Card>
  );
}
