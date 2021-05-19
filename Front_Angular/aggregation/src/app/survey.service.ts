import { Observable } from 'rxjs';
import { Vote } from './Vote';
import { Survey } from './Survey';
import { Injectable } from '@angular/core';
import { Choice } from './Choice';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

    constructor(private http: HttpClient) { }

    async closeSurvey(idSurvey:number): Promise<boolean> {

        let data = '{ "idSurvey" :' + idSurvey + '}'


        let result = await fetch(environment.apiUrl + `/close-survey`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });

        let json = await result.json()
        return json
    }

    closeSurvey2(idSurvey:number): Observable<boolean> {

        let data = '{ "idSurvey" :' + idSurvey + '}'

        return this.http.post<boolean>(environment.apiUrl + `/close-survey`, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    async getVoteNote(idSurvey:number): Promise<Array<Vote>> {

        let result = await fetch(environment.apiUrl + `/get-vote-note?idSurvey=` + idSurvey,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json
    }

    getVoteNote2(idSurvey:number): Observable<Array<Vote>> {

        return this.http.get<Array<Vote>>(environment.apiUrl + `/get-vote-note?idSurvey=` + idSurvey,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

    }

    async getAdminSurveys(idUser: number): Promise<Array<Survey>> {

        let result = await fetch(environment.apiUrl + `/get-admin-survey?idUser=` + idUser,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json

    }

    getAdminSurveys2(idUser: number): Observable<Array<Survey>> {

        return this.http.get<Array<Survey>>(environment.apiUrl + `/get-admin-survey?idUser=` + idUser, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

    }

    async vote(surveyId: number, voteList, idUser: number): Promise<number> {

        let data = '{"idSurvey":' + surveyId + ',"vote":' + JSON.stringify(voteList) + ',"idUser":' + idUser + '}';
        console.log(data)

        let result = await fetch(environment.apiUrl + `/send-vote`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });

        let json = await result.json()


        if (json.isVoted != null) return 2
        if (json.isActive != null) return 3
        if (json.surveyExist != null) return 4

        return 1
    }


    vote2 (surveyId: number, voteList, idUser: number): Observable<number>{

        let data = '{"idSurvey":' + surveyId + ',"vote":' + JSON.stringify(voteList) + ',"idUser":' + idUser + '}';
        console.log(data)


        return this.http.post<number>(environment.apiUrl + `/send-vote`,
            data,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        );
    }


    async getChoice(idSurvey: number): Promise<Array<Choice>> {

        let result = await fetch(environment.apiUrl + `/get-choices?idSurvey=` + idSurvey,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        console.log(json)
        return json

    }

    getChoice2(idSurvey: number): Observable<Array<Choice>> {

        return this.http.get<Array<Choice>>(environment.apiUrl + `/get-choices?idSurvey=` + idSurvey, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    async getSurveys(): Promise<Array<Survey>> {

        let result = await fetch(environment.apiUrl + `/get-surveys`,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await result.json()
        return json
    }

    getSurveys2(): Observable<Array<Survey>> {

        return this.http.get<Array<Survey>>(environment.apiUrl + `/get-surveys`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }


    async createSurvey(survey: Survey, listChoice: Array<string>, id_user: number): Promise<boolean> {

        let data = JSON.stringify(survey);
        let data2 = '{"survey":' + data + ',"listChoice":' + JSON.stringify(listChoice) + ',"idUser":' + JSON.stringify(id_user) + '}';

        let result = await fetch(environment.apiUrl + `/create-survey`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data2
        });

        let json = await result.json()

        return json.success
    }

    createSurvey2 (survey: Survey, listChoice: Array<string>, id_user: number): Observable<boolean> {

        let data = JSON.stringify(survey);
        let data2 = '{"survey":' + data + ',"listChoice":' + JSON.stringify(listChoice) + ',"idUser":' + JSON.stringify(id_user) + '}';

        return this.http.post<boolean>(environment.apiUrl + `/create-survey`, data2, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }
}
