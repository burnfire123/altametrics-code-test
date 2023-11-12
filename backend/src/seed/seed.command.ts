import { Inject, Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { ISeedService } from './seed.interface';
import { SeedService } from './seed.service';

@Injectable()
export class SeedCommand {
  constructor(@Inject(SeedService) private seedService: ISeedService) {}
  @Command({
    command: 'seed',
    describe: 'Seeds the database',
  })
  async seed(): Promise<void> {
    await this.seedService.seed();
  }
}
