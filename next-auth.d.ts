declare module "next-auth" {
  export interface Session {
    id: string;
  }
  export interface JWT {
    id: string;
  }
}
