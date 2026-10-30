# ALT/SOE/KAR/026/0548 — Figma to HTML & CSS

**Oyewole Saheed Abiola** · AI-Powered Full-Stack Engineering
AltSchool Africa, Karatu 2026 — First Semester Assessment 2 (15 marks)

> Convert the provided Figma design into a working page using HTML and CSS.

---

## Assignment details

| | |
|---|---|
| **Figma design** | [AltSchoolV2-Exam](https://www.figma.com/design/Ug5dFpdPeyOy1NNAmZxfov/AltSchoolV2-Exam?node-id=0-1&p=f) |
| **Submission form** | [forms.gle/Ar1s276T8G7ZxLQZ6](https://forms.gle/Ar1s276T8G7ZxLQZ6) |
| **Deadline** | 1 November 2026, 11:59 PM WAT |

---

## Project structure

```text
ALTSCHOOL-figma-to-HTML-and-CSS/
├── index.html          # Page markup, following the Figma layout
├── css/
│   └── style.css       # Styling: layout, typography, colour, spacing
├── assets/
│   ├── images/         # Exported images, icons and logos from Figma
│   └── fonts/          # Any custom webfonts used in the design
└── README.md
```

## How to view it

Open `index.html` in a browser, or serve the folder locally:

```bash
# Python
python -m http.server 5500

# Node
npx serve .
```

Then visit <http://localhost:5500>.

---

## Approach

1. **Read the design first.** Identify the sections, the layout grid, the type scale, and the colour palette before writing any markup.
2. **Semantic HTML.** Use structural elements (`header`, `nav`, `main`, `section`, `footer`) so the markup carries meaning, not just styling hooks.
3. **Mobile-friendly CSS.** Build with a base stylesheet, then layer breakpoints on top.
4. **Accessibility.** Descriptive `alt` text, sufficient colour contrast, visible focus states, and keyboard-reachable controls.
5. **Fidelity check.** Compare the rendered page against the Figma frame at the same viewport width.

---

## Progress

- [ ] Analyse Figma design and export assets
- [ ] Write semantic HTML structure
- [ ] Implement CSS layout and typography
- [ ] Add responsive breakpoints
- [ ] Cross-check against the design
- [ ] Publish to GitHub Pages and submit
