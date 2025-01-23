// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const posts = [
  {
    id: 0,
    title:
      "When Looking for Security Threats Follow Facts, Not Assumptions | Opinion",
    description:
      "January presents a series of security challenges for our nation's capital.",
    url: "https://www.newsweek.com/when-looking-security-threats-follow-facts-not-assumptions-opinion-2014361",
    url_to_image: "https://d.newsweek.com/en/full/2563742/after-explosion.jpg",
    published_at: "2025-01-16T10:22:01Z",
    customer_id: customers[0].id,
    content:
      "January presents a series of security challenges for our nation's capital. The 6th of the month marked the fourth anniversary of the infamous attack on the Capitol as well as the day that Congress ce… [+4860 chars]",
  },
  {
    id: 1,
    title: "These Stocks Are Moving the Most Today",
    description:
      "TSMC, Nvidia, Tesla, Bank of America, Morgan Stanley, UnitedHealth, and More",
    url: "https://biztoc.com/x/e9937c349e396d3c",
    url_to_image: "https://biztoc.com/cdn/e9937c349e396d3c_s.webp",
    published_at: "2025-01-16T10:11:45Z",
    customer_id: customers[1].id,
    content:
      "TSMC, Nvidia, Tesla, Bank of America, Morgan Stanley, UnitedHealth, and More\r\nThis story appeared on barrons.com, 2025-01-16 10:01:49.",
  },
  {
    id: 2,
    title:
      "Artificial Intelligence's Impact on Mining: AI is Revolutionizing the Global Mining Industry with Autonomous Machinery and Predictive Maintenance",
    description:
      "AI-Powered Wearable Sensors Safeguard Miners Against Fatigue and Accidents AI-Powered Wearable Sensors Safeguard Miners Against Fatigue and Accidents",
    url: "https://www.globenewswire.com/news-release/2025/01/16/3010595/28124/en/Artificial-Intelligence-s-Impact-on-Mining-AI-is-Revolutionizing-the-Global-Mining-Industry-with-Autonomous-Machinery-and-Predictive-Maintenance.html",
    url_to_image:
      "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
    published_at: "2025-01-16T10:01:00Z",
    customer_id: customers[4].id,
    content:
      'Dublin, Jan. 16, 2025 (GLOBE NEWSWIRE) -- The "Thematic Intelligence: Artificial Intelligence in Mining (2024)" report has been added to ResearchAndMarkets.com\'s offering.\r\nMining companies are inves… [+8751 chars]',
  },
  {
    id: 3,
    title:
      "Ben Affleck charged with crime? Actor's intense encounter with police outside LA home amid FBI investigation",
    description:
      "Ben Affleck was seen in a heated exchange with law enforcement outside his Brentwood home on Tuesday, days after FBI agents visited his property. Photographs captured the 52-year-old leaning out of his BMW window, gesturing animatedly toward two officers in a…",
    url: "https://economictimes.indiatimes.com/news/international/global-trends/us-new-ben-affleck-la-wildfire-charged-with-crime-actors-intense-encounter-with-police-outside-la-home-amid-fbi-investigation/articleshow/117295723.cms",
    url_to_image:
      "https://img.etimg.com/thumb/msid-117295973,width-1200,height-630,imgsize-114490,overlay-economictimes/articleshow.jpg",
    published_at: "2025-01-16T09:40:10Z",
    customer_id: customers[3].id,
    content:
      "Hollywood veteran Ben Affleck is one of the celebrities who had to flee their home in Los Angeles due to the devastating Pacific Palisades fire. The Argo director, 52, was evacuated from the $20 mill… [+4398 chars]",
  },
  {
    id: 4,
    title:
      "Stock Market Today: S&P 500, Dow, Nasdaq Set to Open Up; TSMC, Tesla, Nvidia, AT&T, More Movers; Bank Earnings; Treasury Yields Rise",
    description:
      "LIVE UPDATES\nDow Set to Open Up as Markets Digest Inflation Data\nS&P 500 and Nasdaq futures are also rising in premarket trading Thursday with more big banks set to report earnings.\nLast Updated:\nJan. 16, 2025 at 4:02 AM EST\nKey Events\nPinned Post\nU.S. stock …",
    url: "https://biztoc.com/x/c80ff6f33ffb74fc",
    url_to_image: "https://biztoc.com/cdn/c80ff6f33ffb74fc_s.webp",
    published_at: "2025-01-16T09:05:43Z",
    customer_id: customers[5].id,
    content:
      "LIVE UPDATESDow Set to Open Up as Markets Digest Inflation DataS&amp;P 500 and Nasdaq futures are also rising in premarket trading Thursday with more big banks set to report earnings.Last Updated:Jan… [+142 chars]",
  },
  // {
  //   id: 5,
  //   title: "Bluesky to Release Its Own Photo and Video Sharing App ‘Flashes’",
  //   description:
  //     "The app is based on the same open-source AT protocol that underpins Bluesky.\nThe post Bluesky to Release Its Own Photo and Video Sharing App ‘Flashes’ appeared first on MEDIANAMA.",
  //   url: "https://www.medianama.com/2025/01/223-bluesky-photo-video-sharing-app-flashes/",
  //   url_to_image:
  //     "https://www.medianama.com/wp-content/uploads/2021/03/NEW-1280X720-FEATURED-10.png",
  //   published_at: "2025-01-16T08:59:20Z",
  //   customer_id: customers[2].id,
  //   content:
  //     "Bluesky, a competitor to X (formerly Twitter), will soon have its own photo and video-sharing application, Flashes. The app, which is yet to be officially released, uses code from their previous iOS/… [+2517 chars]",
  // },
  // {
  //   id: 6,
  //   title:
  //     "Bitwise CIO Matt Hougan Predicts Explosion of Corporate Bitcoin Purchases in ‘Overlooked Megatrend’",
  //   description:
  //     "Matt Hougan thinks the burgeoning trend of corporate Bitcoin (BTC) purchases is only beginning. In a new analysis, the chief investment officer of the crypto asset management firm Bitwise predicts that hundreds of companies will add BTC to their corporate tre…",
  //   url: "https://dailyhodl.com/2025/01/16/bitwise-cio-matt-hougan-predicts-explosion-of-corporate-bitcoin-purchases-in-overlooked-megatrend/",
  //   url_to_image:
  //     "https://dailyhodl.com/wp-content/uploads/2025/01/Corporate-Bitcoin-Purchases.jpg",
  //   published_at: "2025-01-16T08:04:30Z",
  //   customer_id: customers[2].id,
  //   content:
  //     "Matt Hougan thinks the burgeoning trend of corporate Bitcoin (BTC) purchases is only beginning.\r\nIn a new analysis, the chief investment officer of the crypto asset management firm Bitwise predicts t… [+2340 chars]",
  // },
  // {
  //   id: 7,
  //   title: "Tesla (NASDAQ:TSLA) Trading 1.4% Higher on Analyst Upgrade",
  //   description:
  //     "Tesla, Inc. (NASDAQ:TSLA – Get Free Report)’s stock price traded up 1.4% on Tuesday after Barclays raised their price target on the stock from $270.00 to $325.00. Barclays currently has an equal weight rating on the stock. Tesla traded as high as $422.64 and …",
  //   url: "https://www.etfdailynews.com/2025/01/16/tesla-nasdaqtsla-trading-1-4-higher-on-analyst-upgrade/",
  //   url_to_image:
  //     "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
  //   published_at: "2025-01-16T06:58:56Z",
  //   customer_id: customers[2].id,
  //   content:
  //     "Tesla, Inc. (NASDAQ:TSLA – Get Free Report)’s stock price traded up 1.4% on Tuesday after Barclays raised their price target on the stock from $270.00 to $325.00. Barclays currently has an equal weig… [+5810 chars]",
  // },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

export { users, customers, invoices, revenue, posts };
