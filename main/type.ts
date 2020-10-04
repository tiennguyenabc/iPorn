namespace ts {
  export interface auth {
    strategy: string,
    scope?: Array<string>
  }

  export interface validate {
    payload?: object,
    params?: object,
    headers?: object,
    query?: object
  }

  export interface handler {
    description: string,
    notes: string,
    tags: Array<string>,
    handler: Function,
    auth: boolean | auth | string,
    validate?: validate
  }


  // token
  export interface tokenData {
    id: string,
    email: string,
    scope: string,
    fullName: string
  }
}

export default ts;