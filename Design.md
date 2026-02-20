# Velvet Rose - Flower Shop Website Design

## Overview
- **Motion Style**: "Botanical Elegance" - Organic, fluid movements mimicking natural growth and bloom
- **Animation Intensity**: Ultra-Dynamic
- **Technology Stack**: GSAP (ScrollTrigger, Flip), WebGL (for subtle petal distortions), CSS Variables for reactive layouts

## Brand Foundation
- **Colors**:
  - Primary: #f76b6c (Coral Red)
  - Secondary: #ffb4b4 (Soft Pink)
  - Light Pink: #ffe9e9 (Pale Blush)
  - Background: #fff9f9 (Cream White)
  - Text: #352e2d (Dark Brown)
  - Text Dark: #463d3b (Rich Brown)
  - Text Light: #9a8888 (Muted Taupe)
  - Border: #f1dfdf (Light Rose)
  - White: #ffffff
- **Typography**:
  - Display: "Ovo" (serif, elegant)
  - Body: "Open Sans" (sans-serif, clean)
- **Core Message**: Timeless romance meets modern botanical artistry
- **Font Family**: "Ovo, sans-serif" (Display), "Open Sans, sans-serif" (Body)

## Global Motion System

### Animation Timing
- **Easing Library**:
  - `bloom`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (Elastic, blooming feel)
  - `drift`: `cubic-bezier(0.4, 0, 0.2, 1)` (Smooth, floating feel)
  - `sharp`: `cubic-bezier(0.16, 1, 0.3, 1)` (Quick, precise)
- **Duration Scale**: Base unit 0.6s; Entrances 0.8s; Hovers 0.3s
- **Stagger Patterns**: 0.1s delay per item (flowers, links)

### Continuous Effects
- **Living Atmosphere**: Subtle "pollen drift" particle system in negative space (canvas-based, very low opacity).
- **Organic Breathing**: Key images have a microscopic scale pulse (1.0 to 1.02) over 6s.
- **Wind Sway**: Decorative SVG lines and text gently skew/rotate (±1deg) in a loop.

### Scroll Engine
- **Parallax Layers**:
  - Background Textures: 10% speed
  - Images: 15% speed (slower than scroll)
  - Floating Elements: 120% speed (faster than scroll)
- **Scrub Animations**: Text reveals tied directly to scroll progress.
- **Pinning**: "Shop by Category" section pins while categories scroll horizontally.

## Section 1: Hero

### Layout
**"The Romantic Gateway"**
A revolutionary asymmetrical composition where the hero image acts as a portal. The layout breaks the container, with the image floating freely on the right, while typography weaves organically around it on the left.

#### Spatial Composition
- **Z-Index Strategy**: Text Layer (2) > Image Layer (1) > Background Pattern (0).
- **Overlap**: The main headline "Velvet Rose" overlaps the edge of the hero image by 20%.
- **Whitespace**: Heavy use of negative space on the left to balance the weight of the floral image.

### Content
- **Headline**: "Velvet Rose"
- **Subtext**: "Crafting moments of botanical elegance for life's most precious occasions."
- **CTA**: "Explore Collection"

### Images
**Hero Image**
- **Resolution:** 1920x1080 pixels
- **Aspect Ratio:** 16:9
- **Transparent Background:** No
- **Visual Style:** Soft, romantic lifestyle photography with natural lighting
- **Subject:** Floral bouquet arrangement with pink and peach roses, white flowers, green foliage
- **Color Palette:** Blush pink, coral, cream white, soft green
- **Generation Prompt:** "A high-resolution, close-up photograph of a lush, hand-tied bouquet of mixed flowers. The bouquet features soft pink and peach roses, white ranunculus or anemones, and green foliage. The flowers are wrapped in natural kraft paper, with the edges of the bouquet softly blurred to create depth. The lighting is soft and natural, with a gentle, airy, and romantic mood. The color palette is pastel and muted, with no harsh shadows. The background is a solid, very pale pink or off-white, with no visible patterns or textures. The overall style is elegant, dreamy, and ideal for a florist or wedding website."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Hero Image | Mask Reveal | Clip-path: Circle(0% at center) → Circle(150%) | 1.2s | 0s | bloom |
| Headline | Split-Char Rise | Y: 100% → 0%, Opacity: 0 → 1 | 0.8s | 0.4s | sharp |
| Subtext | Fade Slide | X: -20px → 0, Opacity: 0 → 1 | 0.6s | 0.8s | drift |
| CTA | Scale Pop | Scale: 0 → 1 | 0.5s | 1.0s | bloom |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Hero Image | Parallax Y | Top | Bottom | Y: 0 → 100px |
| Scroll | Headline | Parallax Y + Blur | Top | 50% | Y: 0 → -50px, Blur: 0 → 5px |

