import { InstructorAge } from "../enums/instructor-age.enum";
import { InstructorCarType } from "../enums/instructor-fuel-type.enum";

export interface IInstructorData {
    ageGroup: InstructorAge,
    car: string,
    fuelType: InstructorCarType,
    id: string,
    location: string,
    name: string,
    school: string,
}
