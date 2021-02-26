export interface IBank {
  id: number;
  name: string;
  address: string;
  zip: string;
}

export interface ITemplate {
  title: string;
  description: string;
  content: string;
}

export interface IItems {
  id: number;
  name: string;
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
];

export const Templates: ITemplate[] = [
  {
    title: 'Bank Details',
    description: 'Add bank name and address',
    content: '<p>{$bankName}<br/>{$bankAddress}<br/>{$bankZip}</p>'
  },
  {
    title: 'Date',
    description: 'Add creation date',
    content: '<p>{$creationDate}</p>'
  },
  {
    title: 'TF initials',
    description: 'Add TF initials',
    content: '<p>{$tfInitials}</p>'
  },
  {
    title: 'References',
    description: 'Add main transaction reference details',
    content: '<p>Dear Sirs,<br/>Our Ref: {$reference}<br/>Sale to: {$saleTo}<br/>Purchase: {$purchase}<br/>Goods: {$goods}</p>',
  },
  {
    title: 'Subject',
    description: 'Add the main subject',
    content: '<p style="text-decoration: underline"><strong>Subject: Receivable Advance Request for {$currency} {$amount}</strong></p>'
  },
  {
    title: 'Content',
    description: 'Add content',
    content: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>'
  },
  {
    title: 'Signature',
    description: 'Add signature area',
    content: '<div style="display: flex; justify-content: space-between"><div style="text-align: center">....................<br/>Authorized signature</div><div style="text-align: center">....................<br/>Authorized signature</div></div>'
  },
  {
    title: 'Supporting documents list',
    description: 'Add supporting documents list',
    content: '<div class="iterable" data-object="supportingDocs"><p>We attach following copy documents: </p><ul class="iterable-container"><li class="iterationItem">{$documentName}</li></ul></div>'
  },
];

export const Items: IItems[] = [
  {
    id: 1,
    name: 'CreationDate'
  }
];


