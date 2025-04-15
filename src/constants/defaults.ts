export const defaultInputEditorValue =
  `{
  "id": 1,
  "group": "user",
  "user": {
    "name": "Jhon",
    "lastname": "Doe"
  }
}
`;

export const defaultOutputEditorValue =
  `{
  "id": 1,
  "group": "user",
  "user.name": "Jhon",
  "user.lastname": "Doe"
}
`;

export const defaultInterfaceValue =
  `interface RootObject {
  id: number;
  group: string;
  'user.name': string;
  'user.lastname': string;
}
`
