# SSDF INC. — Public Capability Site

Static public site for SSDF INC.: parent / holding company, AMAIMA INC.
operating company, portfolio, Federal Executive Summary, and procurement-code
architecture.

No login, no database, no backend.

Live: [ssdfinc.xyz](https://www.ssdfinc.xyz)

## Positioning

SSDF INC. is the parent and holding company. AMAIMA INC. is its wholly owned
operating subsidiary and technical flagship. Both are separately incorporated
Florida C-Corporations. Ownership is the hierarchy.

The rest of the SSDF portfolio are business lines, platforms, systems, and
internal infrastructure — not peer corporations.

## Corporate structure

```
SSDF INC.                          Parent / Holding Company
└── AMAIMA INC.                    Operating company / technical flagship
    ├── Cryptographic AI
    ├── Systems Engineering
    ├── Research & Development
    └── Operational Technology

SSDF INC. operating portfolio
├── BasisGuard
├── MNEMOS
├── SSDF Transportation
├── Digital Commerce
├── StackDesk
├── Genesis Engine
└── SSDF AB — Internal discovery infrastructure
```

| Surface | Legal status | Source | Site |
|---|---|---|---|
| **AMAIMA INC.** | Wholly owned operating company | [CreoDAMO/AMAIMA](https://github.com/CreoDAMO/AMAIMA) (private, request only) | [basisguard.site](https://basisguard.site) |
| **BasisGuard** | Platform of SSDF INC. | [CreoDAMO/BasisGuard](https://github.com/CreoDAMO/BasisGuard) | [basisguard.site](https://basisguard.site) |
| **MNEMOS** | Platform of SSDF INC. | [CreoDAMO/MNEMOS](https://github.com/CreoDAMO/MNEMOS) | [mnemosstudio.site](https://www.mnemosstudio.site) |
| **SSDF Transportation** | Operations platform of SSDF INC. | [CreoDAMO/SSDF-Transport](https://github.com/CreoDAMO/SSDF-Transport) | Forthcoming |
| **SSDF Digital Commerce** | Business line of SSDF INC. | [CreoDAMO/SSDF_DigitalCommerce](https://github.com/CreoDAMO/SSDF_DigitalCommerce) | [ssdf.site](https://ssdf.site) |
| **StackDesk** | Platform of SSDF INC. | [CreoDAMO/StackDesk](https://github.com/CreoDAMO/StackDesk) | [stackdesk.online](https://stackdesk.online) |
| **Genesis Engine** | Research infrastructure of SSDF INC. | [CreoDAMO/Genesis-Engine](https://github.com/CreoDAMO/Genesis-Engine) | [genesis-engine.site](https://www.genesis-engine.site) |
| **SSDF AB** | Internal infrastructure of SSDF INC. | [CreoDAMO/SSDF-AB](https://github.com/CreoDAMO/SSDF-AB) | [ssdf-ab.xyz](https://www.ssdf-ab.xyz) (internal surface) |

SSDF AB is **not** a separate company or customer-facing subsidiary.
SSDF Transportation is **not** a motor carrier merely by operating dispatch software.

## Federal identity

| Item | Status |
|---|---|
| Legal entity | SSDF INC. — Florida C-Corporation (parent / holding) |
| Operating company | AMAIMA INC. — Florida C-Corporation, wholly owned |
| UEI | WBXSLSMUYE29 (issued) |
| DUNS | 14-790-8413 |
| SAM.gov | Submitted / pending activation |
| CAGE | Pending SAM activation / assignment |
| Disaster Response Registry | Yes — all of the United States |

## Pages

- `/` — corporate structure and portfolio
- `/federal` — Federal Executive Summary (readable capability statement)
- `/federal/codes` — NAICS / PSC matrix (code → capability → owner → delivery)

A listed code is a contracting capability, not a claim that every labor or
equipment resource is currently on payroll.

## Editing

Copy lives in the HTML files. Tokens live in `styles.css` under `:root`.
The codes inventory is `federal/codes.json`.
