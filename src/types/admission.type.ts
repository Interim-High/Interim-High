
export type StudentRequirements  = {
    Studenttype :string,
    details  : {
    //    image :string,
        list: string[],
        isReserve?: boolean
    }
}

export type StepData = {
    label: string;
    icon: React.ReactNode;
    list?: string[]
}

export type Governance= {
  Director :{
    name : string,
    designation : string,
    images : string
    description :string 
    skills : string[]
  }[],
  Advisor :{
    name : string,
    designation : string,
    images : string
    description :string 
    skills : string[]
  }[],
  Faculty :{
    name : string,
    designation: string,
    images : string
    description :string 
    skills : string[]
  }[],
  Staff :{
    name : string,
    designation : string,
    images : string ,
    description :string 
    skills : string[]
  }[]
}