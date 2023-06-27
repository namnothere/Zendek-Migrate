import { HttpModule, HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Axios } from "axios";
import { firstValueFrom } from 'rxjs';
@Injectable()
export class Api {
    constructor(
        private readonly httpService: HttpService
    ) { }

    async get(
        domain: string,
        path: string,
    ): Promise<any> {
        const axiosConfig = {
            method: 'GET',
            url: encodeURI(domain + path),
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: "emi-support@suzumlm.com",
                password: "Suzu2023mlm$"
            }
        }
        return firstValueFrom(this.httpService.request(axiosConfig))
            .then((res) => res.data)
            .catch((e) => {
                console.log(e.message)
            });
    }

    async post(
      domain: string,
      path: string,
      data: any
    ) : Promise<any> {
        const axiosConfig = {
            method: 'POST',
            url: encodeURI(domain + path),
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: "conaneku01@gmail.com",
                password: "123456a@"
            },
            data
        }
        return firstValueFrom(this.httpService.request(axiosConfig))
          .then((res) => res.data)
          .catch((e) => {
              console.log(e.message, axiosConfig.data)
          });
    }
}