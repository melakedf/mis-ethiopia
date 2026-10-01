// Public project-level figures supplied in MIS Project History Review, shared 1 October 2026.
// Budgets are recorded allocations/plans, not audited expenditure. Do not aggregate currencies.
export type ProjectDetails = {
  budget: string;
  budgetLabel?: string;
  beneficiaries?: string;
  recordNote?: string;
  fullTitle?: string;
  contributions?: { label: string; amount: string }[];
};
export const projectDetails: Record<string, ProjectDetails> = {
  "student-led-school-sanitation-hygiene": {
    budget: "ETB 1,571,563",
    beneficiaries: "3,240 direct · 1,873 indirect",
    recordNote: "Beneficiary figures are recorded project coverage. They are not a separately verified outcome assessment.",
    contributions: [
      { label: "French Embassy / PISCCA (70%)", amount: "ETB 1,100,096" },
      { label: "MIS (10%)", amount: "ETB 157,157" },
      { label: "Target schools (20%)", amount: "ETB 314,310" },
    ],
  },
  "cssp1-social-inclusion": {
    fullTitle: "Enhancing the Networking and Advocacy Capacity of Local Civil Society Organizations towards the Inclusion of Social Minorities",
    budget: "ETB 1,327,984", budgetLabel: "Planned project budget",
    recordNote: "The available project summary confirms a January 2020 start and a 16-month duration. A beneficiary total is not confirmed.",
  },
  "cssp2-community-inclusion": {
    fullTitle: "Enhancing the Networking and Advocacy Capacity of Local Civil Society Organizations towards the Inclusion of Vulnerable Community Groups",
    budget: "ETB 2,208,641.25",
    beneficiaries: "2,036 direct · more than 21,000 indirect",
    recordNote: "The record states a 10-month duration but also prints 1 June 2022–31 October 2023. The end date remains unconfirmed pending agreement verification. Beneficiary figures are those listed in the project record.",
  },
  "metekel-nfi-response": { budget: "USD 50,595.10" },
  "urban-destitute-support": { budget: "ETB 2,719,530" },
  "guba-shelter-response": { budget: "USD 95,606.61" },
  "fenote-selam-child-protection": { budget: "ETB 500,000" },
  "integrated-child-protection": {
    budget: "ETB 24,452,400",
    fullTitle: "Integrated Child Protection and Development Initiative / MIS Child Sponsorship, Nurturing and Nourishment",
  },
};
