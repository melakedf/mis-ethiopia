// Sums of recorded coverage, not deduplicated people or audited outcomes.
// Missing indirect figures contribute nothing to the sum, rather than implying zero coverage.
export const coverageRecords = [
  { slug: "metekel-nfi-response", title: "Metekel NFI response", direct: 8307, indirect: null, basis: "People reached" },
  { slug: "urban-destitute-support", title: "Urban Destitute Support", direct: 101, indirect: null, basis: "Contracted direct coverage" },
  { slug: "fenote-selam-child-protection", title: "Fenote Selam child protection", direct: 150, indirect: 2000, basis: "100 children + 50 teachers; indirect coverage recorded separately" },
  { slug: "integrated-child-protection", title: "IGO integrated child protection", direct: 229, indirect: 916, basis: "August 2026 active caseload; indirect coverage estimated" },
  { slug: "student-led-school-sanitation-hygiene", title: "Student Led School Sanitation and Hygiene", direct: 3240, indirect: 1873, basis: "Coverage listed in the project record" },
  { slug: "cssp2-community-inclusion", title: "CSSP2 community inclusion", direct: 2036, indirect: 21000, basis: "Project record lists more than 21,000 indirect beneficiaries" },
];
const direct = coverageRecords.reduce((sum, p) => sum + p.direct, 0);
const indirect = coverageRecords.reduce((sum, p) => sum + (p.indirect ?? 0), 0);
export const portfolioTotals = { direct, indirect, combined: direct + indirect, projects: coverageRecords.length };
export const formatCoverage = (value: number) => value.toLocaleString("en-US");
