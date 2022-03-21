import { Photo } from "./Photo";

  export interface Member {
        id: number;
        userName: string;
        photoUrl: string;
        age: number;
        knowAs?: any;
        created: Date;
        lastActive: Date;
        gender: string;
        introduction: string;
        lookingFor: string;
        interests: string;
        city: string;
        photos: Photo[];
    }
