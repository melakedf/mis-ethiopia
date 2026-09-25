// Only configured, provider-hosted HTTPS destinations may appear on the public site.
export function approvedDonationLink(value: string | undefined, provider: "local" | "international"): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    const hosts = provider === "local" ? ["checkout.chapa.co", "chapa.link"] : ["buy.stripe.com", "donate.stripe.com", "www.paypal.com", "paypal.com"];
    if (url.protocol !== "https:" || url.username || url.password || url.port || !hosts.includes(url.hostname) || url.pathname === "/") return null;
    return url.href;
  } catch { return null; }
}
