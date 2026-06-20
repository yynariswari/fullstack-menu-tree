export interface Menu {
  id: number;
  name: string;
  parent_id?: number;
  depth: number;
  sort_order: number;
  children?: Menu[];
}