#### Continuous Animations
- **Image Breathe**: Hero image scales 1.0 → 1.02 → 1.0 over 6s.
- **Floating Petals**: Subtle SVG petal shapes drift across the background layer (z-index -1).

#### Interaction Effects
- **Magnetic Image**: Hero image slightly tilts towards cursor (max 5deg) via CSS transform.
- **Text Hover**: Headline letters scatter slightly (random x/y 2px) on hover.

### Advanced Effects

#### Shader Effects
- **Liquid Displacement**: On interaction, the hero image has a subtle WebGL fluid distortion (strength 0.2) that ripples like water on a pond.

## Section 2: About Us

### Layout
**"The Organic Narrative"**
Text and image intertwine in a broken grid. The image is positioned centrally but offset to the left, while text blocks float on the right, overlapping the image edge to create depth.

#### Spatial Composition
- **Offset Grid**: Image at X: 10%, Text at X: 55% (overlapping image).
- **Background**: Large, faint "Rose" watermark text (opacity 0.05) scrolling horizontally behind the content.

### Content
- **Title**: "Our Story"
- **Body**: "Founded with a passion for preserving the timeless art of floristry..."
- **CTA**: "Learn More About Us"

### Images
**About Us Image**
- **Resolution:** 1920x1080 pixels
- **Aspect Ratio:** 16:9
- **Transparent Background:** No
- **Visual Style:** Soft, romantic lifestyle photography with natural lighting
- **Subject:** Hand holding bouquet of soft pastel roses and greenery
- **Color Palette:** Blush pink, soft green, cream, gentle peach
- **Generation Prompt:** "A high-resolution, lifestyle photograph of a person's hand holding a bouquet of soft pastel roses and greenery. The bouquet is centered in the frame, with the hand gently gripping the stems, which are wrapped in natural kraft paper and soft pink fabric. The flowers are in shades of blush pink, cream, and gentle peach, with lush green leaves interspersed. The lighting is soft and natural, creating a romantic, airy, and elegant mood. The background is a solid, pale pink color with no texture or pattern, ensuring the focus remains on the bouquet. The overall style is feminine, dreamy, and modern, suitable for a florist or wedding website."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Image | Slide Reveal | Clip-path: Inset(0 100% 0 0) → Inset(0) | 1.0s | 0s | sharp |
| Title | Staggered Fade | Y: 30px → 0, Opacity: 0 → 1 | 0.6s | 0.3s | drift |
| Body Text | Line Reveal | Opacity: 0 → 1 (per line) | 0.4s | 0.5s | linear |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Image | Scale | Enter | Exit | Scale: 1.1 → 1.0 |
| Scroll | Text Block | Parallax Y | Enter | Exit | Y: 50px → -50px |

## Section 3: Shop by Category

### Layout
**"The Kinetic Garden"**
This section transforms the standard grid into a horizontal discovery experience. The section pins while the user scrolls, moving the categories horizontally.

#### Spatial Composition
- **Sticky Container**: Section height is 400vh (scroll distance).
- **Track**: Categories arranged horizontally off-screen.
- **Decor**: SVG vines connect the cards visually.

### Content
- **Title**: "Shop by Category"
- **Categories**:
  1. "Roses" (Classic Red)
  2. "Peonies" (Blush Pink)
  3. "Tulips" (Sunset Orange)
  4. "Ranunculus" (Soft White)

### Images
**Category Image 1 - Roses**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Subject**: Dense cluster of vibrant red roses
- **Generation Prompt:** "A high-resolution, close-up photograph of a dense cluster of vibrant red roses. The composition is tight, filling the frame with lush, overlapping petals in various stages of bloom. The lighting is soft and even, highlighting the rich, velvety texture of the petals. The color palette is dominated by deep, saturated reds with subtle variations and hints of dark pink. The background is a solid, pale pink color with no texture or pattern, creating a clean and romantic atmosphere. The overall mood is elegant, passionate, and timeless, suitable for a florist or wedding website."

**Category Image 2 - Peonies**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Subject**: Large, lush pink peonies
- **Generation Prompt:** "A high-resolution, close-up photograph of a lush bouquet of large, soft pink peonies. The flowers are densely packed, with petals in various stages of bloom, from tightly closed buds to fully open blooms. The lighting is soft and natural, creating a gentle, romantic mood. The color palette features shades of blush pink, with subtle gradients and natural variations. The background is a solid, very pale pink or off-white, with no texture or pattern, ensuring the focus is on the flowers. The overall style is elegant, dreamy, and ideal for a florist or wedding website."

