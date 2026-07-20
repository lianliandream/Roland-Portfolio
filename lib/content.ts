import { link } from "fs/promises";
import Image from "next/image";

export const images = {
  book: [
    "https://m.media-amazon.com/images/I/712KZuSrGsL._SL1500_.jpg",
    "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/074/97/0010749775_bc_01.jpg&v=58ee1e3fk&w=655&h=609",
  ],
  stories: [
    "https://s.hdnux.com/photos/01/66/24/42/31017095/3/ratio3x2_1440.webp",
    "https://s.hdnux.com/photos/01/65/37/46/30800300/6/ratio3x2_960.webp",
    "https://s.hdnux.com/photos/01/33/22/32/23930545/3/ratio3x2_960.webp",
    "https://s.hdnux.com/photos/01/32/07/37/23623670/5/ratio3x2_1440.webp",
    "https://s.hdnux.com/photos/01/35/21/33/24450809/11/ratio3x2_960.webp",
    "https://s.hdnux.com/photos/01/66/47/17/31093734/3/ratio3x2_960.webp ",
    "https://s.hdnux.com/photos/01/53/60/53/28248825/3/ratio3x2_960.webp",
    "https://s.hdnux.com/photos/01/34/72/43/24357100/6/1440x0.webp",
    "https://s.hdnux.com/photos/01/20/60/23/21169360/9/960x0.webp",
    "https://s.hdnux.com/photos/01/21/33/63/21347520/7/960x0.webp",
    "https://media.bizj.us/view/img/5692121/hollidayrick-brownkevin041715tj-10.jpg",
    "https://media.bizj.us/view/img/10960761/shannoncarl061118tj-2-edit-1.jpg",
    "https://media.bizj.us/view/img/10792650/hollidayrick011718tj-7.jpg",
  ],
  photography: [
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  ],
  archive: [
    "https://s.wsj.net/public/resources/images/NY-BZ223_NYWTD_P_20121028173915.jpg",
    "https://static01.nyt.com/images/2012/10/10/business/Hotels1/Hotels1-superJumbo.jpg?quality=75&auto=webp",
    "/images/nyc.jpg",
    "/images/eisley.jpg",
    "/images/IPL.jpg",
    "https://s.wsj.net/public/resources/images/NY-CA309_NYWTD_DV_20121118184117.jpg",
  ],
};

export const featuredBook = {
  title: "Good Luck Have Fun: The Rise of eSports",
  year: "Published Book · 2017",
  description:
    " This book is the essential guide to the rise of an industry and culture that challenges what we know about sports, games, and competition.",

  editions: [
    {
      name: "English Edition",
      image: "https://m.media-amazon.com/images/I/712KZuSrGsL._SL1500_.jpg",
      link: "https://www.amazon.com/Good-Luck-Have-Fun-eSports/dp/1510725903",
    },
    {
      name: "中文版",
      image:
        "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/074/97/0010749775_bc_01.jpg&v=58ee1e3fk&w=655&h=609",
      link: "https://www.books.com.tw/products/0010749775",
    },
  ],
};

