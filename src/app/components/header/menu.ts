import { HeaderMenu } from "./menu.model";

export const menuData: HeaderMenu[] = [
  // 0 = both, 1 = technic, 2 = admin
  {
    title: 'Products',
    url: '/products',
    group: 0,
    key: 'products',
    icon: '',
    children: [
      {
        title: 'Product List',
        url: '/products',
        group: 0,
        key: 'productList',
      },
      {
        title: 'Add Product',
        url: '/products/add',
        group: 2,
        key: 'productAdd',
      },
    ],
  },
  {
    title: 'Services',
    url: '/services',
    group: 0,
    key: 'services',
    icon: '',
    children: [
      {
        title: 'Service List',
        url: '/services',
        group: 0,
        key: 'serviceList',
      },
      {
        title: 'Add Service',
        url: '/services/add',
        group: 1,
        key: 'serviceAdd',
      },
    ],
  },
  {
    title: 'Reports',
    url: '/reports',
    group: 2,
    key: 'reports',
    icon: '',
  },
];
