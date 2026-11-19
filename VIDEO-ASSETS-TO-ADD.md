# Large video assets — upload separately when needed

The Grok source ZIP intentionally excludes MP4 files to keep the upload package small. The website source and optimized original artwork are included. The original video files remain in the full project assets folder.

Original videos to add back under `assets/`:
- `01_trailer.mp4` (48 MB) — full trailer
- `01_trailer_telefon.mp4` (18 MB) — vertical mobile trailer
- `02_pov_last_fire.mp4` (12 MB) — POV / last fire
- `03_which_hero.mp4` (4.9 MB) — hero showcase
- `04_attack_or_defend.mp4` (18 MB) — battle gameplay
- `05_out_now.mp4` (16 MB) — launch video

The supplied HTML uses optimized poster images instead of broken video references. When you restore the MP4s, recreate the video elements and point them to the matching filenames above.
