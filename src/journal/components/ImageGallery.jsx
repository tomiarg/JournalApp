import { ImageList, ImageListItem } from "@mui/material";


export const ImageGallery = ({images=[]})=> {
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt="Imagen De La Nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
