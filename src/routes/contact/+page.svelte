<script>
	import { supabase } from '$lib/supabaseClient';
	import { fade } from 'svelte/transition';
  
	let fullName = '';
	let email = '';
	let phone = '';
	let message = '';
	let messageType = 'error'; // 'success' or 'error'
	let isSubmitting = false;
	let submitted = false;
  
	// Format phone number as user types
	$: formattedPhone = formatPhoneNumber(phone);
  
	function formatPhoneNumber(value) {
	  // Strip non-digits
	  const digits = value.replace(/\D/g, '');
	  
	  // Format as (XXX) XXX-XXXX
	  if (digits.length <= 3) {
		return digits;
	  } else if (digits.length <= 6) {
		return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
	  } else {
		return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
	  }
	}
  
	function validateForm() {
	  // Full name validation - must have at least first and last name
	  const nameValid = fullName.trim().split(/\s+/).filter(part => part.length > 0).length >= 2;
	  if (!nameValid) {
		message = 'Please enter your full name (first and last).';
		return false;
	  }
	  
	  // Email validation with more comprehensive regex
	  const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
	  if (!emailValid) {
		message = 'Please enter a valid email address.';
		return false;
	  }
	  
	  // Phone validation - must be exactly 10 digits after stripping non-digits
	  const cleanedPhone = phone.replace(/\D/g, '');
	  const phoneValid = cleanedPhone.length === 10 && !/(.)\1{9}/.test(cleanedPhone);
	  if (!phoneValid) {
		message = 'Please enter a valid 10-digit phone number.';
		return false;
	  }
	  
	  return true;
	}
  
	const handleSubmit = async () => {
	  // Reset message
	  message = '';
	  isSubmitting = true;
	  
	  if (!validateForm()) {
		messageType = 'error';
		isSubmitting = false;
		return;
	  }
  
	  try {
		const body = {
		  full_name: fullName.trim(),
		  email_address: email.trim(),
		  phone_number: phone.replace(/\D/g, '') // Store only digits in database
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
		  message = `Error: ${result.error || 'Something went wrong. Please try again.'}`;
		  messageType = 'error';
		} else {
		  message = 'Thanks for signing up! You\'ll receive updates soon.';
		  messageType = 'success';
		  fullName = email = phone = '';
		  submitted = true;
		  setTimeout(() => {
			submitted = false;
			message = '';
		  }, 5000);
		}
	  } catch (err) {
		message = `Unexpected error: ${err.message}`;
		messageType = 'error';
	  } finally {
		isSubmitting = false;
	  }
	};
  
	function handlePhoneInput(e) {
	  // Update the phone variable with the formatted version
	  phone = formatPhoneNumber(e.target.value);
	}
  </script>
  
  <svelte:head>
	<title>Contact - Nicky Saturn</title>
	<meta name="description" content="Get in touch with Nicky Saturn for bookings, collaborations, or join the mailing list for updates." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </svelte:head>
  
  <div class="container">
	<h1>Contact</h1>
  
	<div class="contact-content">
	  <div class="contact-info">
		<div class="card get-in-touch">
		  <h2>Get in Touch</h2>
		  <p>For booking inquiries and other business opportunities:</p>
		  <a href="mailto:nickysaturnmusic@gmail.com" class="email-button">
			<span class="icon">✉️</span> Email Now
		  </a>
		</div>
  
		<div class="card mailing-list">
		  <h2>Join the Mailing List</h2>
		  <p>Sign up to receive updates on new music, upcoming shows, and exclusive content.</p>
  
		  {#if !submitted}
			<form on:submit|preventDefault={handleSubmit} class="contact-form">
			  <div class="input-group">
				<label for="fullName">Full Name</label>
				<input 
				  id="fullName"
				  class="form-input" 
				  type="text" 
				  bind:value={fullName} 
				  placeholder="First and Last Name"
				  required 
				/>
			  </div>
			  
			  <div class="input-group">
				<label for="email">Email Address</label>
				<input 
				  id="email"
				  class="form-input" 
				  type="email" 
				  bind:value={email} 
				  placeholder="your@email.com"
				  required 
				/>
			  </div>
			  
			  <div class="input-group">
				<label for="phone">Phone Number</label>
				<input 
				  id="phone"
				  class="form-input" 
				  type="tel" 
				  value={phone}
				  on:input={handlePhoneInput}
				  placeholder="10 Digit Phone Number (No dashes)"
				  required 
				/>
			  </div>
			  
			  <button class="form-button" type="submit" disabled={isSubmitting}>
				{#if isSubmitting}
				  Submitting...
				{:else}
				  Join Now
				{/if}
			  </button>
			</form>
		  {:else}
			<div class="success-message" transition:fade>
			  <div class="success-icon">✓</div>
			  <p>You've successfully joined the mailing list!</p>
			</div>
		  {/if}
  
		  {#if message && !submitted}
			<div class="feedback {messageType}" transition:fade>
			  <p>{message}</p>
			</div>
		  {/if}
		</div>
	  </div>
	</div>
  </div>
  
  <style>
	.container {
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 2rem 1rem;
	}
  
	.page-title {
	  font-size: 2.5rem;
	  margin-bottom: 2rem;
	  text-align: center;
	  color: var(--color-theme-1);
	}
  
	.contact-content {
	  display: flex;
	  justify-content: center;
	}
  
	.contact-info {
	  display: flex;
	  flex-direction: column;
	  gap: 2rem;
	  width: 100%;
	  max-width: 800px;
	}
  
	.card {
  background-color: var(--color-bg-1);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

  
	h2 {
	  font-size: 1.75rem;
	  margin-bottom: 1rem;
	  color: var(--color-theme-1);
	}
  
	.get-in-touch p {
	  margin-bottom: 1.5rem;
	  font-size: 1.1rem;
	}
  
	.email-button {
  display: inline-flex;
  align-items: center;
  padding: 0.95rem 1.5rem;
  background-color: var(--color-theme-1);
  color: white;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: bold;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(26, 123, 161, 0.2);
}
  
	.email-button:hover {
		background-color: #1a7ba1;
		color: white;
	}
  
	.icon {
	  margin-right: 0.5rem;
	  font-size: 1.2rem;
	}
  
	.contact-form {
	  display: flex;
	  flex-direction: column;
	  gap: 1.25rem;
	  margin-top: 1.5rem;
	}
  
	.input-group {
	  display: flex;
	  flex-direction: column;
	  gap: 0.375rem;
	}
  
	.input-group label {
	  font-weight: 500;
	  font-size: 0.95rem;
	  color: #4a5568;
	  margin-left: 0.5rem;
	}
  
	.form-input {
	  padding: 0.875rem 1rem;
	  border: 2px solid #e2e8f0;
	  border-radius: 0.75rem;
	  background-color: white;
	  color: #2d3748;
	  font-size: 1rem;
	  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	  transition: all 0.2s ease;
	}
  
	.form-input:hover {
	  border-color: #cbd5e0;
	}
  
	.form-input:focus {
	  outline: none;
	  border-color: var(--color-theme-1);
	  box-shadow: 0 0 0 3px rgba(26, 123, 161, 0.15);
	}
  
	.form-button {
	  margin-top: 0.5rem;
	  padding: 0.95rem;
	  background-color: var(--color-theme-1);
	  color: white;
	  font-weight: bold;
	  border: none;
	  border-radius: 0.75rem;
	  font-size: 1.05rem;
	  cursor: pointer;
	  transition: all 0.3s ease;
	  box-shadow: 0 2px 6px rgba(26, 123, 161, 0.2);
	}
  
	.form-button:hover:not(:disabled) {
		background-color: #1a7ba1;
		color: white;
	}
  
	.form-button:active:not(:disabled) {
	  transform: translateY(0);
	}
  
	.form-button:disabled {
	  background-color: #90cdf4;
	  cursor: not-allowed;
	}
  
	.feedback {
	  margin-top: 1.25rem;
	  text-align: center;
	  font-weight: 500;
	  padding: 1rem;
	  border-radius: 0.75rem;
	  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
	}
  
	.error {
	  background-color: #fff5f5;
	  color: #c53030;
	  border: 1px solid #feb2b2;
	}
  
	.success {
	  background-color: #f0fff4;
	  color: #2f855a;
	  border: 1px solid #c6f6d5;
	}
  
	.success-message {
	  text-align: center;
	  padding: 2rem 1rem;
	}
  
	.success-icon {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  width: 64px;
	  height: 64px;
	  background-color: #48bb78;
	  color: white;
	  font-size: 2rem;
	  border-radius: 50%;
	  margin: 0 auto 1.5rem;
	}
  
	.success-message p {
	  font-size: 1.25rem;
	  font-weight: 600;
	  color: #2f855a;
	}
  
	@media (max-width: 640px) {
	  .page-title {
		font-size: 2rem;
	  }
  
	  .card {
		padding: 1.5rem;
	  }
  
	  h2 {
		font-size: 1.5rem;
	  }
	}
  </style>