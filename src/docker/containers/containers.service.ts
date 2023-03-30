import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ContainersService {
  async getContainers(): Promise<Object> {
    const data = await axios({
      socketPath: '/var/run/docker.sock',
      method: 'GET',
      url: '/containers/json?all=true',
    });

    return { result: data.data ? data.data : 'Data not found!' };
  }
}
