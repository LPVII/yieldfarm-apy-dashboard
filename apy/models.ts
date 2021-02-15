export interface APY {
  symbol: string,
  yieldsstart: string,
  datestart: string,
  website: string,
  tokenaddress: string,
  priceusd: string,
  marketcapusd: string,
  title: string,
  imagelink: string,

  balance?: string
}

export interface Call {
  address: string
  name: string
  params?: any[]
}
