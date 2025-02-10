// export type Content = {
//     description : string,
//     Topic : {
//         title : string,
//         description : string,
//         points ?: {
//             point_Title? : string,
//             point_description : string
//         }[],
//         bullet ?: string,
//     }[];
// }[]

export type Content = {
    description?: string;
    Topic: {
      title: string;
      description?: string;
      points?: {
        point_Title: string;
        point_description: string;
      }[];
      bullet?: string[];
    }[];
  };
  