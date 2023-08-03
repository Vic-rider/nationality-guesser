import axios, { AxiosResponse } from 'axios';

export class CountryGuesser {

  result: any = null;

  constructor() {}

  guessCountryOf(name: string): Promise<AxiosResponse> {

    return new Promise((resolve, reject) => {
      axios.get(`https://api.nationalize.io/?name=${name}`)
        .then((response:any) => {
          this.result = response.data.gender;
          if(this.result) resolve(this.result);
        })
        .catch(() => {
          reject(this.result);
        });
    });
  }


}
