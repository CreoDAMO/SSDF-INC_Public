# SSDF INC. — Public Capability Site

Static public site for SSDF INC.: parent company, operating organs, Federal
Executive Summary, and procurement-code architecture.

No login, no database, no backend.

Live: [ssdfinc.xyz](https://www.ssdfinc.xyz)

## Positioning

SSDF INC. is a technology, systems-development, research, and operational
execution company. AMAIMA Inc. is the wholly owned cryptographic-AI subsidiary
and technical flagship — not the definition of the corporation.

## Operating organs

| Organ | Kind | Source | Site |
|---|---|---|---|
| **AMAIMA** | Wholly owned subsidiary | [CreoDAMO/AMAIMA](https://github.com/CreoDAMO/AMAIMA) (private, request only) | [basisguard.site](https://basisguard.site) |
| **BasisGuard** | Public evidence surface | [CreoDAMO/BasisGuard](https://github.com/CreoDAMO/BasisGuard) | [basisguard.site](https://basisguard.site) |
| **MNEMOS** | Studio operating system | [CreoDAMO/MNEMOS](https://github.com/CreoDAMO/MNEMOS) | [mnemosstudio.site](https://www.mnemosstudio.site) |
| **SSDF Transportation** | Dispatch / evidence control plane | [CreoDAMO/SSDF-Transport](https://github.com/CreoDAMO/SSDF-Transport) | Forthcoming |
| **SSDF Digital Commerce** | First-party merchant | [CreoDAMO/SSDF_DigitalCommerce](https://github.com/CreoDAMO/SSDF_DigitalCommerce) | [ssdf.site](https://ssdf.site) |
| **StackDesk** | Seller-financing workbench | [CreoDAMO/StackDesk](https://github.com/CreoDAMO/StackDesk) | [stackdesk.online](https://stackdesk.online) |
| **Genesis Engine** | Strategy research | [CreoDAMO/Genesis-Engine](https://github.com/CreoDAMO/Genesis-Engine) | [genesis-engine.site](https://www.genesis-engine.site) |
| **SSDF AB** | Internal autonomous branch | [CreoDAMO/SSDF-AB](https://github.com/CreoDAMO/SSDF-AB) | [ssdf-ab.xyz](https://www.ssdf-ab.xyz) (internal surface) |

SSDF AB is **not** a separate company or customer-facing subsidiary.
SSDF Transportation is **not** a motor carrier merely by operating dispatch software.

## Federal identity

| Item | Status |
|---|---|
| Legal entity | SSDF INC. — Florida C-Corporation |
| UEI | WBXSLSMUYE29 (issued) |
| DUNS | 14-790-8413 |
| SAM.gov | Submitted / pending activation |
| CAGE | Pending SAM activation / assignment |
| Disaster Response Registry | Yes — all of the United States |

## Pages

- `/` — corporate operating system
- `/federal` — Federal Executive Summary (readable capability statement)
- `/federal/codes` — NAICS / PSC matrix (code → capability → organ → delivery)

A listed code is a contracting capability, not a claim that every labor or
equipment resource is currently on payroll.

## Editing

Copy lives in the HTML files. Tokens live in `styles.css` under `:root`.
The codes inventory is `federal/codes.json`.
