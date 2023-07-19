import { ChainConfig } from './type';

export const Config: ChainConfig = {
  chainId: 56,
  chainName: 'BNB Chain',
  etherscanName: 'BscScan',
  rpcUrl: 'https://bsc-dataseed1.binance.org/',
  explorerUrl: 'https://bscscan.com',
  multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
  graph: {
    analytics: 'https://subgraph.satsuma-prod.com/bd12c59de673/levelfinance/analytics/api',
    levelMaster: 'https://api.thegraph.com/subgraphs/name/level-fi/level-master',
  },
  api: {
    tracker: 'https://llp-api.level.finance/56',
    live: 'https://api.level.finance'
  },
  pool: '0xA5aBFB56a78D2BD4689b25B8A77fd49Bb0675874',
  minichef: '0x5aE081b6647aEF897dEc738642089D4BDa93C0e7',
  tranches: [
    {
      id: 0,
      address: '0xB5C42F84Ab3f786bCA9761240546AA9cEC1f8821',
      name: 'Senior Tranche',
      lp: 'SLP',
      slug: 'senior',
    },
    {
      id: 1,
      address: '0x4265af66537F7BE1Ca60Ca6070D97531EC571BDd',
      name: 'Mezzanine Tranche',
      lp: 'MLP',
      slug: 'mezzanine',
    },
    {
      id: 2,
      address: '0xcC5368f152453D497061CB1fB578D2d3C54bD0A0',
      name: 'Junior Tranche',
      lp: 'JLP',
      slug: 'junior',
    },
  ],
  tokens: {
    SLP: {
      address: '0xB5C42F84Ab3f786bCA9761240546AA9cEC1f8821',
      decimals: 18,
      fractionDigits: 2,
      priceFractionDigits: 3,
      name: 'Senior LLP',
      shortName: 'SnrLLP',
      threshold: 0.01,
      priceThreshold: 0.001,
      logo: 'https://raw.githubusercontent.com/level-fi/assets/main/LLP-256.png',
    },
    MLP: {
      address: '0x4265af66537F7BE1Ca60Ca6070D97531EC571BDd',
      decimals: 18,
      fractionDigits: 2,
      priceFractionDigits: 3,
      name: 'Mezzanine LLP',
      shortName: 'MzeLLP',
      threshold: 0.01,
      priceThreshold: 0.001,
      logo: 'https://raw.githubusercontent.com/level-fi/assets/main/LLP-256.png',
    },
    JLP: {
      address: '0xcC5368f152453D497061CB1fB578D2d3C54bD0A0',
      decimals: 18,
      fractionDigits: 2,
      priceFractionDigits: 3,
      name: 'Junior LLP',
      shortName: 'JnrLLP',
      threshold: 0.01,
      priceThreshold: 0.001,
      logo: 'https://raw.githubusercontent.com/level-fi/assets/main/LLP-256.png',
    },
    BTC: {
      address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      decimals: 18,
      fractionDigits: 5,
      priceFractionDigits: 2,
      threshold: 0.00001,
    },
  },
  rewardToken: 'LVL'
};
