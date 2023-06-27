import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { OrganizationsModule } from './organizations/organizations.module';
import { AttachmentsModule } from './attachments/attachments.module';
import { Attachments } from './attachments/entities/attachment.entity';
import { Organization } from './organizations/entities/organization.entity';
import { TicketsModule } from './tickets/tickets.module';
import { Ticket } from './tickets/ticket.entity';
import { FieldModule } from './field/field.module';
import { ViaModule } from './via/via.module';
import { ChannelModule } from './channel/channel.module';
import { SourceModule } from './source/source.module';
import { FromModule } from './from/from.module';
import { From } from './from/entities/from.entity';
import { Source } from './source/entities/source.entity';
import { Channel } from './channel/entities/channel.entity';
import { Via } from './via/entities/via.entity';
import { Field } from './field/entities/field.entity';
import { ToModule } from './to/to.module';
import { To } from './to/entities/to.entity';
import { LocalesModule } from './locales/locales.module';
import { Locale } from './locales/entities/locale.entity';
import { GroupsModule } from './groups/groups.module';
import { Groups } from './groups/entities/group.entity';
import { CustomRolesModule } from './custom-roles/custom-roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password:  process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        User,
        Attachments,
        Organization,
        Ticket,
        Field,
        Via,
        Channel,
        Source,
        From,
        To,
        Locale,
        Groups
      ],
      synchronize: true,
    }),
    UsersModule,
    OrganizationsModule,
    AttachmentsModule,
    TicketsModule,
    FieldModule,
    ViaModule,
    ChannelModule,
    SourceModule,
    FromModule,
    ToModule,
    LocalesModule,
    GroupsModule,
    CustomRolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
