# HTML Interview Questions and Answers

---

**Topic : Media**

# 45. How do you add **audio and video** to an HTML document?

## Complete Explanation

HTML5 provides **native multimedia support**, which means you can add audio and video **without external plugins** (like Flash).

The two main elements are:

* `<audio>` → for sound/music
* `<video>` → for video content

Both elements:

* Support **multiple file formats**
* Provide **built-in controls**
* Allow fallback content
* Can be customized with attributes

---

### 1. Adding Audio using `<audio>`

The `<audio>` tag is used to embed sound files such as music, podcasts, or sound effects.

Ways to add audio:

* Single source using `src`
* Multiple sources using `<source>` (recommended for browser compatibility)

---

### 2. Adding Video using `<video>`

The `<video>` tag is used to embed video files.

Ways to add video:

* Single source using `src`
* Multiple formats using `<source>`
* Optional subtitles using `<track>` (covered in Q47)

---

### Why use `<source>` instead of only `src`?

Different browsers support different formats.
The browser picks the **first supported format**.

---

## Code Example (with comments)

```html
<!-- 1. Simple audio example -->
<audio src="audio/song.mp3" controls>
  Your browser does not support the audio element.
</audio>

<!-- 2. Audio with multiple sources (recommended) -->
<audio controls>
  <source src="audio/song.mp3" type="audio/mpeg">
  <source src="audio/song.ogg" type="audio/ogg">
  Your browser does not support audio playback.
</audio>

<!-- 3. Simple video example -->
<video src="video/movie.mp4" controls width="400">
  Your browser does not support the video tag.
</video>

<!-- 4. Video with multiple formats -->
<video controls width="500">
  <source src="video/movie.mp4" type="video/mp4">
  <source src="video/movie.webm" type="video/webm">
  Your browser does not support video playback.
</video>
```

### What this code shows

* `controls` gives play/pause/volume UI
* `<source>` allows format fallback
* Text inside tags acts as fallback for unsupported browsers

---

## Short Answer Version

Use `<audio>` to add sound and `<video>` to add videos in HTML.
Add `controls` for playback UI and use `<source>` to support multiple formats.

Example:
`<audio controls><source src="song.mp3"></audio>`
`<video controls><source src="movie.mp4"></video>`

---

# 46. What are the attributes of the **video** and **audio** elements?

## Complete Explanation

The `<audio>` and `<video>` elements share many common attributes that control **playback behavior**, **loading**, and **user experience**.
Some attributes are common to both, while a few are specific to video.

---

### Common Attributes (Audio + Video)

---

#### **controls**

Displays built-in play, pause, volume, and timeline controls.

#### **autoplay**

Starts playing automatically when the page loads.
Note: Most browsers block autoplay **with sound**.

#### **muted**

Mutes audio by default.
Often used with `autoplay`.

#### **loop**

Repeats the media continuously.

#### **preload**

Controls how media is loaded before play.

Values:

* `none` → do not preload
* `metadata` → load metadata only
* `auto` → load entire media

#### **src**

Specifies the media file URL (can be replaced by `<source>`).

---

### Video-Specific Attributes

---

#### **width / height**

Defines the video player size.

#### **poster**

Shows an image before the video starts playing.

#### **playsinline**

Prevents fullscreen playback on mobile devices (important for iOS).

---

### Audio-Specific Notes

Audio does not support `width`, `height`, or `poster`.

---

## Code Example (with comments)

```html
<!-- Audio element with common attributes -->
<audio 
  src="audio/music.mp3"
  controls        <!-- show playback controls -->
  autoplay        <!-- start automatically (often blocked) -->
  muted           <!-- required for autoplay -->
  loop            <!-- repeat audio -->
  preload="auto"  <!-- preload audio -->
>
  Your browser does not support audio.
</audio>

<!-- Video element with all major attributes -->
<video
  controls        <!-- show video controls -->
  autoplay        <!-- auto play (needs muted) -->
  muted           <!-- mute by default -->
  loop            <!-- repeat video -->
  preload="metadata" <!-- load only metadata -->
  width="400"     <!-- player width -->
  poster="thumb.jpg" <!-- thumbnail before play -->
  playsinline     <!-- prevent fullscreen on mobile -->
>
  <source src="video/movie.mp4" type="video/mp4">
  <source src="video/movie.webm" type="video/webm">
  Your browser does not support video.
</video>
```

---

## Short Answer Version

Common audio/video attributes include `controls`, `autoplay`, `muted`, `loop`, `preload`, and `src`.
Video also supports `width`, `height`, `poster`, and `playsinline`.

---

# 47. How do you provide **subtitles or captions** for video content in HTML?

## Complete Explanation

