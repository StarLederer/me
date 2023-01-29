export type Course = {
  start: string;
  end: string;
  organization: string;
  achievement: string;
};

export type Education = Course[];

export const education: Education = [
  {
    start: "2006-09",
    end: "2010-05",
    organization: "Public school of Riga #88",
    achievement: "Elementary school diploma",
  },
  {
    start: "2010-09",
    end: "2018-05",
    organization: 'ISMA "Premjers"',
    achievement: "General education diploma",
  },
  {
    start: "2018-09",
    end: "2022-06",
    organization: "Hanze University of Applied Sciences",
    achievement: "Bachelor's degree in game design",
  },
];

export default education;
