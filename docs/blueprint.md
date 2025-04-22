# **App Name**: Galia's First Adventure

## Core Features:

- Loading Animation: Loading screen with a pulsing daisy flower, confetti, and loading progress indicator to smoothly transition to the intro page.
- Interactive Gallery: Interactive image gallery with smooth transitions, captions, and navigation dots to showcase memorable moments.
- Interactive Map: Interactive map powered by Google Maps to show the party location, complete with zoom and pan capabilities.
- Countdown Timer: Countdown timer displaying the remaining time until the event, updating in real-time to build anticipation.
- Thank You Generator: AI-powered tool that generates personalized thank you messages based on RSVP responses, with customizable templates for a personal touch.

## Style Guidelines:

- Primary color: Soft green (#A7D1AB) for a gender-neutral and natural feel.
- Secondary color: Warm yellow (#FFEB3B) to add a cheerful and inviting tone.
- Accent color: Teal (#008080) for interactive elements and call-to-actions.
- Clean, rounded sans-serif fonts for easy readability on all devices.
- Simple, playful icons related to birthday themes (cakes, balloons, presents, flowers).
- Clean, responsive design that adapts beautifully to different screen sizes.
- Subtle, smooth animations for transitions and interactive elements.

## Original User Request:
# Galia's First Birthday Digital Invitation App

Create a beautiful, interactive web application for a 1-year-old's birthday invitation. The app should be called "Galia's First Adventure" and should follow a three-section structure with smooth transitions between each part.

## Project Structure
Organize the project using the following enhanced directory structure to maintain clean separation of concerns:

```
/src
  /ai
    /flows
      thank-you-message.ts
    ai-instance.ts
    dev.ts
  /app
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
  /components
    /ui           # Keep existing UI components
    /invitation   # New folder for invitation-specific components
      LoadingScreen.tsx
      IntroSection.tsx
      Gallery.tsx
      HeroSection.tsx
      CountdownTimer.tsx
      DetailsSection.tsx
      RsvpForm.tsx
      ThankYouGenerator.tsx
      MapLocation.tsx
    /animations   # New folder for custom animations
      DaisyFlower.tsx
      Confetti.tsx
      FloatingElements.tsx
    icons.ts
    theme-provider.tsx
  /hooks
    use-mobile.tsx
    use-toast.ts
    use-countdown.tsx    # New hook for countdown timer
    use-gallery.tsx      # New hook for gallery navigation
  /lib
    utils.ts
    constants.ts         # New file for app constants
    theme.ts            # New file for theme definitions
  /services
    map.ts
  /styles              # New folder for component-specific styles
    loading-screen.css
    intro-section.css
    gallery.css
    invitation.css
```

## Section 1: Loading Screen
Create an initial loading screen that displays while the application assets are loading. This screen should:
- Feature a centered daisy flower SVG icon that gently pulses or spins
- Include animated background elements like falling confetti and floating small flowers
- Show a subtle loading progress indicator (either a bar or circular indicator)
- Automatically transition to the introduction page once loading is complete
- Use soft animations that match the overall aesthetic of the site

Implement this as a dedicated `LoadingScreen` component in the `/components/invitation` directory, with the daisy flower SVG and animations defined in the `/components/animations` directory.

## Section 2: Introduction Page
After the loading screen, display an introduction page that welcomes visitors and introduces the birthday girl. This page should:
- Have a centered layout with a maximum width of 750px
- Include a header section with the text "¡Celebra conmigo!" (Celebrate with me!)
- Feature a prominent badge displaying "1 añito" (1 year old)
- Show a description text saying "Galia está cumpliendo su primer añito y quiere compartir este día tan especial contigo" (Galia is turning one year old and wants to share this special day with you)
- Include an interactive image gallery component that:
   * Shows one main image at a time
   * Has previous/next navigation buttons with chevron icons
   * Displays image captions below each photo
   * Contains navigation dots at the bottom to indicate position and allow direct image selection
   * Features smooth transition animations between images
- Include a prominent button at the bottom to proceed to the main invitation

Implement this as a combination of the `IntroSection` and `Gallery` components, with the gallery logic abstracted into a custom `use-gallery` hook for better reusability.

## Section 3: Main Invitation
Once the user clicks through from the introduction, show the main invitation page with all the essential information. This section should include:
- Complete invitation details (date, time, location, theme)
- An interactive map showing the party location
- An RSVP form for guests to confirm attendance
- An AI-powered thank you message generator that creates personalized messages based on RSVP responses

Break this section down into several components:
- `HeroSection`: The main banner with the invitation title and key information
- `CountdownTimer`: A countdown to the event date
- `DetailsSection`: Information about the birthday event
- `MapLocation`: The interactive map component
- `RsvpForm`: The form for guests to RSVP
- `ThankYouGenerator`: The AI-powered message generator

## Layout Structure
Create a main layout in `/app/layout.tsx` that:
- Sets up the theme provider
- Includes common elements like background and font settings
- Handles responsive behavior

In the main page component (`/app/page.tsx`), implement a state-based navigation system that:
- Shows the `LoadingScreen` component initially
- Transitions to the `IntroSection` after loading
- Transitions to the invitation components when the user clicks to proceed

## Design and Style Guidelines
Create the application with the following design elements:
- Primary color: Soft green (#A7D1AB) for a gender-neutral and natural feel
- Secondary color: Warm yellow (#FFEB3B) to add a cheerful and inviting tone
- Accent color: Teal (#008080) for interactive elements and call-to-actions
- Typography: Clean, rounded sans-serif fonts for easy readability on all devices
- Icons: Simple, playful icons related to birthday themes (cakes, balloons, presents, flowers)
- Layout: Clean, responsive design that adapts beautifully to different screen sizes
- Animations: Subtle, smooth animations for transitions and interactive elements

Define these design tokens in the `/lib/theme.ts` file for consistent usage throughout the application.

## Technical Implementation Details
When building this application:
- Implement smooth fade and slide transitions between the three main sections
- Create a custom SVG daisy flower for the loading screen that animates gracefully in the `DaisyFlower` component
- Build the gallery component with proper image optimization and preloading using the custom `use-gallery` hook
- Ensure all animations are performance-optimized and don't cause layout shifts
- Make the design fully responsive, with special attention to mobile experience using the existing `use-mobile` hook
- Implement proper accessibility features throughout the application
- Ensure the RSVP form has proper validation and submission handling
- Create the thank you message generator with customizable templates based on RSVP responses, using the AI flow defined in `/ai/flows/thank-you-message.ts`

## Component-Specific Implementation Details

### LoadingScreen Component
Create a loading screen component that:
- Renders a custom SVG daisy flower that animates using CSS keyframes or framer-motion
- Implements confetti and floating flower animations in the background
- Shows a progress indicator that updates as assets load
- Has a smooth fade-out transition when loading completes

### IntroSection Component
Create an introduction component that:
- Has a centered, responsive layout
- Features a celebratory heading and badge
- Displays a welcoming description
- Integrates with the Gallery component
- Includes a prominent call-to-action button to proceed to the invitation

### Gallery Component
Create a gallery component that:
- Manages a collection of images with captions
- Shows one image at a time with smooth transitions
- Provides navigation controls (previous/next buttons)
- Shows indicator dots for direct navigation
- Handles touch swipe gestures on mobile devices
- Lazy loads images for better performance

### HeroSection Component
Create a hero section component that:
- Shows a celebratory banner for the birthday
- Displays the child's name prominently
- Features decorative birthday-themed elements

### CountdownTimer Component
Create a countdown component that:
- Shows days, hours, minutes, and seconds until the event
- Updates in real-time
- Has a visually appealing design that matches the theme
- Uses the custom `use-countdown` hook for logic

### DetailsSection Component
Create a details section component that:
- Shows all event information (date, time, location, theme)
- Has a visually appealing layout with appropriate icons
- Is clearly readable on all devices

### RsvpForm Component
Create an RSVP form component that:
- Collects guest information
- Has proper validation
- Provides clear feedback on submission
- Integrates with the thank you message generator

### MapLocation Component
Create a map component that:
- Shows the event location
- Allows zooming and panning
- Provides clear directions or address information
- Uses the existing map service from `/services/map.ts`

### ThankYouGenerator Component
Create a thank you generator component that:
- Takes input from the RSVP form
- Generates personalized thank you messages using AI
- Allows customization of the messages
- Provides a way to copy or share the messages

The application should feel cohesive, with consistent styling throughout all three sections while maintaining optimal performance across devices. The experience should be joyful and celebratory, appropriate for a first birthday invitation.
  