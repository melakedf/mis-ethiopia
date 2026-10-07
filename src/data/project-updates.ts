// Dates describe documented project activity, not invented publication dates.
const updates = [
 {title: "Timely shelter support in Tsore", description: "In 2015, MIS constructed 100 shelters in Tsore Refugee Camp, working with UNHCR and ARRA and drawing on community participation.", href: "/projects/tsore-refugee-support", category: "Refugee support", location: "Tsore, Benishangul-Gumuz", period: "Project retrospective · 2015"},
  { title: "A small beginning: supporting Asima’s education", description: "A community monitoring committee helped secure a wheelchair for a Grade 6 student in Tongo through MIS’s CSSP2-supported work.", href: "/news/asima-inclusive-education", category: "Inclusive education", location: "Tongo, Mao Komo", period: "Historical story · Event date not recorded" },
  { title: "Sponsor Appreciation Day: a shared connection", description: "With IGO, we brought children and families together to write messages to sponsors, discuss education and share a meal. A Zoom conversation with Dr. Velma Kirksey-Tarver added encouragement to the day.", href: "/news/sponsor-appreciation-day", category: "Child sponsorship", location: "Ethiopia", period: "Community gathering" },
  {
    title: "Celebrating our Summer Scholars",
    description: "Our 31 Summer Scholars completed six weeks of learning and celebrated with certificates, families and teachers. IGO founder Dr. Velma joined the ceremony, and teachers and volunteers received appreciation certificates.",
    href: "/projects/kolfe-summer-school",
    category: "Education and nutrition",
    location: "Kolfe, Addis Ababa",
    period: "2026 summer-program completion",
  },
  {
    title: "Summer Scholars: where the learning began",
    description: "A look back at the opening of our six-week program with IGO, bringing English and Mathematics support together with meals for children in Kolfe.",
    href: "/news/summer-scholars-opening", category: "Education and nutrition", location: "Kolfe, Addis Ababa", period: "2026 opening retrospective",
  },
  {
    title: "Connected support for 229 children",
    description: "With IGO, MIS connects family assistance, school follow-up and well-being monitoring in Kolfe Keranyo. The August 2026 record documents an active caseload of 229 children.",
    href: "/projects/integrated-child-protection",
    category: "Child protection",
    location: "Kolfe Keranyo, Addis Ababa",
    period: "Caseload update · August 2026",
  },
  {
    title: "Safer schools through community action",
    description: "In Fenote Selam, MIS and Nexus Ethiopia combined safe spaces, child-rights clubs and teacher capacity building. The completed project recorded 100 children and 50 teachers as direct participants.",
    href: "/projects/fenote-selam-child-protection",
    category: "Child protection",
    location: "Fenote Selam, Amhara",
    period: "Project retrospective · December 2024 – June 2025",
  },
  { title: "Inclusion and solidarity in Bambasi", description: "MIS continued CSSP2-supported advocacy with communities displaced from Mao Komo and distributed staff-contributed soap and clothing during the 16 Days of Activism against Gender-Based Violence.", href: "/news/bambasi-inclusion-solidarity", category: "Social inclusion", location: "Bambasi, Benishangul-Gumuz", period: "2023 · 16 Days of Activism", hidePhoto: false },
  { title: "Household essentials for displaced families in Metekel", description: "With IOM, MIS delivered kits covering 15 types of non-food items to 1,500 conflict-affected households in Dangur, Dibate and Bulen.", href: "/projects/metekel-nfi-response", category: "Emergency response", location: "Metekel, Benishangul-Gumuz", period: "December 2022 – March 2023" },
];

const activityOrder: Record<string,number> = {"/projects/tsore-refugee-support":201511,"/projects/kolfe-summer-school":202603,"/news/summer-scholars-opening":202602,"/projects/integrated-child-protection":202601,"/projects/fenote-selam-child-protection":202506,"/news/bambasi-inclusion-solidarity":202311,"/projects/metekel-nfi-response":202303};
// Relative order within the 2026 summer cycle; no exact event dates inferred.
export const projectUpdates = [...updates].sort((a,b)=>(activityOrder[b.href]||0)-(activityOrder[a.href]||0));
export const featuredUpdates = ["/projects/kolfe-summer-school","/news/sponsor-appreciation-day","/projects/metekel-nfi-response"].map(href=>updates.find(entry=>entry.href===href)!);
