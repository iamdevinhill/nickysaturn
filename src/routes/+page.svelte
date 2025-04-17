<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { supabase } from '$lib/supabaseClient';
    import artistImage1 from '$lib/images/time.jpg';
    import artistImage2 from '$lib/images/soak.jpg';
    import artistImage3 from '$lib/images/meant.jpg';
    import artistImage4 from '$lib/images/divine.jpg';
  
    const images = [artistImage1, artistImage2, artistImage3, artistImage4];
  
    let currentImageIndex = 0;
    let opacity = 1;
    let showPopup = false;
  
    let fullName = '';
    let email = '';
    let phone = '';
    let message = '';
  
    function startSlideshow() {
      setInterval(() => {
        opacity = 0;
        setTimeout(() => {
          currentImageIndex = (currentImageIndex + 1) % images.length;
          opacity = 1;
        }, 1000);
      }, 5000);
    }
  
    function closePopup() {
      showPopup = false;
    }
  
    const handleSubmit = async () => {
  message = '';

  const nameValid = fullName.trim().split(' ').length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const cleanedPhone = phone.replace(/\D/g, '');
    const phoneValid = /^\d{10}$/.test(cleanedPhone) && !/(.)\1{9}/.test(cleanedPhone);

  if (!nameValid) {
    message = 'Please enter your full name (first and last).';
    return;
  }
  if (!emailValid) {
    message = 'Please enter a valid email address.';
    return;
  }
  if (!phoneValid) {
    message = 'Phone number must be 10 digits.';
    return;
  }

  try {
    const body = {
      full_name: fullName,
      email_address: email,
      phone_number: phone
    };

    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData?.session?.access_token;

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: JSON.stringify(body)
    });

    const result = await res.json();

    if (!res.ok) {
      message = `Error: ${result.error || 'Unknown error'}`;
    } else {
      message = 'Successfully submitted!';
      fullName = email = phone = '';
    }
  } catch (err) {
    message = `Unexpected error: ${err.message}`;
  }
};

  
    onMount(async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData?.session) {
        await supabase.auth.signInAnonymously();
      }
      startSlideshow();
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
  
  {#if showPopup}
    <div class="popup-overlay" transition:fade={{ duration: 200 }}>
      <div class="popup-container">
        <button class="close-button" on:click={closePopup}>×</button>
        <div class="popup-content">
          <h2><center>Sign up for Nicky Saturn's mailing list for updates on new music, shows, and more.</center></h2>
          <form on:submit|preventDefault={handleSubmit} class="form-group">
            <input class="form-input" type="text" bind:value={fullName} placeholder="Full Name" />
            <input class="form-input" type="email" bind:value={email} placeholder="Email Address" />
            <input class="form-input" type="tel" bind:value={phone} placeholder="10 Digit Phone Number (No dashes)" />
            <button class="form-button" type="submit">Submit</button>
          </form>
          {#if message}
            <p class="mt-4 text-center" style="color:black">{message}</p>
          {/if}
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
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-theme-1);
  color: white;
  border-radius: 0.75rem;
  font-weight: bold;
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(26, 123, 161, 0.2);
  text-decoration: none;
}

.cta-button:hover {
  background-color: #1a7ba1;
  color: white;
}
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
      padding: 2rem 2rem 2rem;
      overflow-y: auto;
      flex: 1;
    }
    .popup-content h2 {
      color: var(--color-theme-1);
      margin-top: 0;
      font-size: 1.8rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
      padding-bottom: 1rem;
    }
    .form-input {
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      background-color: white;
      color: black;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .form-input:focus {
      outline: none;
      border-color: var(--color-theme-1);
      box-shadow: 0 0 0 3px rgba(26, 123, 161, 0.3);
    }
    .form-button {
      width: 100%;
      padding: 0.75rem;
      background-color: var(--color-theme-1);
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }
    .form-button:hover {
      background-color: #1a7ba1;
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
        padding: 1.5rem 1.5rem 1.5rem;
      }
      .form-group {
        gap: 0.75rem;
        padding-bottom: 0.75rem;
      }
    }
  </style>
  