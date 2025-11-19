import type { Animal } from '../types/Animal';

const getDogs = async () => {
  const response = await fetch('https://api.petfinder.com/v2/animals?limit=100&organization=LA385&sort=-recent', {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtd1NmUDQ1SEpPckFSS0RkVGM1M3JGSjNHVTJIdnk0SUxVSGR5Y3NnNGpURzRCVHIzdCIsImp0aSI6Inh1R0g0WHFaOEhzRGFjSlBmQ3FPaERuVmhpUVhhMksycnFRWUpMOXEiLCJpYXQiOjE3NjM1MTY0MzAsIm5iZiI6MTc2MzUxNjQzMCwiZXhwIjo0OTE5MTkwMDMwLCJzdWIiOiIyOTQyMzE3Iiwic2NvcGVzIjpbXX0.VX-uFy2PuQTmTqsTVR_MhNeNE0SX3hxnA0PS0Nlqo7WZRNGbephbZuCgnjfjRKvOlP-tugiyqqbWaeSrjcog0yLmafKj1UxmW1xOB384WfHgb6jqRyFAal5Kk7fWJIMOQbq4dLoCjBmlLmDz_XVd0Cpkuu92PLkUeqcZB9whzKDlxFGbNnQ8V5juE3buIbNLHO_tcbDNJ-zgFX2uZokCd_IXgM1d3vJDa39eBk2B23-X09_Q_4ha0Emn_EkfQJngJ_WVXQhhzFP6nra7M_3DE5YzDvWa1g_FJK-faMUNKAczXdYMXRZC4gwJZ5qqtPI80NRid_y2trDkZu5hJI53RQ`,
    },
  });
  const data = (await response.json()) as { animals: Animal[] };
  return data.animals;
};

export default getDogs;