HTML5 provides the **`<track>`** element to add **subtitles, captions, descriptions, chapters, or metadata** to video (and audio, though captions are mainly for video).

Subtitles/captions are essential for:

* Accessibility (deaf or hard-of-hearing users)
* Non-native language viewers
* Silent viewing (mobile, public places)
* SEO and content understanding

---

## Key Concepts

### 1. `<track>` element

Placed **inside `<video>`** (after `<source>`).
It references a **WebVTT (`.vtt`) file**, which contains timed text.

### 2. `kind` attribute

Defines the type of text track.

Common values:

* `subtitles` → translated text (assumes audio exists)
* `captions` → includes dialogue + sound effects (recommended for accessibility)
* `descriptions` → audio descriptions for visually impaired
* `chapters` → navigation points
* `metadata` → used by scripts

### 3. `srclang` attribute

Specifies the language of the track (ISO language code).

Examples:

* `en` → English
* `hi` → Hindi
* `fr` → French

### 4. `label` attribute

Human-readable name shown in the video player menu.

### 5. `default` attribute

Marks the track that should be enabled by default.

---

## WebVTT (`.vtt`) file basics

* Must start with `WEBVTT`
* Contains time ranges + text
* Uses `HH:MM:SS.mmm --> HH:MM:SS.mmm`

Example:

```
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to our HTML tutorial.

00:00:05.000 --> 00:00:08.000
In this video, we will learn about subtitles.
```

---

## Code Example (with comments)

```html
<video controls width="500">

  <!-- Video sources -->
  <source src="video/tutorial.mp4" type="video/mp4">
  <source src="video/tutorial.webm" type="video/webm">

  <!-- Captions for accessibility (recommended) -->
  <track
    kind="captions"
    src="captions-en.vtt"
    srclang="en"
    label="English Captions"
    default
  >

  <!-- Subtitles in another language -->
  <track
    kind="subtitles"
    src="subtitles-hi.vtt"
    srclang="hi"
    label="Hindi Subtitles"
  >

  <!-- Chapters for navigation -->
  <track
    kind="chapters"
    src="chapters.vtt"
    srclang="en"
    label="Chapters"
  >

  Your browser does not support the video tag.
</video>
```

---

## Short Answer Version

Use the `<track>` element inside `<video>` to add subtitles or captions.
Provide a `.vtt` file and specify attributes like `kind`, `srclang`, `label`, and `default`.

Example:
`<track kind="captions" src="captions.vtt" srclang="en" default>`

---
# 48. What’s the difference between **embedding** and **linking** media?

## Complete Explanation

Embedding and linking media are two different ways to include audio, video, or other media in a webpage.
The key difference is **where and how the media is consumed by the user**.

---

## 1. Embedding Media

### What it means

Embedding media means the media **plays directly inside the webpage**.

The user does **not leave the page** to view or play the media.

### Common HTML elements used

* `<audio>`
* `<video>`
* `<iframe>` (YouTube, Google Maps, etc.)
* `<embed>` (older, less common)

### When to use embedding

* You want users to consume media **within your website**
* Tutorials, blogs, courses
* Music players, video players
* Interactive or inline content

### Pros

* Better user experience
* User stays on the same page
* More control over playback
* Can be styled with CSS and controlled via JS

### Cons

* More bandwidth usage
* Slightly heavier page load

---

## 2. Linking Media

### What it means

Linking media means providing a **clickable link** to the media file.
The media opens in:

* A new tab
* A media player
* Or downloads directly

### Common HTML element used

* `<a>` (anchor tag)

### When to use linking

* Large files
* Optional media
* Downloads (PDFs, videos, audio files)
* External resources

### Pros

* Lightweight page
* Faster initial load
* User chooses whether to open/download

### Cons

* User leaves the page
* No inline playback

---

## Code Example (with comments)

```html
<!-- EMBEDDING MEDIA -->

<!-- Embedded video -->
<video controls width="400">
  <source src="video/demo.mp4" type="video/mp4">
</video>

<!-- Embedded audio -->
<audio controls>
  <source src="audio/song.mp3" type="audio/mpeg">
</audio>

<!-- Embedded external content using iframe -->
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="400"
  height="250"
  allowfullscreen>
</iframe>


<!-- LINKING MEDIA -->

<!-- Link to a video file -->
<a href="video/demo.mp4">Watch Video</a>

<!-- Link that opens in a new tab -->
<a href="audio/song.mp3" target="_blank">Listen to Audio</a>

<!-- Downloadable media link -->
<a href="files/tutorial.pdf" download>Download Tutorial</a>
```

---

## Short Answer Version

**Embedding** media plays it directly inside the webpage using elements like `<video>`, `<audio>`, or `<iframe>`.
**Linking** media uses an `<a>` tag to open or download the media externally.
