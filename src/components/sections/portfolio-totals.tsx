import Link from "next/link";
import { portfolioTotals, formatCoverage } from "@/data/portfolio-totals";
export function PortfolioTotals() {
  const stats = [
    { value: `${formatCoverage(portfolioTotals.combined)}+`, label: "combined project coverage", note: "Direct and indirect records, including estimates" },
    { value: formatCoverage(portfolioTotals.direct), label: "direct project coverage", note: "Reported reach, contract coverage and active caseload" },
    { value: `${formatCoverage(portfolioTotals.indirect)}+`, label: "indirect project coverage", note: "Includes estimated family and community coverage" },
    { value: String(portfolioTotals.projects), label: "projects included in these totals", note: "Projects with usable beneficiary figures" },
  ];
  return <><div className="giving-stat-grid portfolio-total-grid">{stats.map(stat => <Link key={stat.label} href="/impact#portfolio-totals"><strong>{stat.value}</strong><h3>{stat.label}</h3><p>{stat.note}</p></Link>)}</div><p className="giving-section-note">Indicative sums across different projects and years, not a count of unique people. Targets and records without beneficiary figures are excluded; summer-school participants are not added again to IGO coverage. <Link href="/impact#portfolio-totals">See the calculation →</Link></p></>;
}
