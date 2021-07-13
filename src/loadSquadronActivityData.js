import axios from 'axios';

export default async function loadSquadronActivityData(squadronId, startDate, endDate) {
  const { data: squadronData } = await axios.get(`https://api.emperorshammer.org/squadron/${squadronId}`);

  const pilotData = await Promise.all(squadronData.pilots.map(async ({ PIN: pin }) => {
    const { data: pilotInfo } = await axios.get(`http://gonk.vercel.app/api/activity?pilotId=${pin}&startDate=${startDate}&endDate=${endDate}`);
    return pilotInfo;
  }));

  return pilotData.map((data, i) => ({
    ...squadronData.pilots[i],
    ...data,
  }));
}
