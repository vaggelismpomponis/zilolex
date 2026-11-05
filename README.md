# ZILOLEX — Workforce & Student Infrastructure Services

A modern, responsive, bilingual web platform for **ZILOLEX** (`zilolex.gr`), providing end-to-end workforce mobility, statutory relocation, student pathways, and managed accommodation infrastructure in Greece.

Built with **Next.js 16 (Turbopack)**, **React 19**, **Tailwind CSS 4**, and **TypeScript**.

---

## 🌟 Key Features

- **🏛️ High-End Editorial Aesthetic**: Clean, high-contrast Mediterranean layout with subtle authentic photographic backdrops, zero AI visual slop, unboxed typography eyebrows, and deep corporate emerald green accents (`#047857` / `#059669`).
- **📱 Strict Mobile-First Responsive Design**: 100% fluid layouts with carefully tuned focal object positioning across all breakpoints (`sm:`, `md:`, `lg:`, `xl:`) and dynamic viewport heights (`min-h-dvh`).
- **🌐 Full Bilingual Support (EL & EN)**: Instant client-side language switching between Greek and English with localized metadata, navigation, forms, and service copy.
- **📋 Accessible Staffing & Relocation Request Form**:
  - Segmented audience selector (Employers, Recruitment Agencies, Students, Academic Institutions, Candidates).
  - Dedicated free-text specialty/role input (`specialties`).
  - Headcount range dropdown (`workersCount`) powered by custom accessible UI styling.
  - Native calendar date picker (`type="date"`) with dynamic minimum date constraints.
  - Accessible custom combobox dropdowns ([`CustomSelect`](src/components/ui/select.tsx)) featuring keyboard navigation (`ArrowUp`/`ArrowDown`/`Enter`/`Escape`), ARIA roles, and active state indicators.
- **✉️ Email Delivery & API**: Next.js App Router API route (`/api/contact`) integrated with **Resend** for transactional email notifications with fallback local development logging.
- **📄 Complete Multi-Page Routing**:
  - `/` — Homepage with Athens Acropolis hero banner, 4 infrastructure pillars, 4 audience pathways, industry sectors, 6-step process, compliance, and FAQ.
  - `/services` — Detailed breakdown of recruitment, statutory relocation support, and managed housing.
  - `/employers` — Tailored solutions and commitment framework for Greek and international enterprises.
  - `/students` — Academic pathways, student visa coordination, and furnished accommodation support.
  - `/partnerships` — Institutional & recruitment agency partnerships framework.
  - `/about` — Executive overview, mission, core values, and leadership structure.
  - `/contact` — Direct consultation channels, Google Maps office location, and staffing inquiry form.
  - `/terms` — Comprehensive Terms of Service and GDPR-compliant Privacy Policy (Law 4624/2019 & Law 5038/2023).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.4](https://nextjs.org) (App Router, Turbopack, Partial Prefetching)
- **Library**: [React 19.3](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) with `@tailwindcss/turbopack`
- **Icons**: [Lucide React](https://lucide.dev)
- **Email Service**: [Resend](https://resend.com)
- **Language**: TypeScript 5 (Strict Mode)
- **Code Quality**: ESLint 9 with Next.js core web vitals configuration

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20.x or higher
- **npm**, **pnpm**, or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vaggelismpomponis/Zilolex.git
   cd Zilolex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root directory:
   ```env
   # Email delivery via Resend (optional in dev mode)
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=info@zilolex.gr
   RESEND_FROM_EMAIL=ZILOLEX <onboarding@resend.dev>
   ```
   *(Note: If `RESEND_API_KEY` is omitted, submissions are logged directly to the development console).*

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js Turbopack development server on `localhost:3000` |
| `npm run build` | Compiles an optimized production build across all static & dynamic routes |
| `npm run start` | Launches the production server |
| `npm run lint` | Runs ESLint 9 checks across all source files |

---

## 📂 Project Structure

```text
src/
├── app/                                 # Next.js App Router pages & endpoints
│   ├── layout.tsx                       # Root HTML shell, fonts & LanguageProvider
│   ├── page.tsx                         # Homepage
│   ├── services/page.tsx                # Services page
│   ├── employers/page.tsx               # Employers page
│   ├── students/page.tsx                # Students page
│   ├── partnerships/page.tsx            # Partnerships page
│   ├── about/page.tsx                   # About page
│   ├── contact/page.tsx                 # Contact page
│   ├── terms/page.tsx                   # Terms of Service & Privacy Policy
│   └── api/contact/route.ts             # Contact form POST handler & Resend dispatch
├── components/                          # UI components
│   ├── Navbar.tsx                       # Sticky responsive navigation with desktop dropdowns
│   ├── NavTopBar.tsx                    # Top utility bar (phone, WhatsApp, language pills)
│   ├── Hero.tsx                         # Editorial hero banner with responsive Athens imagery
│   ├── PageBanner.tsx                   # Reusable editorial banner across all subpages
│   ├── AudienceCards.tsx                # 4 pathway photography cards with hover interactions
│   ├── AudienceSelector.tsx             # Accessible segmented button group for inquiries
│   ├── ContactForm.tsx                  # Staffing request form with custom inputs & date picker
│   ├── ContactInfo.tsx                  # Office coordinates, phone, WhatsApp & email channels
│   ├── SectorsSection.tsx               # Industry sectors served (Construction, Tourism, etc.)
│   ├── ServicesSection.tsx              # Core services cards
│   ├── ProcessSection.tsx               # 6-step roadmap and responsibility matrix
│   ├── ComplianceSection.tsx            # Statutory Greek migration compliance (Law 5038/2023)
│   ├── FaqSection.tsx                   # Interactive accordion for common inquiries
│   ├── Footer.tsx                       # Comprehensive footer with legal & direct contact info
│   └── ui/
│       └── select.tsx                   # Custom accessible combobox component
├── context/
│   └── LanguageContext.tsx              # React Context for EL/EN state and translations
└── lib/
    ├── types.ts                         # TypeScript interfaces (Form data, steps, items)
    ├── translations.ts                  # Bilingual dictionaries (EL & EN)
    ├── legalContent.ts                  # Bilingual Privacy Policy & Terms of Use texts
    └── utils.ts                         # Class merging utility
```

---

## ⚖️ Legal & Compliance

Operates in strict alignment with:
- **Law 5038/2023** (Hellenic Migration and Social Integration Code).
- **Law 4624/2019** & **Regulation (EU) 2016/679 (GDPR)** for data privacy and applicant consent.

---

## 🛡️ License

Private & Proprietary. All rights reserved by **Zilolex**.
