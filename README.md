# Sandip Kundu — Personal Portfolio Website

A responsive, zero-build personal portfolio website designed for **GitHub Pages**, showcasing **Sandip Kundu — Senior Site Reliability Engineer | Python Automation | Platform & Infrastructure**.

## Project Structure

```text
My-Website/
├── css/
│   └── styles.css           # Custom Obsidian Telemetry dark/light theme & animations
├── js/
│   └── main.js              # Interactive canvas mesh, terminal, filters, modals & palette
├── img/
│   ├── profile.jpg          # Portrait photo
│   ├── aiops-platform.jpg   # AIOps Platform 3D visual asset
│   ├── cloud-monitoring.jpg # Cloud-Native Monitoring 3D visual asset
│   └── chaos-engineering.jpg# Chaos Engineering 3D visual asset
├── favicon.svg              # Vector favicon (works alongside your existing favicon.ico)
├── index.html               # Main portfolio entry point
└── README.md                # Setup & GitHub Pages deployment guide
```

## How to Add to Your Existing `My-Website` Repository

1. **Unzip** `My-Website.zip`.
2. **Copy/replace** these files in your local `My-Website/` folder:
   - Replace `index.html` and `css/styles.css`
   - Add the `js/` folder (`js/main.js`)
   - Copy all 4 images inside `img/` (`profile.jpg`, `aiops-platform.jpg`, `cloud-monitoring.jpg`, `chaos-engineering.jpg`) into your existing `img/` folder
   - Optional: keep your existing `favicon.ico` and also add `favicon.svg`
3. **Preview locally** by opening `index.html` in your browser (or running `python3 -m http.server 8000`).
4. **Deploy to GitHub Pages**:
   ```bash
   git add .
   git commit -m "Launch redesigned SRE portfolio website"
   git push origin main
   ```
   Then open **GitHub Repo → Settings → Pages → Build and deployment**, select **Deploy from a branch** (`main` / `/ (root)`), and click **Save**.
