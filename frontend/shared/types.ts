export type ResultDataCategory = {
  name: string
  [k: string]: any
}

export type ResultDataHours = {
  display: string
  open_now: boolean
  [k: string]: any
}

export type ResultDataLocation = {
  formatted_address: string
  [k: string]: any
}

export type ResultsData = {
  name: string
  categories: ResultDataCategory[]
  hours: ResultDataHours
  location: ResultDataLocation
  price: number
  rating: number
}

export type ResultsTableProps = {
  results: ResultsData[]
}
