export function validateImagePaths(artistData) {
  artistData.forEach(({ name, image }) => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
      console.log(`✅ Image loaded: ${image}`);
    };

    img.onerror = () => {
      console.warn(`❌ Missing or broken image for ${name}: ${image}`);
    };
  });
}