**Category Image 3 - Tulips**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Subject**: Bouquet of orange tulips
- **Generation Prompt:** "A high-resolution, close-up photograph of a bouquet of vibrant orange tulips. The flowers are arranged in a tight cluster, with the focus on the front blooms creating a shallow depth of field. The lighting is soft and natural, highlighting the smooth, satiny texture of the petals. The color palette is warm and vivid, featuring shades of orange, coral, and peach. The background is a solid, pale pink or off-white, with no texture or pattern, creating a clean and modern look. The overall mood is cheerful, elegant, and inviting, suitable for a florist or lifestyle brand."

**Category Image 4 - Ranunculus**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Subject**: Bouquet of white ranunculus flowers
- **Generation Prompt:** "A high-resolution, close-up photograph of a bouquet of white ranunculus flowers. The flowers are lush and full, with layers of delicate, ruffled petals. The composition is tight, with the blooms filling the frame. The lighting is soft and natural, creating a gentle, romantic mood. The color palette is predominantly white and cream, with subtle hints of green from the foliage. The background is a solid, very pale pink or off-white, with no texture or pattern, ensuring the focus is on the flowers. The overall style is elegant, timeless, and ideal for a wedding or florist website."

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Category Track | Horizontal Scroll | Top | Bottom | X: 0 → -300% |
| Scroll | Card Images | Skew Velocity | Scroll | Stop | SkewX: ±5deg (based on speed) |

#### Interaction Effects
- **Card Hover**: Image scales 1.1x, Title follows cursor position within the card (magnetic), Description slides up from bottom.

## Section 4: Our Products

### Layout
**"The Floating Market"**
A dynamic masonry grid where items don't just sit; they float. Grid gaps breathe.

