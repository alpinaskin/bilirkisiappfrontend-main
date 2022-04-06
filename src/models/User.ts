export interface User {
  name?: string;
  lastName?: string;
  email: string;
  password?: string;
  roles?: Array<role>
}

interface role {
  id?: number;
  name: string;
}