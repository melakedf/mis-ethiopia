# Public features and remaining inputs

## Hosted donations
The donate page supports optional server-side configuration:
- MIS_LOCAL_DONATION_URL: verified MIS Chapa hosted payment link (checkout.chapa.co or chapa.link).
- MIS_INTERNATIONAL_DONATION_URL: verified MIS provider link (buy.stripe.com, donate.stripe.com, paypal.com or www.paypal.com).

These values are payment links, not API secrets. Configure only after the merchant is approved for MIS, organizational receiving account and currency are verified, donation use is permitted, and receipts/refunds have an assigned owner. Then redeploy. Never put a personal receiving account in these variables. Provider availability and payment methods must be confirmed in that merchant's checkout; the UI does not promise Telebirr, CBE Birr, card or PayPal availability. The checkout provider owns amount entry and receipts. No payment is marked successful by this website. Provider-managed checkout is used instead of collecting payment information here.

Chapa documents hosted payment links at https://chapa.co/ and https://docs.chapa.global/docs/v2/integrations/accept-payment . No merchant link was available during this update; public checkout remains hidden.

## Map
OpenStreetMap embeds use approximate city/town markers for Addis Ababa (9,38.75) and Fenote Selam (10.68,37.2601), plus a regional viewport for Benishangul-Gumuz. Sources: https://wiki.openstreetmap.org/wiki/Addis_Ababa and https://mapcarta.com/13021102 . No beneficiary or precise service locations are mapped. Oromia lacks project-level locations in the available portfolio. Historical work is explicitly distinguished from active programming.

## Publications and media
Three downloadable PDFs summarize existing verified public website content: organizational overview, summer school 2026 brief, safeguarding public statement. They are not annual reports, audit statements or full approved policies. Replace/add formal documents only when final versions are available and reviewed for public release. No verified local photo/video collection was resolved in the file search; media remains outstanding. Do not substitute generated beneficiary images for documentary photographs.
