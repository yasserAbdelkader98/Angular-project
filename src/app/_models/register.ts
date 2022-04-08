export class speakerRegister {
  constructor(
    public check: string,
    public email: string,
    public userName: string,
    public password: string,
    public address: string,
    public image: string
  ) {}
}

export class studentRegister {
  constructor(
    public check: string,
    public email: string,
    public userName: string,
    public password: string
  ) {}
}