#### Spatial Composition
- **Masonry**: Staggered columns.
- **Background**: Very faint dot grid pattern (1px dots, #f1dfdf) moving slowly.

### Content
- **Title**: "Our Products"
- **Products**: 8 items (Bouquets, Arrangements, etc.)

### Images
**Product Image 1 - White Rose Bouquet**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Subject**: Bouquet of white roses wrapped in white paper
- **Generation Prompt:** "A high-resolution, close-up photograph of a bouquet of pure white roses, wrapped in white paper and tied with a natural raffia bow. The bouquet is centered in the frame, with the focus on the lush, layered petals of the roses. The lighting is soft and natural, creating a gentle, romantic mood. The color palette is predominantly white and cream, with subtle green accents from the foliage. The background is a solid, very pale pink or off-white, with no texture or pattern, ensuring the focus is on the bouquet. The overall style is elegant, timeless, and ideal for a wedding or florist website."

**Product Image 2 - Pink Peony Bouquet**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Subject**: Bouquet of pink peonies
- **Generation Prompt:** "A high-resolution, close-up photograph of a bouquet of soft pink peonies, wrapped in natural kraft paper and tied with a delicate ribbon. The flowers are lush and full, with layers of ruffled petals. The composition is centered, with the focus on the intricate details of the blooms. The lighting is soft and natural, creating a dreamy, romantic mood. The color palette features shades of blush pink, cream, and soft green. The background is a solid, very pale pink or off-white, with no texture or pattern, ensuring the focus is on the bouquet. The overall style is elegant, feminine, and ideal for a florist or wedding website."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Product Card | 3D Flip Up | RotateX: 20deg → 0, Opacity: 0 → 1 | 0.8s | Stagger 0.1s | bloom |

#### Interaction Effects
- **Hover Reveal**: On hover, the image zooms in (scale 1.1), the "Add to Cart" button expands from a dot to a pill shape, and the price floats up.
- **Cursor**: Custom cursor becomes a "View" circle when hovering products.

## Section 5: Features

### Layout
**"The Floating Pillars"**
Three distinct zones that float in space. The central image acts as an anchor, while text blocks orbit it.

### Content
- **Feature 1**: "Handcrafted Bouquets"
- **Feature 2**: "Freshness Guaranteed"
- **Feature 3**: "Same-Day Delivery"

### Images
**Feature Image - Centerpiece Bouquet**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Subject**: Elegant centerpiece bouquet with pink and peach roses
- **Generation Prompt:** "A high-resolution, close-up photograph of an elegant centerpiece bouquet featuring soft pink and peach roses, white ranunculus, and lush green foliage. The bouquet is arranged in a natural, organic style, with the flowers cascading gracefully. The lighting is soft and natural, creating a romantic, airy mood. The color palette is pastel and muted, with blush, peach, cream, and soft green tones. The background is a solid, very pale pink or off-white, with no texture or pattern, ensuring the focus is on the bouquet. The overall style is elegant, dreamy, and ideal for a wedding or florist website."

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Feature Icons | Draw Stroke | Enter | Center | Stroke-dashoffset: 100 → 0 |
| Scroll | Central Image | Rotate | Enter | Exit | Rotate: -5deg → 5deg |

## Section 6: Testimonials

### Layout
**"The Conversational Flow"**
A horizontal stream of testimonial cards that flows gently.

### Content
- **Title**: "What Our Customers Say"
- **Testimonials**: 3 reviews with customer names and photos.

### Images
**Testimonial Customer Image 1**
- **Resolution:** 200x200 pixels
- **Aspect Ratio:** 1:1
- **Transparent Background:** No
- **Subject**: Portrait of young woman with curly hair
- **Generation Prompt:** "A high-resolution, professional portrait of a young woman with curly hair, smiling warmly. She is wearing a light blue dress and is posed against a soft, neutral background. The lighting is soft and natural, creating a friendly and approachable mood. The color palette is light and airy, with soft pastels and natural tones. The overall style is modern, clean, and ideal for a customer testimonial or profile photo."

### Motion Choreography
- **Carousel**: Infinite horizontal loop (marquee style). Speed increases on scroll down, slows on scroll up.
- **Focus**: Center item is 100% opacity, side items 60% opacity.

## Section 7: CTA Section

### Layout
**"The Immersive Bloom"**
A full-screen parallax window. The text is centered but uses a "difference" blend mode to remain readable over the image.

### Content
- **Title**: "Bring Beauty Home"
- **Subtitle**: "Order today and let the magic unfold."
- **CTA**: "Shop Now"

### Images
**CTA Background Image**
- **Resolution:** 1920x1080 pixels
- **Aspect Ratio:** 16:9
- **Transparent Background:** No
- **Subject**: Vibrant flower arrangement with pink, orange, and white blooms
- **Generation Prompt:** "A high-resolution, close-up photograph of a vibrant flower arrangement featuring pink, orange, and white blooms. The composition is lush and full, with a variety of flowers and green foliage. The lighting is soft and natural, creating a warm, inviting mood. The color palette is rich and saturated, with coral, peach, pink, and cream tones. The background is softly blurred, with a few petals scattered around the base of the arrangement. The overall style is elegant, romantic, and ideal for a florist or lifestyle brand."

### Motion Choreography
- **Parallax**: Image moves at 50% scroll speed.
- **Text Reveal**: Words slide up from a masked container.

## Section 8: Blog

### Layout
**"The Editorial Spread"**
Mimics a high-end magazine layout. First item is "Hero" size (2/3 width), followed by a list of smaller articles.

### Content
- **Title**: "From Our Blog"
- **Posts**: 3 articles.

### Images
**Blog Image 1 - Floral Arrangement in Vase**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Subject**: Floral arrangement in glass jar vase
- **Generation Prompt:** "A high-resolution, close-up photograph of a lush floral arrangement in a clear glass jar vase. The bouquet features a mix of pink, peach, and white roses, along with green foliage and delicate filler flowers. The composition is centered, with the vase placed on a simple, light-colored surface. The lighting is soft and natural, creating a gentle, romantic mood. The color palette is pastel and muted, with blush, peach, cream, and soft green tones. The background is a solid, very pale pink or off-white, with no texture or pattern, ensuring the focus is on the arrangement. The overall style is elegant, modern, and ideal for a florist or lifestyle blog."

### Motion Choreography
- **Hover**: Image converts to grayscale → color on hover. Title underlines animate.

## Section 9: Footer

### Layout
**"The Rooted Base"**
A solid foundation. The background is slightly darker (#faf0f0) to ground the experience.

### Content
- **Logo**: Velvet Rose
- **Links**: Navigation, Socials
- **Newsletter**: Input field with "Subscribe" button.

### Motion Choreography
- **Reveal**: Footer acts as a "curtain" revealed by the previous section lifting up (z-index -1 logic).
- **Links**: Staggered fade-in.

---

## Technical Implementation Notes

### Required Libraries
- **GSAP**: Core animation engine (ScrollTrigger, Flip plugin).
- **Lenis**: For smooth scrolling (essential for the parallax feel).
- **SplitType**: For text splitting animations.

### Critical Performance Rules
- ✅ **Use transform3d()**: Force GPU acceleration.
- ✅ **Virtual Scroll**: If product list > 20 items.
- ✅ **Image Optimization**: WebP formats, lazy loading.
- ❌ **No Layout Thrashing**: Read layout values once, write style updates in a batch (GSAP handles this).

### Browser Support
- **Media Queries**: Fallback for `prefers-reduced-motion` (disable parallax, switch to simple fades).
- **Mobile**: Disable heavy WebGL effects, simplify scroll triggers to native scroll.

## Enhancement Rules
1. **Preservation**: All original image prompts and color hex codes are kept intact.
2. **Elevation**: Motion is added to create depth and narrative flow.
3. **Transformation**: Layouts broken into organic, asymmetrical compositions.
