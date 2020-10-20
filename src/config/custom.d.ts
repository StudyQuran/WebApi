declare namespace Express {
  export interface Request {
    payload?: object
  }
}
declare namespace DB {
  export interface DBInsertRes {
    fieldCount: number
    affectedRows: number
    insertId: number
    serverStatus: number
    warningCount: number
    message: string
    protocol41: boolean
    changedRows: number
  }
  interface EnumProfile {
    id: number
    profileTypeId: number
    orgId: number
    userName: string
    profilePic: string
    profileType: string
    email?: string
  }
  interface ProfileRes extends Array<EnumProfile> {}
  interface EnumUser {
    profileId: number
    email: string
    password: string
  }
  interface UserRes extends Array<EnumUser> {}
}
declare namespace Auth {
  export interface AuthRes {
    profileType: string
    orgId: number
    userName: string
    email: string
    password: string
    schoolId?: number
    profilePic?: string
  }
}
