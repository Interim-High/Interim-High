
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