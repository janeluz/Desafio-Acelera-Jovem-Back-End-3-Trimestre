
// declare namespace Express {
//         export interface Request {
//             user? : Record<string,any>
//         }
//     }





declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };
    }
}
// arquivo para adicionar uma nova tipagem ao express