<script>
  const images = [
    { src: '/q1.jpg', alt: 'QVegas Magazine', caption: 'QVegas Magazine Cover' },
    { src: '/q2.jpg', alt: 'QVegas Magazine', caption: 'QVegas Magazine Page 1' },
    { src: '/q3.jpg', alt: 'QVegas Magazine', caption: 'QVegas Magazine Page 2' }
  ];
</script>

<section class="press">
  <h1>Press Highlights</h1>
  <div class="press-gallery">
    {#each images as image}
      <figure>
        <img src={image.src} alt={image.alt} />
        <figcaption>{image.caption}</figcaption>
      </figure>
    {/each}
  </div>
</section>

<style>
.press {
  padding: 2rem;
  text-align: center;
}
.press-gallery {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}
figure {
  margin: 0;
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
figcaption {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #555;
}
@media (max-width: 600px) {
  .press {
    padding: 1rem;
  }
  .press-gallery {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  h1 {
    font-size: 1.5rem;
  }
  figcaption {
    font-size: 0.95rem;
  }
}
</style> 