export type InputOnChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type InputKeyEvent = React.KeyboardEvent<HTMLInputElement>;
export type Task = {
  name: string,
  checked: number,
  position: number
}
export type List = {
  tasks: Array<Task>
}