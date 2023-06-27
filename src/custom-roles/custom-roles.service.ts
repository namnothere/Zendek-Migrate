import { Injectable } from '@nestjs/common';
import { CreateCustomRoleDto } from './dto/create-custom-role.dto';
import { UpdateCustomRoleDto } from './dto/update-custom-role.dto';
import { Api } from '../fetch/zendesk';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRole } from './entities/custom-role.entity';

@Injectable()
export class CustomRolesService {
  DOMAIN: string = 'https://suzumlmhelp.zendesk.com/api/v2';
  DOMAIN_WOWI: string = "https://wowihelp.zendesk.com/api/v2";
  PATH: string = '/custom_roles';
    constructor(
      private readonly api: Api,
    ) {}

    async migrate() 
    : Promise<any> {
      const data = await this.api.get(this.DOMAIN, this.PATH);
      for(const org of data.custom_roles) {
        const request = JSON.parse(JSON.stringify({custom_role: org}));
        await this.api.post(this.DOMAIN_WOWI, this.PATH, request)
      }
    }
}
