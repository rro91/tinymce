export interface IBank {
  id: number,
  name: string,
  address: string,
  zip: string
}

export interface ITemplate {
  title: string,
  description: string,
  content: string
}

export interface IItems {
  id: number,
  name: string,
}

export const Banks: IBank[] = [
  {
    id: 1,
    name: 'HSBC',
    address: 'Wall St 21',
    zip: '00-200'
  },
  {
    id: 2,
    name: 'Santander Bank',
    address: 'Wall St 21',
    zip: '00-200'
  },
  {
    id: 3,
    name: 'Credit Agricole',
    address: 'Wall St 21',
    zip: '00-200'
  }
]

export const Templates: ITemplate[] = [{
  title: 'Bank Details',
  description: 'Add bank name and address',
  content: '<p>{$name}</p><p>{$zip}, {$address}</p>'
},
  {
    title: "Some title 1",
    description: "Some desc 1",
    content: "<p>My content</p>",
  }
]

export const Items: IItems[] = [
  {
    id: 1,
    name: 'CreationDate'
  },
  {
    id: 2,
    name: 'LoanNumber'
  }
]


