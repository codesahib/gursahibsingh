# Master Control Terminal dashboard captures

Captured from the actual React dashboard in `codesahib/Master-Control-Terminal`
at revision `7af748f` on October 31, 2026. Both images are 1600 x 1669 PNGs.

The UI used synthetic portfolio data supplied through intercepted API responses.
No live account balances, financial records, or credentials appear in the images.
The source application and its database were not modified.

`ProjectScreenshot` selects the dark or light capture to match the website theme.

## Engineering lab screenshots

Unmodified PNGs copied from the real applications' committed Playwright evidence. All records, operator labels, and payment amounts are synthetic. These are existing captured UI states; the portfolio does not claim they are live production data or fresh captures of every follow-up patch.

| Portfolio asset | Original repository artifact | SHA-256 |
|---|---|---|
| league-sync-before.png | codesahib/league-sync/evidence/baseline.png | 22b7a90f14b75dfa4579bc663f84184a947587a3ecf1c5343d3e54ad463f299e |
| league-sync-after.png | codesahib/league-sync/evidence/improved.png | 2441389b96be8cf4619694125c120f66373170ba19a409a2ef8ea883ee2ed363 |
| league-sync-recovery.png | codesahib/league-sync/evidence/failed-delivery.png | 385d7881a8f5ea55d84bca06fb2637136fe35eac61ed1ecf18171b328ac34fe7 |
| college-import-before.png | codesahib/college-import/evidence/01-baseline.png | 40b668db03daeef2c9e71361752a3b9ac6ce37b3ae5e754cd7c6b1cadbf8cff4 |
| college-import-after.png | codesahib/college-import/evidence/02-normalized.png | aa68f4fa4b5fe9002d9b492ee9eb8b01a2d56ca07d5591789503b8f5c1a59e40 |
| college-import-review.png | codesahib/college-import/evidence/03-quarantine.png | 7fa1c645b9f36ce3390bf2179ec5f04a31de589825a00d1e8af4fea97da17746 |
| booking-reliability-before.png | codesahib/booking-reliability/evidence/before-duplicate.png | 636ffee9fddd2f47271a79c1000b05974b36ec8e04cc66795aee2550607aae43 |
| booking-reliability-after.png | codesahib/booking-reliability/evidence/after-duplicate.png | b3497763480bc7ee3eb7cf718732ea44807640a0fb7c898572ad86b357d14573 |
| booking-reliability-recovery.png | codesahib/booking-reliability/evidence/incident-refund-failure.png | 808ea31884e293b2a3c05b99ceb475203e9d56a8a0363325fcffcf1d79973361 |

League captures show one changed player, while its benchmark uses ten transfers. College captures use a subset of fixtures and show three accepted improved records, while the full benchmark reaches fourteen after one approval. Booking's retry-only screen has two duplicate rows; the full benchmark has three across multiple scenarios. The dedicated pages explain these different scenario states.

The UI uses CSS viewports on summary images; clicking a case-study image opens its original full-size PNG. No image content or values were generated, retouched, or replaced.
