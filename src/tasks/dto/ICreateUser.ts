interface ICreateTasksDTO {
  _id?: string;
  title: string;
  description: string;
  done: boolean;
  user_id: string;
}

export { ICreateTasksDTO };