export const stories = [
  {
    title:
      "Indian engineers spent years chasing Silicon Valley. Now some say, ‘I would not come to the U.S.’",
    publication: "San Francisco Chronicle",
    year: "2026 ",
    image: images.stories[0],
    link: "https://www.sfchronicle.com/bayarea/article/indian-tech-engineer-silicon-valley-22233304.php",
  },
  {
    title: "The Bay Area’s hottest job market right now? It’s not tech",
    publication: "San Francisco Chronicle",
    year: "2026",
    image: images.stories[1],
    link: "https://www.sfchronicle.com/bayarea/article/job-market-health-care-22075636.php",
  },
  {
    title:
      "Exclusive: Westfield giving up S.F. mall in wake of Nordstrom closure, plunging sales and foot traffic",
    publication: "San Francisco Chronicle",
    year: "2023",
    image: images.stories[2],
    link: "https://www.sfchronicle.com/bayarea/article/westfield-giving-san-francisco-mall-18148102.php",
  },
  {
    title:
      "Cities are struggling. San Francisco could be in for the biggest ‘doom loop’ of all",
    publication: "San Francisco Chronicle",
    year: "2023",
    image: images.stories[3],
    link: "https://www.sfchronicle.com/sf/article/city-economy-doom-loop-17846412.php",
  },
  {
    title:
      "A human blockade and a punch to the face: APEC protest turns violent in downtown S.F.",
    publication: "San Francisco Chronicle",
    year: "2023",
    image: images.stories[4],
    link: "https://www.sfchronicle.com/sf/article/s-f-apec-protest-violent-18494045.php",
  },
  {
    title:
      "Exclusive: SFO’s average delay time has quadrupled. Here are the worst times to fly",
    publication: "San Francisco Chronicle",
    year: "2026",
    image: images.stories[5],
    link: "https://www.sfchronicle.com/sf/article/sfo-delays-22309700.php",
  },

  {
    title:
      "San Francisco rent prices surge in ‘landlord’s market.’ Here’s what is going on",
    publication: "San Francisco Chronicle",
    year: "2025",
    image: images.stories[6],
    link: "https://www.sfchronicle.com/sf/article/apartment-rent-san-francisco-20778902.php",
  },

  {
    title:
      "S.F. exodus: What we can learn from the U.S.’s fastest-growing big city",
    publication: "San Francisco Chronicle",
    year: "2023",
    image: images.stories[7],
    link: "https://www.sfchronicle.com/sf/article/san-francisco-seattle-recovery-18422696.php",
  },
  {
    title:
      "Californians are fueling Austin’s housing frenzy: ‘We’ve never seen migration like this’",
    publication: "San Francisco Chronicle",
    year: "2021",
    image: images.stories[8],
    link: "https://www.sfchronicle.com/local/article/California-Austin-Texas-migration-home-prices-16275299.php",
  },
  {
    title:
      "Tech says the Bay Area ‘demonized capitalism,’ but is Miami the solution?",
    publication: "San Francisco Chronicle",
    year: "2021",
    image: images.stories[9],
    link: "https://www.sfchronicle.com/tech/article/miami-wants-to-become-the-next-silicon-valley-it-16382946.php",
  },
  {
    title: "West Oakland on track for change",
    publication: "San Francisco Business Times",
    year: "2015",
    image: images.stories[10],
    link: "https://www.bizjournals.com/sanfrancisco/print-edition/2015/04/24/west-oakland-development-housing-gentrification.html",
  },
  {
    title: "Will Central SoMa live up to its promise?",
    publication: "San Francisco Business Times",
    year: "2018",
    image: images.stories[11],
    link: "https://www.bizjournals.com/sanfrancisco/news/2018/06/28/will-central-soma-live-up-to-its-promise.html",
  },
  {
    title:
      "Will new Opportunity Zones lift up economic activity in the Bay Area's poorest areas? ",
    publication: "San Francisco Business Times",
    year: "2018",
    image: images.stories[12],
    link: "https://www.bizjournals.com/sanjose/news/2018/04/10/opportunity-zones-taxes-bay-area-san-jose-vallejo.html",
  },
];

export const archiveArticles = [
  {
    title: "A Luxury Brokerage With Familiar Name",
    publication: "The Wall Street Journal",
    year: "2012",
    summary:
      "The Trump Organization decided to launch a luxury residential brokerage last week partly because a huge investment wasn't required",
    image: images.archive[0],
    link: "https://www.wsj.com/articles/SB10001424052970204840504578084972836119556",
  },
  {
    title: "A Building Boom in New York Hotel Rooms",
    publication: "The New York Times",
    year: "2012",
    summary: "A Building Boom in New York Hotel Rooms",
    image: images.archive[1],
    link: "https://www.nytimes.com/2012/10/10/realestate/commercial/a-hotel-building-boom-in-new-york.html",
  },

  {
    title: "On Leaving New York",
    year: "2014",
    summary: "I’m moving to San Francisco next month",
    image: images.archive[2],
    link: "https://www.rolandli.me/on-leaving-new-york/",
  },

  {
    title: "10 Years of Eisley",
    year: "2015",
    summary:
      "But music is not just a career for the band, but a fundamental purpose.",
    image: images.archive[3],
    link: "https://www.rolandli.me/10-years-of-eisley/",
  },

  {
    title: "2011: The Year of Esports",
    year: "2011",
    summary: "The year of esports is here, and it's bigger than ever.",
    image: images.archive[4],
    link: "https://www.rolandli.me/2011-the-year-of-esports/",
  },

  {
    title: "What's the deal",
    publication: "The wall street journal",
    year: "2012",
    summary:
      "'Affordable' Housing On the West Side.Just weeks away from breaking ground on the first building in its mega-Hudson Yards development, Related Cos. has lined up financing for a residential project across the street.",
    image: images.archive[5],
    link: "https://www.wsj.com/articles/SB10001424127887323852904578127351323854118",
  },
];
