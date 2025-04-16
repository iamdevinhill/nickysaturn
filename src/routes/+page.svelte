<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import artistImage1 from '$lib/images/time.jpg';
    import artistImage2 from '$lib/images/soak.jpg';
    import artistImage3 from '$lib/images/meant.jpg';
    import artistImage4 from '$lib/images/divine.jpg';

    // Array of images for the slideshow
    const images = [artistImage1, artistImage2, artistImage3, artistImage4];

    // Variables to track the current image
    let currentImageIndex = 0;
    let opacity = 1;
    
    // Pop-up variables
    let showPopup = false;
    
    // Function to handle the slideshow
    function startSlideshow() {
        setInterval(() => {
            // Start fade out
            opacity = 0;
            
            // After fade out, change image and fade in
            setTimeout(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                opacity = 1;
            }, 1000); // Match the CSS transition duration
        }, 5000); // Change image every 5 seconds
    }
    
    // Function to close the popup
    function closePopup() {
        showPopup = false;
    }

    onMount(() => {
        startSlideshow();
        
        // Show popup after a delay (1 second)
        setTimeout(() => {
            showPopup = true;
        }, 1000);
    });
</script>

<svelte:head>
    <title>Nicky Saturn - Official Website</title>
    <meta name="description" content="Official website of Nicky Saturn" />
</svelte:head>

<section class="hero">
    <div
        class="background"
        style={`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]}); opacity: ${opacity}`}
    ></div>

    <div class="hero-content">
        <h1>Nicky Saturn</h1>
        <p class="tagline">New Single Out Now</p>
        <a href="/music" class="cta-button">Listen Here</a>
    </div>
</section>

<!-- Pop-up Google Form -->
{#if showPopup}
    <div class="popup-overlay" transition:fade={{ duration: 200 }}>
        <div class="popup-container">
            <button class="close-button" on:click={closePopup}>×</button>
            
            <div class="popup-content">
                <h2><center>Sign up for Nicky Saturn's mailing list for updates on new music, shows, and more.</center></h2>
                
                <div class="google-form-container">
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeokl89e_3CQmiqdyBUJb3Y9du7KDKX5Ki4TOrNiKYve7Stxg/viewform?embedded=true" 
                        width="100%" 
                        height="500" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0"
                        title="Contact Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .hero {
        height: calc(100vh - 5rem);
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: opacity 1s ease-in-out;
    }

    .hero-content {
        position: relative;
        z-index: 3;
        padding: 2rem;
    }

    h1 {
        font-size: 4rem;
        margin: 0;
        letter-spacing: 0.2em;
    }

    .tagline {
        font-size: 1.5rem;
        margin: 1rem 0 2rem;
    }

    .cta-button {
        display: inline-block;
        padding: 1rem 2rem;
        background-color: var(--color-theme-1);
        color: white;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: background-color 0.2s;
    }

    .cta-button:hover {
        background-color: #1a7ba1;
        color: white;
    }
    
    /* Pop-up styles */
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }
    
    .popup-container {
        background-color: white;
        border-radius: 8px;
        width: 90%;
        max-width: 650px;
        position: relative;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    
    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        z-index: 2;
    }
    
    .close-button:hover {
        color: #000;
    }
    
    .popup-content {
        padding: 2rem 2rem 0;
        overflow-y: auto;
        flex: 1;
    }
    
    .popup-content h2 {
        color: var(--color-theme-1);
        margin-top: 0;
        font-size: 1.8rem;
    }
    
    .google-form-container {
        margin-top: 1rem;
        overflow: hidden;
    }
    
    /* Ensure the iframe scrolls properly within the popup */
    .google-form-container iframe {
        display: block;
        overflow: hidden;
    }
    
    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        .tagline {
            font-size: 1.2rem;
        }

        .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
        }
        
        .popup-container {
            width: 95%;
            max-height: 70vh;
        }
        
        .popup-content {
            padding: 1.5rem 1.5rem 0;
        }
    }
</style>