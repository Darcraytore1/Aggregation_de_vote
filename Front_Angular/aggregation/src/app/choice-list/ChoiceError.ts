export class ChoiceError {
    isVoted: boolean
    isActive: boolean
    surveyExist: boolean

    constructor (isVoted:boolean, isActive:boolean, surveyExist: boolean){
        this.isVoted = isVoted
        this.isActive = isActive
        this.surveyExist = surveyExist
    }
}
