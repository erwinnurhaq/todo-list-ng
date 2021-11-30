export type Priorities = 'very-high' | 'high' | 'normal' | 'low' | 'very-low';

export interface Activity {
  created_at: string;
  id: number;
  title: string;
}

export interface Todo {
  activity_group_id: number | string;
  id: number;
  is_active: number | boolean;
  priority: Priorities;
  title: string;
}

export interface ActivityGroup {
  data: Activity[];
  limit: number;
  skip: number;
  total: number;
}

export interface ActivityDetail extends Activity {
  todo_items: Todo[];
}

export interface ActivityGroupUpdate extends Activity {
  email: string;
  updated_at: string;
}

export interface TodoUpdate extends Todo {
  created_at: string;
  updated_at: string;
}

export interface Empty {}

export interface TaskForm {
  activity_group_id?: number | string;
  id?: number;
  is_active?: number | boolean;
  priority: Priorities;
  title: string;
}
