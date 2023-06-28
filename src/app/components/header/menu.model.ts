
export class HeaderMenu {
  title!: string;
  url!: string;
  group!: 0 | 1 | 2;
  key!: string;
  icon!: string;
  children?: Array<SubMenu>;
}

export class SubMenu {
  title!: string;
  url!: string;
  group!: 0 | 1 | 2;
  key!: string;
}
