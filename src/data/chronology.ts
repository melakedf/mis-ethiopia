// Year/month precision only; these values are not publication timestamps.
export const projectChronology: Record<string, number> = {
 "kolfe-summer-school":202600,"integrated-child-protection":202511,
 "fenote-selam-child-protection":202506,"urban-destitute-support":202410,
 "cssp2-community-inclusion":202311,"guba-shelter-response":202309,"metekel-nfi-response":202303,
 "cssp1-social-inclusion":202000,"student-led-school-sanitation-hygiene":201805,"tsore-refugee-support":201511,
 "cdhra-livelihoods-2012":201200,"cdhra-livelihoods-2011":201100,
};
export function compareProjects(a:{slug:string;status?:string},b:{slug:string;status?:string}) {return Number(b.status==="Active")-Number(a.status==="Active") || (projectChronology[b.slug]||0)-(projectChronology[a.slug]||0);}
