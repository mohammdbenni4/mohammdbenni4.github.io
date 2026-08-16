Drop Manara robot photos here (jpg or webp, roughly 16:10, 1600px wide is plenty).

Then list them in src/lib/data/site.ts under the Manara project:

  gallery: {
    placeholders: 4,
    slides: [
      { src: '/projects/manara/unit-front.jpg', caption: 'Manara unit at the Grand Mosque' },
      { src: '/projects/manara/bench.jpg',      caption: 'Sensor bring-up on the bench' }
    ]
  }

As soon as `slides` is non-empty the placeholders disappear and the carousel
shows the real photos.
