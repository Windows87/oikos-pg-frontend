export default interface User {
  id: number;
  name: string;
  email: string;
  group_id: number;
  is_admin: boolean;
  is_leader: boolean;
}
