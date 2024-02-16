import { HttpResponse, http } from 'msw';

export const EDIT_INVOICE_HANDLERS = [
  http.get('/api/invoices/6e1a92c1-6ac3-43ce-8ef4-19b5938b1935', () => {
    return HttpResponse.json({
      id: '6e1a92c1-6ac3-43ce-8ef4-19b5938b1935',
      name: 'Little, Bartoletti and Herzog',
      createdAt: '2022-10-25',
      validUntil: '2023-03-11',
      recipient: {
        id: '92e9b22d-031b-4682-9be1-7f101da32d60',
        companyName: 'Von - Beier',
        city: 'Cincinnati',
        street: 'June Radial',
        postcode: '46-328',
        nip: '7445130260',
        phone: '611-357-7695',
        email: 'Rasheed_Ryan95@yahoo.com',
        bankAccount: '710479112921175505982856',
      },
      sender: {
        id: 'ee200c64-e859-4bce-be27-166f95db1d14',
        companyName: 'Schaden - Gusikowski',
        city: 'St. Louis Park',
        street: 'Zieme Rapid',
        postcode: '16-175',
        nip: '8573563438',
        phone: '(694) 398-9970 x7065',
        email: 'Brian.Schuster@hotmail.com',
        bankAccount: '087671053659441694242127',
      },
      items: [
        {
          id: '09598d41-0abf-4917-9ae1-bd5e18ff5e3f',
          name: 'Dynamic',
          amount: 59,
          unit: 'items',
          tax: 23,
          price: '405.28',
        },
      ],
    });
  }),

  http.put('/api/invoices/6e1a92c1-6ac3-43ce-8ef4-19b5938b1935', () => {
    return HttpResponse.json({
      id: '6e1a92c1-6ac3-43ce-8ef4-19b5938b1935',
      name: 'Little, Bartoletti and Herzog',
      createdAt: '2022-10-25',
      validUntil: '2023-03-11',
      recipient: {
        id: '92e9b22d-031b-4682-9be1-7f101da32d60',
        companyName: 'Von - Beier changed',
        city: 'Cincinnati',
        street: 'June Radial',
        postcode: '46-328',
        nip: '7445130260',
        phone: '611-357-7695',
        email: 'Rasheed_Ryan95@yahoo.com',
        bankAccount: '710479112921175505982856',
      },
      sender: {
        id: 'ee200c64-e859-4bce-be27-166f95db1d14',
        companyName: 'Schaden - Gusikowski',
        city: 'St. Louis Park',
        street: 'Zieme Rapid',
        postcode: '16-175',
        nip: '8573563438',
        phone: '(694) 398-9970 x7065',
        email: 'Brian.Schuster@hotmail.com',
        bankAccount: '087671053659441694242127',
      },
      items: [
        {
          id: '09598d41-0abf-4917-9ae1-bd5e18ff5e3f',
          name: 'Dynamic',
          amount: 59,
          unit: 'items',
          tax: 23,
          price: '405.28',
        },
      ],
    });
  }),
];
