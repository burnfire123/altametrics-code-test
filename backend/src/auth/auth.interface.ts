export interface IAuthController {
  login(data: { email: string; password: string }): Promise<string>;
}
